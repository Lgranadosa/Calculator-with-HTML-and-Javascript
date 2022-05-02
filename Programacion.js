
//esto es con captura de id
//var sumar = document.getElementById("btnsumar");

//sumar.onclick = function ()    {
    //console.log("click")


 //esto es capturando el onclick dentro de la function    
    function btnsumar() {

    var uno = document.getElementById("numero1").value * 1;
    var dos = document.getElementById("numero2").value * 1;

    var resultado = uno + dos;

    alert (resultado);

}

//esto es con captura de id
//var restar = document.getElementById("btnrestar");

//restar.onclick = function ()    {
    //console.log("click")


 //esto es capturando el onclick dentro de la function    
    function btnrestar() {

    var tres = document.getElementById("numero1").value * 1;
    var cuatro = document.getElementById("numero2").value * 1;

    var resta = tres - cuatro;

    alert (resta);
}

//esto es con captura de id
//var multiplicar = document.getElementById("btnmultiplicar");

//multiplicar.onclick = function ()    {
    //console.log("click")


 //esto es capturando el onclick dentro de la function    
    function btnmultiplicar() {

    var cinco = document.getElementById("numero1").value * 1;
    var seis = document.getElementById("numero2").value * 1;

    var multiplicar = cinco * seis;

    alert (multiplicar);
}

//esto es con captura de id
//var limpiar = document.getElementById("btnlimpiar");

//limpiar.onclick = function ()    {
    //console.log("click")

 //esto es capturando el onclick dentro de la function   
    function btnlimpiar() {

    var siete = document.getElementById("numero1").value = "";
    var ocho = document.getElementById("numero2").value = "";

    alert ("limpiado exitoso");
}


