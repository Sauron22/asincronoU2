var promise = new Promise(function(resolve,reject){
var isSuccessful=true; 
setTimeout(function(){
if(isSuccessful){
resolve('success!');


}else{
reject(Error("failure"))

}

  
},5000);



});
promise.then(function(val){
console.log(val);
}).catch(function(val){
console.log(val);

});

