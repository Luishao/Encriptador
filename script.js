function encriptar(){
    var palabra=document.getElementById("mensaje").value;

    var textoEncriptado =palabra.replace(/e/img,"enter");
    var textoEncriptado =textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado =textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado =textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado =textoEncriptado.replace(/u/img,"ufat");


    document.getElementById("texto-encriptado").style.backgroundImage="none";
    document.getElementById("show-btn").style.visibility="visible";
    document.getElementById("texto-encriptado").innerHTML=textoEncriptado;
}
function desEncriptar(){
    var palabra=document.getElementById("texto-encriptado").value;

    var textoEncriptado =palabra.replace(/enter/img,"e");
    var textoEncriptado =textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado =textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado =textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado =textoEncriptado.replace(/ufat/img,"u");

    document.getElementById("texto-encriptado").innerHTML=textoEncriptado;
}

function copiarTexto(){
    var contenido =document.querySelector("#texto-encriptado");
    contenido.select();
    document.execCommand("copy");
}