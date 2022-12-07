const Kochrezept = {
	Zutaten: ["Karotten", "Tomaten", "Kartoffeln"],
	Schwierigkeitsgrad: "einfach",
	Dauer: 100, // [min]
	
	mischen: function () {
		return this.Zutaten.join().replace(/,/g, '').
		split('').sort(function(){return 0.5-Math.random()}).join('')
	},
	zubereiten: function () {
		return this.mischen() + this.Dauer.toString() // kochen fuer 100 min
	},
	anrichten: function () {
		return this.zubereiten().split('').sort().join('') // schoen ordentlich sortiert und angerichtet
	}
}

console.log(Kochrezept.mischen())


console.log(Kochrezept.zubereiten())


console.log(Kochrezept.anrichten())
