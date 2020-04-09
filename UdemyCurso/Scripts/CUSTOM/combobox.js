$.get("/RepasoHTML/LlenarComboPersonas", function (data) {

    var contenido = "";



    for (var i = 0; i < data.length; i++) {

        contenido += "<option value='";
        contenido += data[i].IdPersona + "'>";
        contenido += data[i].Nombre;
        contenido += "</option>";
    }

    document.getElementById("cboPersonas").innerHTML = contenido;

    ////////////////////////////////////////////////////////

    
    var contenido2 = "";



    for (var i = 0; i < data.length; i++) {

        contenido2 += "<a class='dropdown - item' href='#'>";
        contenido2 += data[i].Nombre;
        contenido2 += "</a>";
        contenido2 += "<wbr />";
    }

    document.getElementById("dropdownCombobox").innerHTML = contenido2;




});