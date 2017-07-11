// uisng request module
var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Rawalpindi&units=metric&appid=7c289778a24a3a1cd491028163962d48';
    

module.exports = function(callback){
     
    // making a request in json
	request({url:url,json:true},function(error,response,body){

	   if(error){
	   	 callback('Unable to fetch weather');
	   }else{
	   	 // console.log(JSON.stringify(body,null,4));
	   	  callback('It\'s '+ body.main.temp + ' in ' + body.name );
	   }

	});

}