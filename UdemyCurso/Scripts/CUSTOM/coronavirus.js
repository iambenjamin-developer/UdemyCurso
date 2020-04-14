
var btnvalidar = document.getElementById("btnValidar");

function limpiarCampos() {

    document.getElementById("txtId").value = "";
    document.getElementById("txtNombres").value = "";
    document.getElementById("txtDni").value = "";
}

btnValidar.onclick = function () {

    validar();
}

function validar() {
     //elementos[i].parentNode.classList.add("nombreClase");
    //elementos[i].parentNode.classList.remove("nombreClase");

    var elementos = document.getElementsByClassName("obligatorio");

    var idLabel = "string";

    for (var i = 0; i < elementos.length; i++) {

        //creamos nombre de label
        idLabel = "lbl" + elementos[i].id;

       
        if (elementos[i].value != "") {

            document.getElementById(idLabel).innerHTML = "&nbsp;<i class='fas fa-check' style='color:green;'></i>";
        } else {
           
            document.getElementById(idLabel).innerHTML = "&nbsp;<i class='far fa-times-circle' style='color:red;'></i>";
        }

    }

}
