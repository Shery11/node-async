var request = require('request');
var url = 'http://ipinfo.io/json';

module.exports = function(){
	
return new Promise(function(resolve,reject){
     
     request({url:url,json:true},function(error,response,body){
       if(error){
       	 reject();
       }else{
         resolve(body.city);
       }
    
    });

})
	


}