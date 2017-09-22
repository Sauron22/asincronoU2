var promesa= new Promise (function(resolve,reject){
setTimeout(function(){
var  valor = Math.random();
if(valor >.5){
resolve(valor);
}else{
  reject(valor);
}

},5000)


});
promesa.then(function(val){
console.log("éxito!! : "+val);

}).catch(function(err){
console.log("error!!: "+err);

})
