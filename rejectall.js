var promise1 = Promise.resolve('hello'); 
var promise2 = Promise.resolve({age:2,height:188}) 
var promise3 = Promise.reject('failure.'); //rejected promise


Promise.all([promise1,promise2,promise3]).then(function(result) { 

    console.log(result) //doesn't occur since promise3 rejected

}).catch(function(error){

    console.log(error)  //logs 'failure.'

});
