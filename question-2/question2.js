//resolved promise
function resolvedPromise(){
    return new Promise(function (resolve, reject){

        setTimeout(function(){
            resolve({message: 'delayed success'});
        }, 500);

    });
}


//rejected promise
function rejectedPromise(){
    return new Promise(function (resolve, reject){
        
        setTimeout(function(){
            reject({error: 'delayed exception'});
        }, 500);
    });
}


//Call promises

resolvedPromise()
    .then(function(result){
        console.log(result);})

    .catch(function(error){
        console.error(error);});



rejectedPromise()
    .then(function(result){
        console.log(result);})

    .catch(function(error){
        console.error(error);});
