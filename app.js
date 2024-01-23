//DESAFIO 2 CURSO 2
/*
function holaMundo (){
    return console.log("HOLA MUNDO");   
}
holaMundo();
function saludo(nombre){
    return console.log(`¡Hola, ${nombre}!`);
}
saludo("Luis");
function duplicar(numero){
    return console.log(`el numero duplicado es ${(numero*2)}`);
}
duplicar(4);
function promedio(numero1,numero2,numero3){
    return console.log(`el promedio es ${(numero1+numero2+numero3)/3}`);
}
promedio(5,7,9);
function mayor(num1,num2){
return console.log(`el numero mayor es ${Math.max(num1,num2)}`);
}
mayor(4,2);
function multiplicarse(dato){
    return console.log(`el numero multiplicado por si misdo da ${dato*dato}`);
}
multiplicarse(7);
*/

//DESAFIO3 CURSO2
/*
function imc(altura,peso){
    return console.log(`el imc es de ${peso/(Math.pow(altura,2))}`);
}

imc(1.60,68);

function factorial(num){
    let factor =  1;
    for (let i = 1; i < num+1; i++){
        factor = factor * i;
    }
    console.log(`el factorial de ${num} es ${factor}`);
}

factorial(3);

function cambio(cantidad,tCambio){
return console.log(`el cambio es ${cantidad*tCambio}`);
}

cambio(20,7.74);

function rectangulo(alto,ancho){
    return console.log(`el area es ${alto*ancho} y el perimetro es ${2*(alto + ancho)}`)
}

rectangulo(3,5);

function circulo(radio){
    let pi = 3.14;
return console.log(`el area es del circulo es ${pi * radio * radio} y el perimetro es ${2 * pi * radio}`);
}

circulo(4);

function multiplicar(nume){
    for(let i = 0; i < 11; i++){
        console.log(`${nume} X ${i} = ${nume*i}`);
    }
    return;
}

multiplicar(2);
*/

//DESAFIO 4 CURSO 2
/*
let listaGenerica = [];
let listaDeProgramacion = [`JavaScript`,`C`,`C++`,`Kotlin`,`Python`];
listaDeProgramacion.push(`Java`,`Ruby`,`GoLang`);

function listado(){
    return console.log(listaDeProgramacion);
}
listado();

function listadoInverso(){
    return console.log(listaDeProgramacion.reverse())
}
listadoInverso();

let listaDeNumeros = [4,3,8,6,7,3,1];
function promedioLista(list){
    let resultadoPromedio = 0;
    for (let i = 0; i < listaDeNumeros.length; i++){
        resultadoPromedio = resultadoPromedio + listaDeNumeros[i];
    }
    return resultadoPromedio / listaDeNumeros.length;
}
console.log(`el promedio de la lista es ${promedioLista()}`);
function minMax(list){
    let numMax = Math.max.apply(null, listaDeNumeros);
    let numMin = Math.min.apply(null, listaDeNumeros);
    return console.log(`el numero menor es ${numMin} y el numero mayor es ${numMax}`);
}
minMax();

function sumLista(list){
    let resultadoPromedio = 0;
    for (let i = 0; i < listaDeNumeros.length; i++){
        resultadoPromedio = resultadoPromedio + listaDeNumeros[i];
    }
    return resultadoPromedio;
}
console.log(`la suma de la lista es ${sumLista()}`);

function posicion(posit){
    return console.log(`la posicion de ${posit} es ${listaDeNumeros.lastIndexOf(posit)}`);   
}
posicion(6);

let list1 = [1,2,3];
let list2 = [4,5,6];

function sumaDeListas(lista1,lista2){
    let lista3 = [];
    for (let i = 0; i < lista1.length; i++){
        lista3.push(lista1[i]+lista2[i]);
    }
    return lista3;
} 
console.log(sumaDeListas(list1,list2));

function listaCuadrado(lista){
    let lista3 = [];
    for (let i = 0; i < lista.length; i++){
        lista3.push(lista[i]*lista[i]);
    }
    return lista3;
}
console.log(listaCuadrado(list1));
*/
//SEGUNDA CLASE

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    
    console.log(`cantidad de intentos ${intentos}`);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento(`p`,`Acertaste el número en ${intentos} ${(intentos === 1) ? `intento` : `intentos`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else{
        intentos++;
        limpiarCaja();
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento(`p`,`El número es menor`);
        }else{
            asignarTextoElemento(`p`,`El número es mayor`);
        }
    }
    return;
}
function limpiarCaja(){
document.querySelector(`#valorUsuario`).value = "";

}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
   if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento(`p`,`Ya se sortearon los ${numeroMaximo} numeros posibles `)
   } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
            }
        }       
}

function condicionesIniciales(){
    asignarTextoElemento(`h1`,`Juego del numero secreto!`);
    asignarTextoElemento(`p`,`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(`numero secreto ${numeroSecreto}`);

}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById(`reiniciar`).setAttribute(`disabled`,`true`);
}

condicionesIniciales();
