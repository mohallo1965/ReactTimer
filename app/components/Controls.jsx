var React = require('react');

var Controls = React.createClass({

            
       propTypes: {
          countdownStatus:React.PropTypes.string.isRequired,
          onStatusChange:React.PropTypes.func.isRequired

       },
       onStatusChange:function(newStatus){

           return () => {

               this.props.onStatusChange(newStatus);
           }


       },
       ////this function will get called anytime it component props change.
       //it will capture prop changes.Look at weather.jsx ,where the url changes and we can capture the new props
       //componentWillReceiveProps:function(newProps){
       //       console.log('component will Receive Props',newProps.countdownStatus);
       //},
       render:function(){
          //console.log('Rendering in Child Controls');
          var {countdownStatus} = this.props;
          
          var renderStartStopButton = () => {
              if(countdownStatus  === 'started'){
                  return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
              }else{
                  return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
              }
          };

          return (

                <div className="controls">
                   {renderStartStopButton()}
                   <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
                </div>
          )

       }
});


module.exports = Controls;