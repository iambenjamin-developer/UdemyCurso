alert("test");

$.get("RepasoHTML/ListarPersonas", function (dataJson) {
    var contenido = "";

    contenido += "<table class='table table-dark'>";

    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<th>ID</th>";
    contenido += "<th>Apellido</th>";
    contenido += "<th>Nombre</th>";
    contenido += "</tr>";
    contenido += "</thead>";

    contenido += "<tbody>";

    var nroFilas = dataJson.length;
    for (var i = 0; i < nroFilas; i++) {

        contenido += "<tr>";
        contenido += "<td>" + dataJson[i].IdPersona + "</td>";
        contenido += "<td>" + dataJson[i].Apellido + "</td>";
        contenido += "<td>" + dataJson[i].Nombre + "</td>";
        contenido += "</tr>";
    }

    contenido += "</tbody>";

    contenido += "</table>";




    document.getElementById("idTablaJson").innerHTML = contenido;







});