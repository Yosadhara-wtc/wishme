var moment = require('moment');

var today = new Date();

var curHr = today.getHours(); 

module.exports = {

    wish: function(name){

		if(typeof name == 'string') {

			if (curHr < 12) {
				return "Good Moring, Dear " + name + ". Its " + moment().format("dddd, h:mm a");
			} else if (curHr < 18) {
				return "Good Afternoon, Dear " + name + ". Its " + moment().format("dddd, h:mm a");
			} else {
				return "Good Evening, Dear " + name + ". Its " + moment().format("dddd, h:mm a");
			}
		}	
		if (typeof name == 'number') {

			return "Common yar!!, you have given a Number, not a name!!"
		}

		if (typeof name == 'object') {

			return "It's an Object, not a name!!";
		}
	}
};