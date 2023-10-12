const jsonData= {
    "Fecha 1":[{"Posicion":"1","Nombre":"Aldo Giménez","Puntos":"12","W":"4","L":"0","D":"0"},{"Posicion":"2","Nombre":"Rodolfo Riego Macchi","Puntos":"9","W":"3","L":"1","D":"0"},{"Posicion":"3","Nombre":"Walter Fisch","Puntos":"9","W":"3","L":"1","D":"0"},{"Posicion":"4","Nombre":"Alejandro Vazquez","Puntos":"9","W":"3","L":"1","D":"0"},{"Posicion":"5","Nombre":"Blas Ledesma","Puntos":"9","W":"3","L":"1","D":"0"},{"Posicion":"6","Nombre":"Martin Caceres","Puntos":"9","W":"3","L":"1","D":"0"},{"Posicion":"7","Nombre":"Enzo Cassanello","Puntos":"9","W":"3","L":"1","D":"0"},{"Posicion":"8","Nombre":"Katia Lopez","Puntos":"6","W":"2","L":"2","D":"0"},{"Posicion":"9","Nombre":"Remigio Gonzalez","Puntos":"6","W":"2","L":"2","D":"0"},{"Posicion":"10","Nombre":"Jannick Kravetz","Puntos":"6","W":"2","L":"2","D":"0"},{"Posicion":"11","Nombre":"Guillermo Benitez","Puntos":"6","W":"2","L":"2","D":"0"},{"Posicion":"12","Nombre":"Roberto Casco","Puntos":"6","W":"2","L":"2","D":"0"},{"Posicion":"13","Nombre":"Mauricio Sosa Salcedo","Puntos":"6","W":"2","L":"2","D":"0"},{"Posicion":"14","Nombre":"Justo Cabañas","Puntos":"3","W":"1","L":"3","D":"0"},{"Posicion":"15","Nombre":"Marcelo Galeano","Puntos":"3","W":"1","L":"3","D":"0"},{"Posicion":"16","Nombre":"Zunú Cantero","Puntos":"3","W":"1","L":"3","D":"0"},{"Posicion":"17","Nombre":"Andrés Lonzayes","Puntos":"3","W":"1","L":"3","D":"0"},{"Posicion":"18","Nombre":"William Kennedy","Puntos":"3","W":"1","L":"3","D":"0"},{"Posicion":"19","Nombre":"Gabriela Céspedes","Puntos":"3","W":"1","L":"3","D":"0"},{"Posicion":"20","Nombre":"Yury Shmyrov","Puntos":"0","W":"0","L":"4","D":"0"}]
    ,"Fecha 2":[{"Posicion":"1","Nombre":"Jannick Kravetz","Puntos":"15","W":"5","L":"0","D":"0"},{"Posicion":"2","Nombre":"Andrés Lonzayes","Puntos":"12","W":"4","L":"1","D":"0"},{"Posicion":"3","Nombre":"Zunú Cantero","Puntos":"12","W":"4","L":"1","D":"0"},{"Posicion":"4","Nombre":"Blas Ledesma","Puntos":"12","W":"4","L":"1","D":"0"},{"Posicion":"5","Nombre":"Alejandro Vazquez","Puntos":"10","W":"3","L":"1","D":"1"},{"Posicion":"6","Nombre":"Martin Caceres","Puntos":"9","W":"3","L":"2","D":"0"},{"Posicion":"7","Nombre":"Enzo Cassanello","Puntos":"9","W":"3","L":"2","D":"0"},{"Posicion":"8","Nombre":"Fabian Delgado","Puntos":"9","W":"3","L":"2","D":"0"},{"Posicion":"9","Nombre":"Rodolfo Riego Macchi","Puntos":"9","W":"3","L":"2","D":"0"},{"Posicion":"10","Nombre":"Guillermo Benitez","Puntos":"7","W":"2","L":"2","D":"1"},{"Posicion":"11","Nombre":"Roberto Casco","Puntos":"7","W":"2","L":"2","D":"1"},{"Posicion":"12","Nombre":"Daniel Rivas","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"13","Nombre":"Katia Lopez","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"14","Nombre":"Mauricio Sosa Salcedo","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"15","Nombre":"Walter Fisch","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"16","Nombre":"Bruno Diaz","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"17","Nombre":"Remigio Gonzalez","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"18","Nombre":"William Kennedy","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"19","Nombre":"Aldo Giménez","Puntos":"4","W":"1","L":"3","D":"1"},{"Posicion":"20","Nombre":"Marcelo Galeano","Puntos":"3","W":"1","L":"4","D":"0"},{"Posicion":"21","Nombre":"Guillermo Crocetti","Puntos":"3","W":"1","L":"4","D":"0"},{"Posicion":"22","Nombre":"Yury Shmyrov","Puntos":"0","W":"0","L":"5","D":"0"}]
    ,"Fecha 3":[{"Posicion":"1","Nombre":"Jannick Kravetz","Puntos":"12","W":"4","L":"1","D":"0"},{"Posicion":"2","Nombre":"Enzo Cassanello","Puntos":"12","W":"4","L":"1","D":"0"},{"Posicion":"3","Nombre":"Alejandro Vazquez","Puntos":"12","W":"4","L":"1","D":"0"},{"Posicion":"4","Nombre":"Rodolfo Riego Macchi","Puntos":"12","W":"4","L":"1","D":"0"},{"Posicion":"5","Nombre":"Guillermo Benitez","Puntos":"10","W":"3","L":"1","D":"1"},{"Posicion":"6","Nombre":"Fabian Delgado","Puntos":"9","W":"3","L":"2","D":"0"},{"Posicion":"7","Nombre":"Gabriela Céspedes","Puntos":"9","W":"3","L":"2","D":"0"},{"Posicion":"8","Nombre":"Roberto Casco","Puntos":"9","W":"3","L":"2","D":"0"},{"Posicion":"9","Nombre":"Zunú Cantero","Puntos":"9","W":"3","L":"2","D":"0"},{"Posicion":"10","Nombre":"Katia Lopez","Puntos":"9","W":"3","L":"2","D":"0"},{"Posicion":"11","Nombre":"Bruce Gray Murray","Puntos":"9","W":"3","L":"2","D":"0"},{"Posicion":"12","Nombre":"Blas Ledesma","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"13","Nombre":"Aldo Giménez","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"14","Nombre":"Yury Shmyrov","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"15","Nombre":"Marcelo Galeano","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"16","Nombre":"Nico Ruiz","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"17","Nombre":"Andrés Lonzayes","Puntos":"6","W":"2","L":"3","D":"0"},{"Posicion":"18","Nombre":"Oscar Bachmann","Puntos":"4","W":"1","L":"3","D":"1"},{"Posicion":"19","Nombre":"Patrick Wiens","Puntos":"3","W":"1","L":"4","D":"0"},{"Posicion":"20","Nombre":"Mauricio Sosa Salcedo","Puntos":"3","W":"1","L":"4","D":"0"},{"Posicion":"21","Nombre":"Walter Fisch","Puntos":"3","W":"1","L":"4","D":"0"},{"Posicion":"22","Nombre":"Alex Menchaca","Puntos":"0","W":"0","L":"4","D":"0"}]
};