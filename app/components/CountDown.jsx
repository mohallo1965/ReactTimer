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
        this.timer = setInterval(() => {
            debugger;
            var newCount = this.state.count -1 ;
            this.setState({
                count:newCount >= 0 ? newCount : 0
            });

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
        debugger;
        //destructering
        var {count,countdownStatus} = this.state;

        var renderControlArea = () =>{
            debugger;
            if(countdownStatus !== 'stopped'){
                return  <Controls  countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
            }else{
                return  <CountdownForm  onSetCountdown={this.handleSetCountdown}/>
            }

        };

       
        
        return(

            <div>
            
              <Clock totalSeconds={count} />

              {renderControlArea()}

            </div>


        );
    }


});

module.exports = CountDown;

