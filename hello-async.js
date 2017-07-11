// getting to know what is a async programming
setTimeout(function(){
  console.log('1');
},3000);

console.log('2');

function printInTwoSecond(message){
   setTimeout(function(){
   	 console.log(message);
   },2000);	
}


printInTwoSecond('Hello Async');