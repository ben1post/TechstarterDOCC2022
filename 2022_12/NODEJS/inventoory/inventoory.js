import http from 'http'
import fs from 'fs'
import url from 'url'
import {generateFullItemList as httmldoc} from './views/inventoor-full-list.view.js'
import sqlite3 from 'sqlite3'

const hostname = '0.0.0.0'
const port = '3000'

//Ein Server erstellen ...
let server = http.createServer(OnUserRequest);
// ... und auf Port 3000 auf anfragen warten
server.listen(port,hostname, () => {
  console.log(`Server is Listening on ${hostname}:${port}`)})

// create SQLITE DB
// './db/sample.db'
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the sample SQlite database.');
  });

db.run('CREATE TABLE hello (name TEXT)')

// CREATE SQLITE TABLE
db.run('CREATE TABLE IF NOT EXISTS \
  inventory(id INTEGER PRIMARY KEY, name TEXT, typ TEXT, Neupreis TEXT, Ort TEXT)');

////////////////////////////////////////////////////////////////////////////////////
//(Beispiel-)Daten aus JSON-Datei laden
let rawData = fs.readFileSync('./data/items.json')
let items = JSON.parse(rawData)

// INSTERT DEFAULT VALUES INTO DATABASE
let sqlQuery = 'INSERT INTO inventory VALUES(NULL, :name, :typ, :Neupreis, :Ort);';

for (var i=0; i<items.length; i++) {
  let item = items[i];
  db.run(sqlQuery, [item.name, item.typ, item.Neupreis, item.Ort])
}


console.log("AFTERWARDS")



let counter=0;
function OnUserRequest(req, res){

    console.log(counter)

    let parsedURL = url.parse(req.url, true)

    if(req.url === "/"){ //Das ist die Startseite
        //res.setHeader ('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end (httmldoc(items))
    } else if (req.url === "/ueber"){
        res.setHeader ('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end (`<h1>Das ist meine &Uumlber Mich Seite</h1> `)

    }
    else{ 
        let splitedURL = req.url.split('/')
        if(splitedURL.includes("delete") && splitedURL.length == 3){
            //delete items[0]
            let item_to_delete = splitedURL[2]
            items.splice(item_to_delete,1)
            res.end (httmldoc(items))

        }
        else{
            // Bei allen andern habe ich einen Fehler => 404
            res.setHeader ('Content-Type', 'text/html');
            res.statusCode = 404;
            res.end (`<h1>404 <h1><h2>Ohh, da ist etwas schiefggelaufen</h2>`)
        }
    }
    counter++
}


// print all data contained in SQLITE table
db.all("SELECT * FROM inventory", function(err, rows) {
  rows.forEach(function (row) {
    console.log(row.id + ": " + row.name + " - " + row.typ + " - " + row.Neupreis);
  });
 });

// close SQLITE DB:
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });