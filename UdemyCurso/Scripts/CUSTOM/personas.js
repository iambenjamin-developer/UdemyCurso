$.get("RepasoHTML/ListarPersonas", function (data) {
    //    alert(data);

    crearListado(data);

});

function crearListado(data) {
    var contenido = "";

    contenido += "<table id='tabla-persona' class='table table-dark'>";

    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<th>ID</th>";
    contenido += "<th>Apellido</th>";
    contenido += "<th>Nombre</th>";
    contenido += "</tr>";
    contenido += "</thead>";

    contenido += "<tbody>";

    for (var i = 0; i < data.length; i++) {

        contenido += "<tr>";
        contenido += "<td>" + data[i].IdPersona + "</td>";
        contenido += "<td>" + data[i].Apellido + "</td>";
        contenido += "<td>" + data[i].Nombre + "</td>";
        contenido += "</tr>";
    }

    contenido += "</tbody>";

    contenido += "</table>";


    document.getElementById("idListaPersonas").innerHTML = contenido;

    $("#tabla-persona").dataTable();
}


