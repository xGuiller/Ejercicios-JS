const numbersList = [];

function sum(a, b){
    return a + b; 
}
function substract(a, b){  
    return a - b
}

function father(a, b, callback){

   numbersList.push(callback(a, b))

 }

 father(10, 23, sum)
 father(4, 15, sum)
 father(52, 87, sum)
 father(10, 23, substract)
 father(4, 15, substract)
 father(52, 87, substract)

console.log(numbersList);