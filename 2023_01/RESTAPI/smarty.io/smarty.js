
const express = require('express')


// Express Konfiguriern
const app = express()
const port = 3500

//Ein Zähler, um die Aufrufe zu unterscheiden
let counter = 0

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded




app.get("/devices", (req, res) => { 
    res.status(200).send("Liste der Geräte");
  });
  

app.get('/', (req, res) => {    
    res.send('Hello World!')
})

app.get('/artist', (req, res) => {    
  res.send('Suche Künstler ....')
})


app.listen(port, () => {
  console.log(`Express gestartet, Port ${port}`)
})




