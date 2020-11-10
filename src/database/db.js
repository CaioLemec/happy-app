const Database = require("sqlite-async");

function execute(db) {
  return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `);
}

module.exports = Database.open(__dirname + "/database.sqlite").then(execute);

/* Database.open(__dirname+'/database.sqlite').then(execute)
Vai abrir no diretório e depois executar a função,
a função vai retornar a tabela db e com module.exports eu vou exportar 
essa tabela para conseguir pega-la no arquivo test.js
*/
