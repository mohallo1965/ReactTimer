var React = require('react');

var Controls = React.createClass({

       getDefaultProps:function(){
          return {
            countdownStatus: 'stopped'
          }
       },
       
       propTypes: {
          countdownStatus:React.PropTypes.string.isRequired

       },
       
      
       start:function(){

           console.log('Starting timer');

           //this.props.startTimer();
            
       },
       reset:function(){

           console.log('Resetting timer');
           
           //this.props.resetTimer();

            
       },
       render:function(){

          var {countdownStatus} = this.props;
          
          var renderStartStopButton = () => {
              if(countdownStatus  === 'started'){
                  return <button className="button secondary">Pause</button>
              }else if (countdownStatus === 'paused'){
                  return <button className="button primary">Start</button>
              }
          };

          return (

                <div className="controls">
                   {renderStartStopButton}
                   <button className="button alert hollow">Clear</button>
                </div>
          )

       }
});


module.exports = Controls;