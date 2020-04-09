var btnSumar = document.getElementById("btnSumar");


btnSumar.onclick = function () {
    

    var numero1 = document.getElementById("txtNumero1").value * 1;
    var numero2 = document.getElementById("txtNumero2").value * 1;

    var resultado = numero1 + numero2;
    //alert(resultado);

    document.getElementById("lblResultado").innerHTML = "El resultado de la suma es:" + resultado;


}


var btnLimpiar = document.getElementById("btnLimpiar");

btnLimpiar.onclick = function () {

    document.getElementById("txtNumero1").value = "";
    document.getElementById("txtNumero2").value = "";
    document.getElementById("lblResultado").innerHTML = "";

}


