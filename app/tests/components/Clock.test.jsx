var  React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

//describe groups your tests and gives them meaningfull names
describe('clock', () => {

    it('should exist',() => {
       
       expect(Clock).toExist();

    });

    describe('render', () =>{
        it('should render clock to output' ,() =>{

            var clock = TestUtils.renderIntoDocument(<Clock  totalSeconds={62}/>);

            //NOTE:
            //ReactDOM.findDOMNode(componentInstance)
            //Given a component instance, this function will return the DOM node belonging to 
            //the outermost HTML element returned by render. 
            var $el = $(ReactDOM.findDOMNode(clock));
            console.log($el);
            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');
        });

    }); 

    describe('formatSeconds',() =>{

       it('should format seconds', () => {
           //returns a Clock Component .I guess as a String 
           var clock = TestUtils.renderIntoDocument(<Clock/>);
           var seconds = 615;
           var expected = '10:15';
           var actual = clock.formatSeconds(seconds);

           expect(actual).toBe(expected);

       });
       it('should format seconds when min/sec are less than 10', () => {
           //returns a Clock Component .I guess as a String 
           var clock = TestUtils.renderIntoDocument(<Clock/>);
           var seconds = 61;
           var expected = '01:01';
           var actual = clock.formatSeconds(seconds);

           console.log('Actual is:'+actual);

           expect(actual).toBe(expected);

       });  

    });

});
