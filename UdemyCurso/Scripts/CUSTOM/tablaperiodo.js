$.get("/Curso/ListarPeriodo", function (data) {

    crearTabla(data);

})


function crearTabla(data) {

    var contenido = "";

    contenido += "<table id = 'tabla-periodo' class='table table-striped'>";
    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<th>IIDPERIODO</th>";
    contenido += "<th>NOMBRE</th>";
    contenido += "<th>FECHAINICIO</th>";
    contenido += "<th>FECHAFIN</th>";
    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody>";

    for (var i = 0; i < data.length; i++) {

        contenido += "<tr>";
        contenido += "<td> " + data[i].IIDPERIODO + "</td>";
        contenido += "<td> " + data[i].NOMBRE + "</td>";
        contenido += "<td> " + data[i].FECHAINICIO + "</td>";
        contenido += "<td> " + data[i].FECHAFIN + "</td>";
        contenido += "</tr>";
    }


    contenido += "</tbody>";
    contenido += "</table>";


    document.getElementById("tablaPeriodoVista").innerHTML = contenido;

    $("#tabla-periodo").dataTable(
        {searching: false}
    );

}

