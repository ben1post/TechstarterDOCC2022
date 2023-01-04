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
let db = new sqlite3.Database('./db/sample.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the sample SQlite database.');
  });

// CREATE SQLITE TABLE
db.run('CREATE TABLE IF NOT EXISTS \
  inventory(id INTEGER PRIMARY KEY, name TEXT, typ TEXT, Neupreis TEXT, Ort TEXT)');


// TRY EDITING SQLITE DB:
console.log("try inputting a value:")
// db.run("INSERT or REPLACE INTO inventory (name, typ) VALUES ('hello', 'bar')");

////////////////////////////////////////////////////////////////////////////////////
//(Beispiel-)Daten aus JSON-Datei laden
let rawData = fs.readFileSync('./data/items.json')
let items = JSON.parse(rawData)
// let items;
// fs.readFile('./data/items.json', (err, data) => {
//     items = JSON.parse(data);
// })
console.log("ITEMS")
// for (let i=0; i<10; i++) {
//     console.log(JSON.stringify(items[i]))
// }
// let myObj = {
//     name: "Auto",
//     typ: "Fahrzeug",
//     Neupreis : "3000",
//     Ort: "Garage",
// };
// let sqlQuery = 'INSERT INTO inventory VALUES(NULL, :name, :typ, :Neupreis, :Ort);';

// Run command and variable will be replaces
//db.run(sqlQuery, [myObj.name, myObj.typ, myObj.Neupreis, myObj.Ort])

let sqlQuery = 'INSERT INTO inventory VALUES(NULL, :name, :typ, :Neupreis, :Ort);';

for (var i=0; i<items.length; i++) {
  let item = items[i];
  console.log(item)
  db.run(sqlQuery, [item.name, item.typ, item.Neupreis, item.Ort])
}

// db.run("INSERT or REPLACE INTO inventory (name, typ) VALUES (?, 'bar')");

// db.run("INSERT INTO inventory VALUES "+
//     "json_extract(value, '$.name'), " +
//     "json_extract(value, '$.type') " +
//     "FROM json_each(?);", (items));

// INSERT INTO my_table SELECT 
//   json_extract(value, '$.uri'), 
//   json_extract(value, '$.user_agent')
// FROM json_each(readfile('my_data.json'));

// let stmt = db.prepare('INSERT INTO inventory VALUES(json(?))');
//     for (let i=0; i<10; i++) {
//         stmt.run(JSON.stringify({ a: i}));
//     }
//     stmt.finalize();

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