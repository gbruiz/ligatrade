// UltimaFecha.js

const jsonData = {
    // Your data goes here
};

$(document).ready(function () {
    var table = $('#mtgTable').DataTable({
        columns: [
            { title: "Nombre" },
            { title: "Puntos" },
            { title: "W" },
            { title: "L" },
            { title: "D" }
        ]
    });

    $('#fileInput').on('change', function (e) {
        var file = e.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = new Uint8Array(e.target.result);
                var workbook = XLSX.read(data, { type: 'array' });

                // Clear existing table data
                table.clear().draw();

                // Populate table with data
                for (var sheetName in jsonData) {
                    if (jsonData.hasOwnProperty(sheetName)) {
                        var sheetData = jsonData[sheetName];
                        for (var i = 1; i < sheetData.length; i++) {
                            var rowData = sheetData[i];
                            table.row.add([
                                rowData["Nombre"],
                                rowData["Puntos"],
                                rowData["W"],
                                rowData["L"],
                                rowData["D"]
                            ]).draw();
                        }
                    }
                }
            };
            reader.readAsArrayBuffer(file);
        }
    });

    $('#generateJsonBtn').on('click', function () {
        // Generate JSON and display in the textarea
        var jsonOutput = {
            "MagicLeagueData": []
        };

        table.rows().every(function () {
            var data = this.data();
            var rowData = {
                "Nombre": data[0],
                "Puntos": data[1],
                "W": data[2],
                "L": data[3],
                "D": data[4]
            };
            jsonOutput.MagicLeagueData.push(rowData);
        });

        $('#jsonOutput').val(JSON.stringify(jsonOutput, null, 2));
    });
});
