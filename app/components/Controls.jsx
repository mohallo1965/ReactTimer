var React = require('react');

var Controls = React.createClass({
      
       start:function(){

           console.log('Starting timer');

           //this.props.startTimer();
            
       },
       reset:function(){

           console.log('Resetting timer');
           
           //this.props.resetTimer();

            
       },
       render:function(){

          return (

              <div>
               

                   <span>
                      <button onClick={this.start}>Start</button>
                      <button onClick={this.reset}>Reset</button>
                   </span>
               
               
               </div>
          )

       }
});


module.exports = Controls;