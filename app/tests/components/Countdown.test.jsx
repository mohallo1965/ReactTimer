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

         it('should pause countdown on started status', (done) =>{
             var countdown = TestUtils.renderIntoDocument(<CountDown/>);
             console.log('Created component');
             countdown.handleSetCountdown(3);
             console.log('Set The timer');

             countdown.handleStatusChange('started');
             console.log('changed the status to started');

             setTimeout( () => {
                 console.log('SetTimeout running with tests');
                 expect(countdown.state.count).toBe(2);
                 expect(countdown.state.countdownStatus).toBe('started');
                 done();
             },1001)

         });

         it('should stop countdown on stopped status', (done) =>{
             var countdown = TestUtils.renderIntoDocument(<CountDown/>);
             console.log('Created component');
             countdown.handleSetCountdown(7);
             console.log('Set The timer');

             countdown.handleStatusChange('started');
             console.log('changed the status to started');

             setTimeout( () => {
                 countdown.handleStatusChange('stopped');

                 console.log('SetTimeout running with tests');
                 expect(countdown.state.count).toBe(0);//when stopped count is set to zero .
                
                 expect(countdown.state.countdownStatus).toBe('stopped');
                 done();
             },1002)

         });

        it('timer should not be running', (done) =>{
             var countdown = TestUtils.renderIntoDocument(<CountDown/>);
             console.log('Checking Timer Created component');
             countdown.handleSetCountdown(7);
             console.log('Set The timer');

             countdown.handleStatusChange('stopped');
             console.log('changed the status to started');

             setTimeout( () => {
                 
                 console.log('SetTimeout running with tests');
                 expect(countdown.state.count).toBe(0);//when stopped count is set to zero .
                
                 expect(countdown.state.countdownStatus).toBe('stopped');
                 done();
             },1002)

         }); 
    });

});


