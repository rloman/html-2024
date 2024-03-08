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