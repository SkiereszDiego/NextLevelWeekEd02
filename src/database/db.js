const Database = require('sqlite-async')

function execute(db) {
   //criar as tabelas do banco de dados
   // o proffy_id pq um prof pode dar varias materias e a tabela classe so e criada qndo tiver um prof id
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );
        
        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );

    `)
}
//dirname pega o caminho src/database
module.exports =  Database.open(__dirname +'/database.sqlite').then(execute)
//o Js le muito rapido e o banco de dados demora 
//para pegar o arq e pode q o JS termine antes
//o then serve para parar ele. Abra o arquivo e Entao....
