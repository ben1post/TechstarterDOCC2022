"use strict";
// Erstelle ein Leeres Array und greife mit der Variablen dinge darauf zu
let dinge = [];
// Füge in das Array die Werte “Baum”, “Auto”, “Haus”, 12 ein
dinge.push("Baum", "Auto", "Haus", 12);
// Greife auf das zweite Elemente des Arrays zu. Welcher Wert steht an dieser Position?
console.log(dinge[1]);
// Ändere das zweite Elemente zum Wert "Fahrrad"
dinge[1] = "Fahrrad";
// Lass über Konsole log folgende Informationen ausgeben:
   // a) Anzahl der Elemente des Arrays
console.log(dinge.length);
   // b) Alle Elemente des  Arrays
for (let elements of dinge.values()) {
    console.log(elements);
  };
   // c) das Elemente an Position 2 des Arrays
console.log(dinge[1]);
// Füge am Anfang des Arrays ein Element mit dem Wert “Blume” ein
dinge.unshift("Blume");

// Fragen: 
// Wie viele Elemente hat das Array?
console.log(dinge.length);
// Welcher Wert steht am erste Element des Arrays?
console.log(dinge[0]);