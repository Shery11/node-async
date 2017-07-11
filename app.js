// this is how you access the local file in same directory
var weather = require('./weather.js');
var location = require('./location.js');

weather(function(currentWeather){
	console.log(currentWeather);
});

location(function(location){
	
	if(location !== 'undefined'){
		console.log('city '+ location.city);
		console.log('log/lat '+ location.loc);
	}else{
		console.log('unable to fetch location');
	}
})