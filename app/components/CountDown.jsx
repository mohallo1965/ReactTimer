var React = require('react');
var Clock = require('Clock');

var CountdownForm = require('CountdownForm');

var CountDown = React.createClass({

    timer:undefined,
    getInitialState:function(){
        return {
           count:0
        }
        
    },
    createSeconds:function(){

        
        var that = this;

        var count=this.state.count;
      
        console.log('count is:'+count);
        this.timer = setInterval(function(){
            
            var date = new Date();
               
            //console.log('running....'+seconds);
            that.setState({count:count--});
        },1000);

    },
    start:function(){
        console.log('starting in Counting Down..');
        if(! this.timer)
           this.createSeconds();
    },
    reset:function(){
       clearInterval(this.timer);
       this.createSeconds();
    },
    componentDidMount:function(){
       

        //this.createSeconds();
    },

    handleSetCountdown:function(timeInseconds){
        debugger;
        console.log('seconds in handleSetCountdown is:'+timeInseconds);
        this.setState({count:timeInseconds});

        console.log('count is now :'+this.state.count);

        //this.createSeconds();

    },

    render:function(){

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

