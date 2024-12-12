/*function imc(peso,altura){
    return((peso/(altura**2)))
}

let height = window.prompt('Qual sua altura?: ')
let weight = window.prompt("Qual seu peso?: ")

var x= imc(weight,height)
alert(x)*/


//Armazenando a função na variável
/*const imc = function(weight,height) {return (weight/(height**2))};

let resposta=imc(74,1.75);
console.log(resposta);*/


//Construtor de função
/*const minhaFunção = new Function("Nome","Sobrenome", "return Nome + Sobrenome")

let x = minhaFunção("Gabriel"," Carvalho Vieira")
console.log(x)*/


/*y=myFunction(47);

function myFunction(y){
    return y / y;
}

console.log(y)*/


/*Funções de auto-invocação--(function(){
  let x = 'Hello!'
})();*/


/*function NewFunction(a,b){
    return a * b;
}

let y = NewFunction(15,4)
alert(y)*/


 /*function Função(x,z){
    return arguments.length;
 }

 ç=Função(14,'Lol')
 alert(ç)*/

/* function myFunction(x,z){
    return x + z
 }

let lol=myFunction.toString()
console.log(lol)*/


//var x = function(x,y){
  //  return x * y
//}

/*const x = (x,y) => x*y
let p = x(45,5)
console.log(p)

const x1= (x,y) => {return x * y};
let p1 = x1(5,12)
console.log(p1)*/


function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32)
}

let SP = toCelsius(76)
let text = 'A temperatura em Celsius é ' + SP.toFixed(1) + ' Celsius' 
console.log(text)