var request = require('request');
var url = 'http://ipinfo.io/json';

module.exports = function(callback){
	request({url:url,json:true},function(error,response,body){
       if(error){
       	 callback(location);
       }else{
         callback(body);
       }
    
    });
}