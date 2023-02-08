// AUFGABE 1
// Ziel:
//  1. Ein Objekt "Person" soll erstellt werden. 
//  2. Das Attribut "Name" wird auf tom gesetzt. 
//  3. Das Attribut "alias" soll gelöscht werden  
// Fehler: Löschen des Attributs nicht möglich.
function Person (name, alter, alias) {
    this.name = name
    this.alter = alter
    this.aliaz = alias
}
let p = new Person ("tom", 39, "roboto")
console.log(`Das ist ${p.name}. Er ist Jahre ${p.alter} alt.` )
delete p.aliaz // HIER TIPPFEHLER
console.log(JSON.stringify(p) )


// AUFGABE 2
// Ziel: Über die Funktion zeichneMuster wird auf der Konsole ein Muster bestehnd aus Sternen und Strichen ausgegeben.
// 1. Die erste ausgabe lautet "START MUSTER" 
// 2. Eine Schleife wird 15 Mal durchlaufen nd zeichnet das Muster. 
// 3. Die letzte Zeile lautet "ENDE MUSTER"
// Fehler: Das Muster wird falsch ausgegeben
/** Beispiel des Musters. So sollte es sein
 * 
    STARTE MUSTER
    * -
    ** --
    *** ---
    **** ----
    ***** -----
    ****** ------
    ******* -------
    ******** --------
    ********* ---------
    ********** ----------
    *********** -----------
    ************ ------------
    ************* -------------
    ************** --------------
    ENDE MUSETR
*/


let stern = ("*")
let strich = ("-")

// Zeichnet ein Muster (Pattern) bestehend aus den Paramtern p1 und p2
let zeichneMuster = (p1, p2) => {
    count =15 
    for (let i = 1; i < count ;i++){
        if(i==1){
            //Hier Ausgabe start
            console.log("STARTE MUSTER")
        }; // HIER HAT KLAMMER GEFEHLT!
        console.log(p1.repeat(i) + " " + p2.repeat(i));
        if(i==count-1 ) {console.log("ENDE MUSTER")};
    }
}
zeichneMuster(stern, strich)



// AUFGABE 3
// Ziel:    Über die Funktion "mischen" werden die Zutaten eines Obstsalts gemischt. 
//          nach Aufruf der Funktion mischen wird  der text "Dein Obstsalt bestehned aus Apfel -&- Banane -&- Orange" ausgegben
//          1. Ein Array "Obstsalat" mit den Werten "Apfel", "Orange", "Banane" anlegen
//          2. Über die Array Funktion "Join" werden die Elemente des Array zu einem String zusammengefügt. 
//          3. Als Separator dient der an "Join" übergebene Paramter. hier 
//          4. Dokumententation der Funktion Join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// Fehlermeldung: SyntaxError: Unexpected string

let Obstsalat = ["Apfel", "Orange", "Banane"]; // HIER FALSCHE KLAMMER!
let mischen = function (checkvalue){
    let seperator = " -&- "
    console.log("Dein Obstsalt bestehend aus " +  Obstsalat.join(seperator))
}
mischen() // HIER FEHLENDE OEFFNENDE KLAMMER



// AUFGABE 4
// Ziel: Eine Automatik soll die Temperatur pruefen. Wenn es drausen 
// kalt ist (es_ist_kalt == true) UND die Heizung aus ist (heizung_ein == false)
// dann  soll die Heizung eingestellt werden (heizung_ein = true)
// Fehler: Die Heizung geht nicht an

let es_ist_kalt =true
let heizung_ein = false

if ( (es_ist_kalt==true) && ( heizung_ein==false) ){ // FEHLT =
    console.log("HEINZUNG EIN")
    heizung_ein = true
} else{ console.log ("Warm genug. HEIZUNG aus")}
