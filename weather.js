// using request module
var request = require('request');
    

module.exports = function(location){

	
    return new Promise(function(resolve,reject){ 
	    
	    var encodedURI = encodeURIComponent(location);
	    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodedURI+'&units=metric&appid=7c289778a24a3a1cd491028163962d48';
	   
	    
	    if(!location){
			
	      reject('Unable to fetch weather')
		
		}

	    // making a request in json
		request({url:url,json:true},function(error,response,body){

		   if(error){
		   	 
		       reject('Unable to fetch weather');
		   	 
		   }else{
		   	 
		      resolve('It\'s '+ body.main.temp + ' in ' + body.name );
		      
		   }

		});

	});	

}