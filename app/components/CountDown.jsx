var React = require('react');
var Clock = require('Clock');

var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var CountDown = React.createClass({

   
    getInitialState:function(){
        return {
           count:0,
           countdownStatus: 'stopped'
        }
        
    },
    
    startTimer:function(){
        console.log('*** TIMER IS RUNNING ******');
        this.timer = setInterval(() => {
           
            var newCount = this.state.count -1 ;
            this.setState({
                count:newCount >= 0 ? newCount : 0
            });

            //when it get to 0 the CountDown form will be shown again.
            if(newCount == 0){
                this.setState({countdownStatus:'stopped'})
            }

        },1000);

        
    },
    componentDidUpdate:function(prevProps,prevState){
       console.log('Component did render and there was a state or prop change');
       if(this.state.countdownStatus != prevState.countdownStatus){
           switch(this.state.countdownStatus){
             case 'started':
                this.startTimer();
                break;
             case 'stopped':
                this.setState({count:0});
             case 'paused':
                clearInterval(this.timer);
                this.timer = undefined;
                break;
           }
       }
    },

    componentWillUpdate:function(nexProps,nextState){

    },
    componentWillUnmount:function(){
           console.log('component did unmount');
           clearInterval(this.timer);
           this.timer = undefined;
    },
    componentWillMount:function(){
        console.log('Component will Mount')
    },
    componentDidMount:function(){
        console.log('Component Did mount');
    },
    handleSetCountdown:function (timeInseconds){
        
        console.log('seconds in handleSetCountdown is:'+timeInseconds);
        this.setState({
            count: timeInseconds,
            countdownStatus: 'started'
        });

        //state has yet to change .
        console.log('count is now :'+this.state.count);

        

    },
    handleStatusChange:function(newStatus){
         this.setState({countdownStatus: newStatus});
    },

    render:function(){

        console.log('Rendering in CountDown parent component');
        
        //destructering
        var {count,countdownStatus} = this.state;

        var renderControlArea = () =>{
            
            if(countdownStatus !== 'stopped'){
                return  <Controls  countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
            }else{
                return  <CountdownForm  onSetCountdown={this.handleSetCountdown}/>
            }

        };

       
        
        return(

            <div>
              <h1 className="page-title">Countdown App</h1>
              <Clock totalSeconds={count} />

              {renderControlArea()}

            </div>


        );
    }


});

module.exports = CountDown;

