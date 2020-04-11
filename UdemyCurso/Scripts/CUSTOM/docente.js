listarDocentes();

function listarDocentes() {

    $.get("/Docente/ListarDocentes/", function (data) {

        //llenar tabla alumnos
        llenarTabla(["ID", "NOMBRE", "APELLIDO PATERNO", "APELLIDO MATERNO", "EMAIL"], data, "tabla-docente");

    });
}

function llenarTabla(arrayCabecera, data, idTagString) {

    var contenido = "";

    contenido += "<table id='tabla-paginacion-registros' class='table table-striped'>";
    contenido += "<thead>";
    contenido += "<tr>";

    // se rellena la cabecera con los nombres de las columnas seteados en el array
    for (var i = 0; i < arrayCabecera.length; i++) {
        contenido += "<th>";
        contenido += arrayCabecera[i];
        contenido += "</th>";
    }
    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody>";

    // con las llaves descomponemos el data en grupo de arrays de cada columna
    var arrayColumnas = Object.keys(data[0]);

    for (var i = 0; i < data.length; i++) {

        contenido += "<tr>";

        for (var j = 0; j < arrayColumnas.length; j++) {
            // data[i] = fila Json completa
            // arrayColumnas[j] = nombre de la columna
            // data[i][idColumna] = [filacompleta][nombreColumna] = valor de la celda

            var idColumna = arrayColumnas[j];

            contenido += "<td>";
            contenido += data[i][idColumna];
            contenido += "</td>";

        }

        contenido += "</tr>";
    }

    contenido += "</tbody>";

    //podemos rellenar lo que hay en la cabecera tambien en el pie de pagina
    contenido += "<tfoot>";
    contenido += "<tr>";

    // se rellena la cabecera(en el foot) con los nombres de las columnas seteados en el array
    for (var i = 0; i < arrayCabecera.length; i++) {
        contenido += "<th>";
        contenido += arrayCabecera[i];
        contenido += "</th>";
    }
    contenido += "</tr>";
    contenido += "</tfoot>";
    contenido += "</table>";


    document.getElementById(idTagString).innerHTML = contenido;

    $("#tabla-paginacion-registros").dataTable({
        "language":
        {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla =(",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            },
            "buttons": {
                "copy": "Copiar",
                "colvis": "Visibilidad"
            }
        }

    }); // fin datatable

}




obtenerDatosCombobox();

function obtenerDatosCombobox() {

    $.get("/Docente/ListarModalidadContrato/", function (data) {

        //llenarComboBox de sexos
        llenarComboBox(data, "cboModalidad");

    });
}


function llenarComboBox(data, idTagString) {

    //string q representa las etiquetas html
    var contenido = "<option value='-1'>--Seleccione--</option>";

    for (var i = 0; i < data.length; i++) {

        contenido += "<option value='" + data[i].ID + "'>";
        contenido += data[i].DESCRIPCION;
        contenido += "</option>";
    }

    //transformar la cadena en html e insertar dentro del id del combo box
    document.getElementById(idTagString).innerHTML = contenido;
}

