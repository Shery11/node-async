// this is how you access the local file in same directory
var weather = require('./weather.js');
var location = require('./location.js');

// for command line user input
var argv = require('yargs').options(
   	'location',{
        demand :false,
        alias : 'l',
        description: 'Enter city name',
        type: 'string'
   	
   }).help('help').argv;


if(typeof argv.l === 'string' && argv.l.length > 0){
  
   weather(argv.l,function(currentWeather){
	 console.log(currentWeather);
   });

}else{
    
    location(function(location){
	    
	    if(location){
			weather(location.city,function(currentWeather){
			 console.log(currentWeather);
            });
		}else{
			console.log('unable to fetch location');
		}
    
    });
}




