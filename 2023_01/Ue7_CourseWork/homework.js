Buch
    Seitenzahl
    Autor
    Sprache
    Preis
Film
    Spieldauer
    Regisseur
    Jahr der Veröffentlichung
Fahrzeug
    Typ
    Antriebsart
    Personenkapazität
Schulklasse
    Stufe
    Klassenlehrer
    Klassensprecher


let Buch = {
    Seitenzahl: 100,
    Autor: "Manuel Fischer",
    Sprache: "Deutsch",
    Preis: "100 €"
   }

class Film {
    constructor() {
        this.Spieldauer = '120 min';
        this.Regisseur = 'Francis Ford Coppola';
        this.JahrVeroeffentlichung = '1987';
    }
}

const film = new Film();

console.log(film.Regisseur);

var Fahrzeug = new Object();
Fahrzeug.Typ = 'PKW';
Fahrzeug.Antriebsart = '1.9 JTD';
Fahrzeug.Personenkapazität = 5;



[{
    Bezeichnung: "Softwaretester",
    Beschreibung: `Der Software-Tester ist ein IT-Experte, der Softwaretests durchführt.`,
    Schlagwort: ["unit test", "Systemtest", "Teststrategie", "Komponententest"],
    Durchschnittsgehalt:57.537
},{
    Bezeichnung: "Scrummaster",
    Beschreibung: `Der Scrum-Master steht zwischen Product-Owner und Team. Er erledigt organisatorische und administrative Aufgaben. Moderiert Sitzung, sorgt für die Einhaltung der Scrum-Regeln oder fungiert als Agile-Coach.`,
    Schlagwort: ["moderation", "koordination", "kommunikativ"],
    Durchschnittsgehalt:49.700
}, ...]
Bezeichnung
Beschreibung
Schlagwort
Durchschnittsgehalt*
Softwaretester
Der Software-Tester ist ein IT-Experte, der Softwaretests durchführt. 
unit test, Systemtest, Teststrategie, Komponententest
57.537
Scrummaster
Der Scrum-Master steht zwischen Product-Owner und Team. Er erledigt organisatorische und administrative Aufgaben. Moderiert Sitzung, sorgt für die Einhaltung der Scrum-Regeln oder fungiert als Agile-Coach.
moderation, koordination, kommunikativ
49.700
Software Architekt
In enger Absprache mit den Kunden / Fachabteilungen entwerfen Softwarearchitekten das Konzept für das Gesamtsystem, beschreiben Schnittstellen und Austauschformate.  Sie arbeiten eng mit technischen wie nicht technischen Teams zusammen und begleiten das Projekt im Ideal von der Idee bis zur Umsetzung. 
Entwurf, Design, Konzeption, Security, Testing 
76.000
Data Scientist
Data Scientists durchforsten und interpretieren große Datenmengen, um nützliche Informationen als Grundlage für strategische Unternehmensentscheidungen abzuleiten. Sie arbeiten in den Daten “versteckte” Informationen heraus mit dem Ziel, neue Erkenntnisse zu generieren. .
Big Data-Analyse, Statistik, 
67.000

function dreiADD(arg1,arg2,arg3){
    return(arg1 + arg2 + arg3);
};

let ttt = function () {
    var currentdate = new Date(); 
    var datetime = currentdate.getHours() + ":"  
                + currentdate.getMinutes();
    return(datetime)
};


function revereArgs(...args) {
        return([...args].reverse());
}