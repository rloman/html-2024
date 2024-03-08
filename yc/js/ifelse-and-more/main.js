function demoArray() {

    /*
    Een array in JS maak je met een []
     */
    let numbers = [8, 1, 12, 34, 55, 105, 22, 19];
    /*
    let op: arrays zijn indexed based, dus het eerste element staat op adres: 0
    het tweede op adres: 1,
    het derde op adres: 2.
     */

    console.log(numbers[0]);
    console.log(numbers[3]);
    console.assert(numbers[2] == 12)

    // Twee manieren om over de array te lopen.
    // Basic
    for (let i = 0; i < numbers.length; i++) {
        console.log("Het element op adres: " + i + " is: " + numbers[i]);
    }

    // Andere manier is de for each
    for (let number of numbers) {
        console.log("Het number is: "+number)
    }
    // let op een struikelblok!!!
    for (let number in numbers) { // in: index, of: O(bject), dus hier is number dus de index.
        console.log("Het number op plek: "+number+" is gelijk aan: "+numbers[number])
    }

    // string charAt
    let firstName = "Vrijdag";
    for (let i = 0; i < firstName.length; i++) {
        console.log(firstName[i]);
    }
}

function ifElseDemo(leeftijd) {
    if (leeftijd < 20) {
        console.log("U bent nog te jong");
    } else {
        console.log("U bent op leeftijd");
    }

    // && is de logische and, || is de logische of
    if (leeftijd > 20 && leeftijd < 80) {
        console.log("U mag nog mee in de botsautoos");
    }

    if (leeftijd < 20) {
        console.log("OK");
    }
    // basic for
    /*
     syntax:
     for(initialisatie;conditie;increment)
     */
    for (let i = 0; i < 10; i++) { // i++ is hetzelfde als i = i+1
        console.log(i);
    }
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}