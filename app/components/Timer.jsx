var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({

    getInitialState:function(){
         return{
           count:0,
           countdownStatus:'paused'

         }

    },
    startTimer:function(count){

         console.log("Starting the Timer....");
                 
         this.timer = setInterval( () =>{

                var newCount = this.state.count+1;
                 
                this.setState({
                      count:newCount 
                });

         },1000);

         

    },
    componentDidUpdate:function(prevProps,prevState){
   
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

    handleSetCountdown:function(seconds){

         console.log('handleSetCountdown in Timer.jsx:'+seconds);
         
         this.setState({

             count:seconds,
             countdownStatus:'started'


         });

    },
    handleStatusChange:function(status){
        console.log('Status change in Timer.jsx'+status);

        
        this.setState({
           
               countdownStatus:status
 
        });
    },
    //Kill the timer or else get errors about trying to update an unmounted component
    componentWillUnmount:function(){
           console.log('component did unmount');
           clearInterval(this.timer);
           this.timer = undefined;
    },
    render:function(){

        //console.log('render function running in Timer.jsx');

        var {count,countdownStatus} = this.state;

        return(

            <div>
            
              <Clock totalSeconds={count}/>
              <Controls  countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>

          
            
            </div>
        );
    }
});



module.exports = Timer;