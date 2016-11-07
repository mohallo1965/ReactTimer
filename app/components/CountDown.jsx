var React = require('react');
var Clock = require('Clock');

var CountdownForm = require('CountdownForm');

var CountDown = React.createClass({

    timer:undefined,
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

    render:function(){

        console.log('Rendering on component state change or page load ');

        //destructering
        var {count} = this.state;
        
        return(

            <div>
            
              <Clock totalSeconds={count} />

              <CountdownForm  onSetCountdown={this.handleSetCountdown}/>

            </div>


        );
    }


});

module.exports = CountDown;

