var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var CountDown = React.createClass({

    timer:undefined,
    getInitialState:function(){
        return {
           totalSeconds:0
        }
        
    },
    createSeconds:function(){

        
        var that = this;

        var seconds=0;
        that.timer = setInterval(function(){
            
            var date = new Date();
               
            //console.log('running....'+seconds);
            that.setState({totalSeconds:seconds++});
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
        console.log('CountDown component did mount');
        console.log('CountDown seconds are:'+this.state.totalSeconds);

        //this.createSeconds();
    },

    render:function(){

        
        return(

            <div>
            
              <Clock totalSeconds={this.state.totalSeconds} />

              <Controls  startTimer={this.start}  resetTimer={this.reset}/>

            </div>


        );
    }


});

module.exports = CountDown;

