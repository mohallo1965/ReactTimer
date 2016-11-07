var  React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');


describe('CountDown ',() => {

    it('CountDown does exist',() =>{

       expect(CountDown ).toExist();

    });

    describe('handleSetCountDown', () =>{

         //done tells mocha that this is an asychronous test and wait until done() is called to end the test
         it('should set state to started and countdown' ,(done) => {

             var countdown = TestUtils.renderIntoDocument(<CountDown/>);
             countdown.handleSetCountdown(10);

             expect(countdown.state.count).toBe(10);
             expect(countdown.state.countdownStatus).toBe('started');

             setTimeout( () => {
                 expect(countdown.state.count).toBe(9);
                 done();
             },1001)

         }); 

          //done tells mocha that this is an asychronous test and wait until done() is called to end the test
         it('should never set count less than zero' ,(done) => {

             var countdown = TestUtils.renderIntoDocument(<CountDown/>);
             countdown.handleSetCountdown(1);

             setTimeout( () => {
                 expect(countdown.state.count).toBe(0);
                 done();
             },1003)

         });   
    });



});


