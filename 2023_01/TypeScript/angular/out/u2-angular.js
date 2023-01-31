var Fahrzeug;
(function (Fahrzeug) {
    Fahrzeug[Fahrzeug["KFZ"] = 2] = "KFZ";
    Fahrzeug[Fahrzeug["FAHRRAD"] = 5] = "FAHRRAD";
    Fahrzeug[Fahrzeug["E_BIKE"] = 7] = "E_BIKE";
})(Fahrzeug || (Fahrzeug = {}));
;
var Vorname;
var alter;
var auto;
var Farbe;
(function (Farbe) {
    Farbe[Farbe["ROT"] = 1] = "ROT";
    Farbe[Farbe["GRUEN"] = 2] = "GRUEN";
    Farbe[Farbe["GELB"] = 3] = "GELB";
    Farbe[Farbe["BLAU"] = 4] = "BLAU";
})(Farbe || (Farbe = {}));
;
var Prozess;
(function (Prozess) {
    Prozess["START"] = "START";
    Prozess["STOP"] = "STOP";
    Prozess["CONTINUE"] = "CONTINUE";
    Prozess["ERROR"] = "ERROR";
    Prozess["INITIAL"] = "INITIAL";
})(Prozess || (Prozess = {}));
;
function bezahlen_Gehen(ekw) {
    console.log(ekw.Einkaufswert());
    var bezahlung = 0;
    if (bezahlung === 0) {
        return false;
    }
    else {
        return true;
    }
    ;
}
var penny = {
    anzahlArtikel: 4,
    artikel: ["Banane", "Buch", "Auto", "Choki"],
    Einkaufswert: function () {
        return (22);
    },
};
console.log(bezahlen_Gehen(penny));
//# sourceMappingURL=u2-angular.js.map