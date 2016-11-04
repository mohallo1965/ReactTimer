function sayHello(){

    console.log('Hello there');

    function whatLanguage(){

        return 'English';
    }
    return whatLanguage;
}

//var greeting = sayHello();
//console.log(greeting());
var blah = sayHello();
sayHello();



function something() {
  function showName() {
    var name = "Apple";
    alert(name);
  }
  
  return showName;
}

var blah = something();
something();


var groceries = ["milk","Sugar"];
groceries.push("Bread");
groceries.pop(0);
console.log("grocesries length is"+groceries.length);

var meats = ["pork loing","Chicken"]
var newArray = groceries.concat(meats);
console.log("newArray lenthg is:"+newArray.length);

var lights = [];
lights.push("stream");

var funnyGuy = {}
funnyGuy.lastName = "Fleming";
funnyGuy.firstName = "Michael";

var funnyGuy1 = {

    lastName:"fleming",
    firstName:"Michael",

    getLastName:function(){
        return this.lastName;
    }
}


//create prototype Person for other objects .

var person = {

    firstName:"Bill",
    lastName:"James",

    getFirstName:function getFirstName(){
        return this.firstName;
    },

    getLastName:function getLastName(){
        return this.lastName;
    },

    getName:function getName(){
        return this.firstName +" " +this.lastName;
    }

}

var logName = function(lang,lang2){
    console.log('Logged:' + this.getName());
    console.log('Arguments are: '+lang + ' ' +lang2);
    console.log('---------------------');
}//.bind(personBind);//can also bind here which is probably better .

var dude = Object.create(person);
dude.firstName = 'clive';
dude.lastName = 'owen';
console.log('the dudes name is '+dude.getName());


logName.call(person,'en','es');
logName.call(dude,'en','es');







