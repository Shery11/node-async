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
  
   weather(argv.l).then(function(data){

     console.log(data);

   },function(error){
     console.log(error);
   });

}else{


    location().then(function(location){
        
        weather(location).then(function(data){
          console.log(data);
        },function(error){
         console.log('Unable to fetch weather')
        });
    
    },function(error){
      console.log(error);
    })
    
   
}




