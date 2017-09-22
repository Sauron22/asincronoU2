var promesa = Promise.resolve([1,2,3]); 
promesa.then(function(res){
console.log(res);  // esto imprime [1,2,3,4,5]
return res.map(x=>x*x); // al cuadrado los miembros el conjunto 
}).then(function(result){
console.log(result);
return result.filter(x=>x<10); // retorna los que no sean mayor que 10

}).then(function(resi){
console.log(resi); //imprime el resultado de la otra
return resi.toString()+"!!";
}).then(function(x){
console.log(x); 
return x; 

}).catch(function(error){
console.log(error);


});








