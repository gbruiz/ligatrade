var datosTablaGeneral = [];
var fechas = [];
var tablaGeneral
var titulo = "Liga Sextandard"

$(document).ready(function () {
    console.log("P*to el que lee")
    // Initialize the DataTable
    tablaGeneral = $('#tabla-general').DataTable({
        paging: false,
        searching:false,
        info:false,
        "columnDefs":[
            {"width":"10%"},
            { targets: '_all', className: 'dt-center' }],
        fixedColumns: {
            left: 2
        },
        fixedHeader: true
    });
    var tablaFechas = $('#tabla-fechas').DataTable({
        paging: false,
        searching:false,
        info:false,
        "columnDefs":[
            {"width":"10%"},
            { targets: '_all', className: 'dt-center' }],
        fixedColumns: {
            left: 2
        },
        fixedHeader: true
    });
    const fechaSelect = $('#fecha-select');

    $("#tabla-fechas_wrapper").hide();
// Call the function with your jsonData

    fechaSelect.append(`<option value="general">General</option>`);
    Object.keys(jsonData).forEach(fecha => {
        fechaSelect.append(`<option value="${fecha}">${fecha}</option>`);
        fechas.push(fecha);
    });


    extractPointsByNombreAndFechaWithTotal(jsonData)

    // Handle dropdown change event
    fechaSelect.on('change', function () {
        var selectedFecha = $(this).val();
        if(selectedFecha == "general"){
            $("#tituloLiga").html(titulo+ " - Tabla General")
            $("#tabla-fechas_wrapper").hide();
            $("#tabla-general_wrapper").show();
        }else{
            var fechaTitulo = jsonData[selectedFecha][0]["Fecha"]
            $("#tituloLiga").html(titulo+ " - "+ selectedFecha + " - "+ fechaTitulo)

            $("#tabla-fechas_wrapper").show();
            $("#tabla-general_wrapper").hide();
            populateTable(selectedFecha);
        }
    });


// Function to populate the table based on the selected option
function populateTable(selectedOption) {
    tablaFechas.clear();
        
       // Populate the Fecha tables
        const fechaData = jsonData[selectedOption] || {};
       
        // Iterate through each entry in the selected "Fecha" and populate the table
        fechaData.forEach(player => {
            // Create a new row for the table with Posición, Nombre, Puntos, W, L, D
            if(!player.Fecha){
            tablaFechas.row.add([player.Posicion,player.Nombre,player.Puntos,player.W,player.L,player.D]).draw( false );
        }
        });
        tablaFechas.columns.adjust().draw();
}


});

function extractPointsByNombreAndFechaWithTotal(data) {
const extractedData = [];
//var tablaGeneral = $('#tabla-general').DataTable();
    // Iterate through each "Fecha"
    Object.keys(data).forEach(fecha => {
        const fechaData = data[fecha];
        // Iterate through each entry in the "Fecha"
        fechaData.forEach(entry => {
            if(entry.Fecha){
                return
            }

            const nombre = entry.Nombre;
            const puntos = parseInt(entry.Puntos); // Parse points as integer
            const W = parseInt(entry.W);
            const L = parseInt(entry.L);
            const D = parseInt(entry.D);

            // If the "Nombre" is not in the extracted data, create a new entry
            if (!extractedData[nombre]) {
                extractedData[nombre] = {
                    totalPoints: 0,
                    totalW: 0,
                    totalL: 0,
                    totalD: 0,
                    // Include each "Fecha" as a key with its corresponding points
                    [fecha]: puntos
                };
            } else {
                // If the "Nombre" is already in the extracted data, update points for the current "Fecha"
                extractedData[nombre][fecha] = puntos;
            }

            // Update the total points for the current "Nombre"
            extractedData[nombre].totalPoints += puntos;
            extractedData[nombre].totalW += W
            extractedData[nombre].totalL += L
            extractedData[nombre].totalD += D
        });
    });
    
    datosTablaGeneral = extractedData;
    OrdenarTablaGeneral(datosTablaGeneral)

    Object.keys(datosTablaGeneral).forEach(index =>{
        var arrayFechas = []
        // Create a new row for the table with Posición, Nombre, Puntos, W, L, D
        fechas.forEach(fecha =>{
            if(datosTablaGeneral[index][fecha] == 0){
                arrayFechas.push(0)
            }else{
                arrayFechas.push(datosTablaGeneral[index][fecha] || "-")
            }
            
        })
        tablaGeneral.row.add([datosTablaGeneral[index].ranking,datosTablaGeneral[index].nombre,datosTablaGeneral[index].totalPoints,...arrayFechas]).draw( false );;
    });
    tablaGeneral.columns.adjust().draw();

}



function OrdenarTablaGeneral(data){
    var orderArray = []
    Object.keys(data).forEach(player => {
        var jugador = {
            "nombre": player,
            "totalPoints": data[player].totalPoints,
            "totalW": data[player].totalW,
            "totalL": data[player].totalL,
            "totalD:": data[player].totalD,
        }
        fechas.forEach(fecha =>{
            jugador[fecha] = data[player][fecha]
        })

        
        orderArray.push(jugador)
    })

    orderArray.sort(function (player1, player2) {

        //Sort by points
        if (player1.totalPoints > player2.totalPoints) return -1;
        if (player1.totalPoints< player2.totalPoints) return 1;
    
        //Si son iguales en puntos se ve el total de wins de todas las fechas
        if (player1.totalW > player2.totalW) return 1;
        if (player1.totalW < player2.totalW) return -1;


        //Si son iguales se ve el que tiene menos loses
        if (player1.totalL < player2.totalL) return 1;
        if (player1.totalL > player2.totalL) return -1;

        //Si son iguales se ordena de forma alfabética
        if (player1.nombre > player2.nombre) return 1;
        if (player1.nombre < player2.nombre) return -1;
    
    });
    orderArray.forEach( function(player,index){
        orderArray[index]["ranking"] = index + 1
    })
    datosTablaGeneral = orderArray;
}
