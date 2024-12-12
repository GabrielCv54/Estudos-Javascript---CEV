/*function myFunction(a,b){
    if (b === undefined){
        b = 3
    }
    return a * b
}

let a = myFunction(10)
console.log(a)*/


/*function myFunction(x,y=10){
     return x + y
}

let z = myFunction(25)
console.log(z)*/


/*function sum(...args){
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}

let x = sum(4,2,9,63,11,7,78,94,15,33);
console.log(x)*/


x = findMax(1,156,25,48,99)

function findMax(){
    let max = -Infinity;
    for (let i =0; i < arguments.length;i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    return max
}

console.log(x)