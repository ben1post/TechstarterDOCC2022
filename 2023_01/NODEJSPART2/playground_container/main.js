"use strict";

import fs from 'fs'
//import http from 'http'
import sqlite3 from 'sqlite3'

let port = 3001;
let host = "0.0.0.0";

"use strict";
import http from 'http';

let server = http.createServer((req,res) => {
    res.setHeader ('Content-Type', 'text/html; charset=utf-8');
})

server.listen("3456",server, ()=>{
    console.log(`Server listening on port 3456`)
})


console.log("HELLO");


// "use strict";
// import fs from 'fs';

// fs.readFile('beispieldaten.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// "use strict";
// import fs from 'fs';

// const q = `{
//         "name":"Andy",
//         "Nachname":"Warhol",
//         "Beruf":"Künstler"
//     }`;

// const b = `{
//         "name":"unbekannt",
//         "Nachname":"unbekannt",
//         "Pseudonym":"Banksy",
//         "Beruf":"Kuenstler"
//     }`;

// const q_json = JSON.parse(q);
// const b_json = JSON.parse(b);

// const both = [q_json, b_json];

// const path = "./person.json";

// writeFileSync(path, JSON.stringify(both), (error) => {
//     if (error) {
//       console.log('An error has occurred ', error);
//       return;
//     }
//     console.log('Data written successfully to disk');
//   });