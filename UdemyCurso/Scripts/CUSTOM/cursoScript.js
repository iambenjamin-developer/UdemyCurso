function mostrarTabla() {

    $.get("/Curso/ListarCursos/", function (data) {

        //llenar tabla alumnos
        llenarTabla(["IIDCURSO", "NOMBRE", "DESCRIPCION", "ACCIONES"], data, "tabla-script");

    });

}

mostrarTabla();

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
    contenido += "</th>";
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
        var idEntidad = data[i][arrayColumnas[0]];
        //agregamos los iconos
        contenido += "<td>";
        contenido += "<button id='btnEditar' class='btn btn-primary' onclick='abrirModal(" + idEntidad + ")' data-toggle='modal' data-target='#exampleModal'><i class='fas fa-edit'></i></button>   ";
        contenido += "<button id='btnEliminar' class='btn btn-danger' ><i class='fas fa-trash-alt'></i></button>";
        contenido += "</td>";

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


function abrirModal(idEntidad) {


    if (idEntidad == 0) {

        limpiarDatos();

    } else {

        $.get("/Curso/EditarCurso/?idCurso=" + idEntidad, function (data) {


            document.getElementById("txtId").value = data[0].IIDCURSO;
            document.getElementById("txtNombre").value = data[0].NOMBRE;
            document.getElementById("txtDescripcion").value = data[0].DESCRIPCION;

        });


    }
}

function limpiarDatos() {

    limpiarTextBoxes();

}

function limpiarTextBoxes() {

    //se limpian todos los textboxes dejando string vacio
    var controles = document.getElementsByClassName("limpiar");

    for (var i = 0; i < controles.length; i++) {

        controles[i].value = "";
    }

}


function datosObligatorios() {

    var bandera = true;
    var contadorBandera = 0;

    var elementos = document.getElementsByClassName("obligatorio");

    var idLabel = "string";

    for (var i = 0; i < elementos.length; i++) {
        //creamos nombre de label
        idLabel = "lbl" + elementos[i].id;

        if (elementos[i].value != "") {

            document.getElementById(idLabel).innerHTML = "&nbsp;<i class='fas fa-check' style='color:green;'></i>";
        } else {

            document.getElementById(idLabel).innerHTML = "&nbsp;<i class='far fa-times-circle' style='color:red;'></i>";

            //contar las veces que dio falso
            contadorBandera = contadorBandera + 1;
        }

    }


    //chequear si da verdadero o falso
    if (contadorBandera > 0) {
        bandera = false;
    }

    return bandera;
}


function agregar() {

    if (datosObligatorios() == true) {


        var frm = new FormData();

        var idCurso = document.getElementById("txtId").value;
        var nombre = document.getElementById("txtNombre").value;
        var descripcion = document.getElementById("txtDescripcion").value;


        frm.append("IIDCURSO", idCurso);
        frm.append("NOMBRE", nombre);
        frm.append("DESCRIPCION", descripcion);
        frm.append("BHABILITADO", 1);

        console.log(idCurso);
        console.log(nombre);
        console.log(descripcion);




        if (confirm("¿Desea Confirmar Guardar?") == 1) {

            $.ajax({
                type: "POST",
                url: "/Curso/GuardarDatos/",
                data: frm,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data != 0) {

                        mostrarTabla();

                        // alert("Exitoso");

                        document.getElementById("btnCancelar").click();
                    } else {
                        alert("Error");
                    }

                }

            })

        } //fin confirmacion
    }
    else {

    }
}





