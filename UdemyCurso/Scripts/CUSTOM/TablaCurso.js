
var textoNombre = document.getElementById("txtNombre");



var botonLimpiar = document.getElementById("btnLimpiar");



textoNombre.onkeyup = function () {

    var parametro = document.getElementById("txtNombre").value;

    $.get("/Curso/ListarCursoPorNombre/?nombre=" + parametro, function (data) {

        crearTabla(data);

    })
};

botonLimpiar.onclick = function () {

    document.getElementById("txtNombre").value = "";

};



$.get("/Curso/ListarCurso", function (data) {

    crearTabla(data);

});
 
 
function crearTabla(data) {

    var contenido = "";

    contenido += "<table id='idTablaCurso' class='table table-striped'>";
    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<th>IIDCURSO</th>";
    contenido += "<th>NOMBRE</th>";
    contenido += "<th>DESCRIPCION</th>";
    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody>";

    for (var i = 0; i < data.length; i++) {

        contenido += "<tr>";
        contenido += "<td> " + data[i].IIDCURSO + "</td>";
        contenido += "<td> " + data[i].NOMBRE + "</td>";
        contenido += "<td> " + data[i].DESCRIPCION + "</td>";
        contenido += "</tr>";
    }
    

    contenido += "</tbody>";
    contenido += "</table>";


    document.getElementById("tablaCursoVista").innerHTML = contenido;

    $("#idTablaCurso").dataTable(
        {searching: false}
    );

};
 
