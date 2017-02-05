var moment = require('moment');
var today = new Date();
var curHr = today.getHours();

var should = require('chai').should();
var mybutterfly = require('../index');
var wish = mybutterfly.wish;
var print;
var name = 'Yosadhara';
var obj = [1,2,3];
var number = 123;

if (curHr < 12) {
	print = "Good Moring, Dear ";
} else if (curHr < 18) {
	print = "Good Afternoon, Dear ";
} else {
	print = "Good Evening, Dear "
}

describe('#wish', function() {

	it('Wish to given name', function(){
		wish(name).should.equal(print+"Yosadhara. Its " + moment().format("dddd, h:mm a"));
	});

	it('Check wheather given name is a Number', function(){
		wish(number).should.equal("Common yar!!, you have given a Number, not a name!!");
	});

	it('Check wheather given name is an Object', function(){
		wish(obj).should.equal("It's an Object, not a name!!");
	});

});