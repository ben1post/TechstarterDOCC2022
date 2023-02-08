"use strict";
// Schreibe eine Subtrahier-Methode mit zwei Argumenten. 
//      Subtrahiere das erste Argument vom zweiten. 
//      Liefere das Ergebnis an den Aufrufer zurück
function subsfunc(arg1, arg2){
    return(arg2-arg1);
};

// Test
console.log(subsfunc(1,2));
//returns 1 (good!)

// Schreibe eine anonyme Methode, die über die Variable zufall aufgerufen werden kann und eine Zufallszahl im Bereich von 0 bis 1 auf der Konsole ausgibt
let zufall = function (){
    return(Math.random());
};
// Test
console.log(zufall());
// returns random number between 0 and 1

// Erstelle das Objekt:  Kind {name: "inga", alter:12}. 
//      Übergebe dieses Objekt an die Funktion Geburtstag. 
//      Bei Aufruf der Funktion wird Happy Birthday Inga auf der Konsole ausgegeben und das Alter ist um eins erhöht.

let Kind = {name:"inga", alter:12};

function Geburtstag (person) {
    console.log("Happy Birthday "+ person.name);
    person.alter++;
};

console.log(Geburtstag(Kind));
console.log(Kind.alter);