var promise= new Promise(function (resolve,reject){
//awui se pone el código que se vaya  a hacer 
var isSuccessful = true; 
if(isSuccessful){
	resolve("Succes");
}else{
reject(Error("Failure"));
			}

});
