"use strict";

import fs from 'fs'
import http from 'http'
import sqlite3 from 'sqlite3'

let port = 3001;
let host = "127.0.0.1"

// create SQLITE DB
// './db/sample.db'
let db = new sqlite3.Database('./db/sample.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the sample SQlite database.');
  });

  // CREATE SQLITE TABLE
db.run('CREATE TABLE IF NOT EXISTS Logs(id INTEGER PRIMARY KEY, logMsg TEXT)');
// Trage einen Wert in die DB ein

let value = 'iuwuewe'
let logdata = `Diese Werte möchte ich speichern: ${value}`
let sqlQuery = `INSERT INTO Logs VALUES (NULL, :logMsg)`
db.run(sqlQuery,[logdata]);
// print all data contained in SQLITE table
let data ="HELLO"


db.all("SELECT * FROM Logs", function(err, rows) {
  rows.forEach(function (row) {
  console.log(row.id + ": " + row.logMsg );
  data += row.id + ": " + row.logMsg;
  });
});

let server = http.createServer((req,res) => {
    res.setHeader ('Content-Type', 'text/html; charset=utf-8');

    if(req.url ==="/"){
        let data ="<h1>Hallo</h1> <p>Dieser Text darf belibig ang werden</p>"
        res.end(data);
    }
    else if(req.url==="/ueber"){
        res.end("<h1>Das ist die Über uns Seite</h1>");
    }
    else if(req.url==="/speicherninSQLIte"){
        
        res.write("<div>" + data +"</div>")
        res.end("<h1>Einträge der SQLite DB</h1>");
    }
    else if(req.url==="/schreibwas"){
        let dateiname = "mein-datei.txt"
        let data = "Das ist ganz viel text, den ich schreiben möchten"

        fs.writeFile(dateiname, data, (fehler) => {
            if(fehler) {throw fehler}
            console.log("Alles Super beim schreiben der Datei")})
        console.log("Hallo JS Welt")


        res.end("<h1>Schreiben erfolgreich</h1>");
    }
    else{
        res.statusCode = 404;
        res.end("<h1>Sorry, nicht gefunden</h1>");
    }
})
server.listen(port,server, ()=>{
    console.log(`Server listen on:  ${port}`)
})