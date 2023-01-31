enum Fahrzeug {KFZ=2, FAHRRAD=5, E_BIKE=7};

let Vorname:string;

let alter:number;

let auto:Fahrzeug;

enum Farbe {ROT=1, GRUEN, GELB, BLAU};

enum Prozess {START="START", STOP="STOP", CONTINUE="CONTINUE", ERROR="ERROR", INITIAL="INITIAL"};

interface Buch {
    Titel:string;
    Autor:string;
    Erscheinungsjahr:number;
}

interface Reise {
    Startdatum: string;
    Enddatum: string;
    starteReise():boolean;
}

interface Einkaufswagen {
    anzahlArtikel:number;
    artikel:string[];
    Einkaufswert():number;
}

function bezahlen_Gehen(ekw:Einkaufswagen){

    console.log(ekw.Einkaufswert())

    let bezahlung=0;

    if (bezahlung===0) {
        return false
    } else {
        return true
    };
}

const penny:Einkaufswagen = {
    anzahlArtikel: 4,
    artikel: ["Banane", "Buch", "Auto", "Choki"],
    Einkaufswert() {
        return(22)
    },
}

console.log(bezahlen_Gehen(penny))

