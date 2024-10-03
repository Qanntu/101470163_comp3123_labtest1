function lowerCaseWords(mixedArray){
    return new Promise(function(resolve, reject){
        
        let array = [];

        for(let i = 0; i < mixedArray.length; i++){
            if(typeof mixedArray[i] === 'string'){
                array.push(mixedArray[i].toLowerCase());

            }
        }

        if(array.length > 0){
            resolve(array);
        }else{
            reject("no strings")
        }



    })
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(function(result) 
    {console.log(result);})

    .catch(function(error) 
    {console.error(error);});