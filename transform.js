var promesa = Promise.resolve("hello");
//es una promesa resulta 
var promesa2 = promesa.then(function(resultado){
console.log(resultado) // imprime hello

return resultado+" world"
}); 

promesa2.then(function(res){
console.log(res);


});
