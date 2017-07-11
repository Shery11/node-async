// uisng request module
var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Rawalpindi&units=metric&appid=7c289778a24a3a1cd491028163962d48';

// making a request in json
request({url:url,json:true},function(error,response,body){

   if(error){
   	 console.log('Unable to fetch weather');
   }else{
   	 // console.log(JSON.stringify(body,null,4));
   	 console.log('Its '+ body.main.temp + ' in ' + body.name );
   }

});

// this will be printed before the data from the api as node is asynchronous.
console.log('After request');