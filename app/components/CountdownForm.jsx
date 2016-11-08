var React = require('react');

var CountDownForm = React.createClass({

      onSubmit:function(e){
            e.preventDefault();

            var strSeconds = this.refs.seconds.value;

            if(strSeconds.match(/^[0-9]*$/) ){
                 this.refs.seconds.value;
                 this.props.onSetCountdown(parseInt(strSeconds,10));  //call to onSetCountdown function in CountDown
            }
      },
      render:function(){
           console.log('Rendering in CountDownForm Child component')
           return(

               <div>

                  <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                     
                      <input type="text" ref="seconds" placeholder="Enter time in seconds"/>

                      <button className="button expanded">Start</button>

                  </form>


               </div>


           );
      
      }

});

module.exports = CountDownForm;