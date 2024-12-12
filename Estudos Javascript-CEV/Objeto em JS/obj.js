/*function Funcionario(nome,sobrenome,id,idade,cargo,empresa)  {
    this.Firstname = FirstName;
    this.LastName = LastName;
    this.id = id;
    this.age = age;
    this.Position = Position;
    this.Enterprise = Enterprise
}; */


const Empregado1 = {};

Empregado1.FirstName='Jonas';
Empregado1.LastName='Nalves';
Empregado1.id=444;
Empregado1.Idade=48;
Empregado1.Position='Produtor';
Empregado1.Enterprise='Zannetini';

const Escritor = {
     Nome : 'JK ',
     Sobrenome : 'Rowling',
     Id : 15,
     Idade : 48,
     Livros:'Saga Harry Potter ',
     FullName: function () {
        console.log(Escritor.Nome + " "+ Escritor.Sobrenome);
     }

};

Escritor.Nacionalidade = 'Britânica';
delete Escritor['FullName'];

const myObject ={
    nome : 'Gabriel',
    Idade: 18,
    Cidade : 'São Paulo',
    País : 'Brasil',
    Familiares:{
      Pai:'Sebastião',
      Mãe:'Alzira',
      Irmao:'Marcos',
      Irmã:'Natyele'
    },
    FullName: function() {
      return (this.nome + ' tem ' + this.Idade + ' de idade ').toUpperCase()
    }

};

irmao = myObject.Familiares.Irmao;

/*Exibir propriedades de um objeto - 
document.getElementById("Obj").innerHTML = myObject.nome + ' É do ' + myObject.País*/ 


/*Usando loops para exibir as propriedades do objeto - 
let texto = "";
for(let x in myObject){
  texto += myObject[x] + " ";
};
document.getElementById("Obj").innerHTML =  texto*/


/*Usando Object.values()- 
const my = Object.values(myObject)
document.getElementById("Obj").innerHTML = my
console.log(my)
*/

/*Usando o Object.entries()- let texto =''
for (let [object,valor]of Object.entries(myObject)){
     texto += object +  ": " + valor + "<br>";
};
document.getElementById('Obj').innerHTML = texto*/

/*
let Json= JSON.stringify(myObject)
document.getElementById('Obj').innerHTML = Json*/

function Desenvolvedor(nome,Idade,id_dev,empresa,linguagem){
      this.nome = nome;
      this.Idade = Idade;
      this.id_dev = id_dev;
      this.empresa = empresa;
      this.linguagem = linguagem;
      this.blabla = function(){
        return this.nome + ' ' + this.id_dev
      }
}

const Erik = new Desenvolvedor('Erik',22,78,'Nubank','Javascript')
const Maria = new Desenvolvedor('Maria',31,54,'Nintendo Brasil','PHP')
Maria.id_dev = function (ID){
  this.id_dev = ID;
}

Maria.id_dev(25);
//console.log(Erik)
//console.log(Maria)

console.log(Maria);