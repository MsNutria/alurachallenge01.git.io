/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 
e --> enter 
o --> ober 
i --> imes 
a --> ai 
u --> ufat
*/

function getTextAreaValue(){
    let textArea = document.getElementById("textIzq");
    let userInput = textArea.value;
    console.log(userInput);
}

function encriptar (){

    var cifrado = getTextAreaValue.replace(/e/img,"enter");
    var cifrado = cifrado.replace(/i/img,"imes");
    var cifrado = cifrado.replace(/a/img,"ai");
    var cifrado = cifrado.replace(/o/img,"ober");
    var cifrado = cifrado.replace(/u/img,"ufat");
    console.log(cifrado);
}

