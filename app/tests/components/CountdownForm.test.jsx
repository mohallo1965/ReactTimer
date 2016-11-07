var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () =>{

   it('should exist',() => {

       expect(CountdownForm).toExist();
   });

   it('should call onSetCountdown if valid seconds endtered',() => {

       var spy = expect.createSpy();
       var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);

       var $el = $(ReactDOM.findDOMNode(countdownForm));

       countdownForm.refs.seconds.value = '109';

       TestUtils.Simulate.submit($el.find('form')[0]);

       expect(spy).toHaveBeenCalledWith(109);

   })

   it('should not call onSetCountdown as it does not pass validation valid seconds endtered',() => {

       var spy = expect.createSpy();

       //the spy will be {this.handleSetCountdown} in countdown.jsx
       var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);

       var $el = $(ReactDOM.findDOMNode(countdownForm));

       countdownForm.refs.seconds.value = '109A';

       TestUtils.Simulate.submit($el.find('form')[0]);

       expect(spy).toNotHaveBeenCalled();

   })

});

