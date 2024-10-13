let nombre ='Ana' //string
let edad = 25 // Number
let esEStudiante= true //booleano

let x= 10;
let y=3;

// console.log('Suma',x+y) //suma
// console.log('Resta', x-y)
// console.log('Multiplicacion',x*y)
// console.log('Division',x/y)

let mayor = x>y; //true
let igual = x===y; //false

// console.log('¿X es Mayor que Y?',mayor)
// console.log('¿X es igual a Y?',igual)

// if (edad >= 18){
//     console.log('Eres mayor de edad')
// }else{
//     console.log('Eres menor de edad')
// }

// let nota = 85

// if(nota>=90){
//     console.log('Aprobaste con Distincion')
// }else if(nota>=70){
//     console.log('Aprobaste')
// }else{
//     console.logfunction saludar(nombre){
//     return 'Hola '+nombre
// }

// console.log(saludar('Ana'))

// const multiplicar = (a,b) => a*b;
// console.log(multiplicar(5,3))=5;i++){
//     console.log('Numero',i)
// }

// let frutas =['Manzana','Granadilla','Fresa']

// for (let i =1; i< frutas.length; i++){
//     console.log('Fruta',frutas[i])
// }

// function saludar(nombre){
//     return 'Hola '+nombre
// }

// console.log(saludar('Ana'))

// const multiplicar = (a,b) => a*b;
// console.log(multiplicar(5,3))


const titulo = document.getElementById('titulo');
const boton = document.getElementById('miBoton')

titulo.textContent= 'JavaScript esta funcionando'

boton.style.backgroundColor='blue'
boton.style.color='white'

boton.addEventListener('click',()=>{
    alert('Haz clickeado el boton')
}
)

const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent='Este es un nuevo parrafo'
document.body.appendChild(nuevoParrafo)

const nuevoBoton = document.createElement('button')
nuevoBoton.textContent='Nuevo Boton'
document.body.appendChild(nuevoBoton)

const parrafoEliminable = document.createElement('p');
parrafoEliminable.textContent='Este es un parrafo que se puede eliminar'
document.body.appendChild(parrafoEliminable)

setTimeout(()=>{
    parrafoEliminable.remove()
    console.log('El parrafo fue eliminado')
},10000)