// Oefening 1
window.onload = function (){
    Omuitteproberen()
}

function OEFening1(){
    let Zin1, Zin2, Zin3;

    Zin1= "Dit is de eerste zin"
    Zin2= "Dit is de tweede zin"
    Zin3= "Dit is de derde zin"

    document.getElementById( elementid = 'Zin1').innerHTML = Zin1;
    document.getElementById( elementid = 'Zin2').innerHTML = Zin2;
    document.getElementById( elementid = 'Zin3').innerText = Zin3;

    console.log(Zin1);
    console.log(Zin2);
    console.log(Zin3);
}

// Oefening 2
function OEFening2(){
    let array = ('Dit is zin 1', 'Dit is zin 2', 'Dit is zin 3')
    let output;

    array.forEach(zin => { output += ' ' + zin });
    alert(Zin1 + ' ' + Zin2 + ' ' + Zin3);
    alert(`${Zin1} dit is een doorlopende tekst ${Zin2} en ${Zin3}`);
    alert(output);
}

// Oefening 3
function OEFening3(){
    let koekje = 'Ik wil een koekje'
    console.log(koekje.charAt(0));
    console.log(koekje.charAt(3));
    console.log(koekje.lastIndexOf('k'));
    console.log(koekje.lastIndexOf('e'));
    console.log(koekje.length);

    let lasagne = koekje.replace( 'koekje',  'lasagne van de pxl');
    document.getElementById( 'lasagne').innerHTML = lasagne.toUpperCase();
}


function Promp1(){
    let woord = prompt ('geef een woord in');
    let lengte = woord.length;
    alert(`De lengte van het woord ${woord} is ${lengte}`);
}


function Promp2(){
    let zin = prompt('Geef een zin in');
    let indexOfSpace = zin.indexOf(' ');
    console.log('De eerste spatie staat op positie ' + indexOfSpace);

}

function Promp3(){
    let getal1 = prompt('Geef een getal in');
    let getal2 = prompt('Geef een tweede getal in');
    let vermenigvuldiging = getal1 * getal2;
    let opstellen = parseFloat(getal1)  + parseFloat(getal2);

    let uitkomst = 'De uitkomst van de vermenigvuldiging is: ' + vermenigvuldiging;
    document.getElementById('uitkomst').innerText = uitkomst;

}

function Promp4(){
    let oudgenoeg = prompt('Bent je ouder dan 18?');
    if (!oudgenoeg === 'ja'){
        alert('sorry, probeer het volgend jaar opnieuw')
    }
}

// oefeningen deel 3

//Controle structuren

function Oefening1(){
    let geboortejaar = parseInt( prompt('Geef je geboortejaar'));
    let datum = new Date().getFullYear();
    let leeftijd = datum - geboortejaar;
    if(leeftijd >= 20){
        alert('Je bent oud genoeg om deze webpagina te bezoeken');
    }else{
        alert('Je bent niet oud genoeg om deze pagina te bezoeken');
    }
}
function Oefening2(){
    let antwoordSport;
    let doetAanSport = prompt('hou je van sport?')
    if(doetAanSport.toLocaleLowerCase() === 'ja'){
        antwoordSport = 'Do it!'
    }
    else{
        antwoordSport = 'Blijf dan maar in de zetel liggen'
    }
    alert(antwoordSport)
}

function Oefening3(){
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();

    if (hour <= 12){
        console.log(`Het is ${hour}:${minutes} uur voormiddag`);
    }else{
        console.log(`Het is ${hour}:${minutes} uur namiddag`);
    }
}
function Oefening4(){
    let tijd1 = new Date().toLocaleTimeString()
    let uur = new Date().getHours()

    document.getElementById("antwoord").innerText = `${uur} \n ${tijd1}`;
    if (uur >= 7 && uur <= 12  ){
        document.getElementById("antwoord2").innerText = `Goedemorgen! het is ${tijd1} `
    }else if (uur >= 12 && uur <= 18){
        document.getElementById("antwoord2").innerText = `Goede Dag  het is ${tijd1}`
    }else{
        document.getElementById("antwoord2").innerText = `Goede avond het is ${tijd1} in de namiddag`
    }
}

function Oefening5(){
    let getal = parseInt(prompt('Geef een getal in'));
    if(getal < 50){
        document.getElementById('sentence').innerHTML = 'Te laag';
    }else if(getal === 50){
        document.getElementById('sentence').innerHTML = 'Proficiat, goed gegokt!';
    }else if(getal > 50){
        document.getElementById('sentence').innerHTML = 'Te hoog';
    }
}

function Oefening6(){
    let antwoordSport;
    let doetAanSport = prompt('Hou je van sport?');
    switch(doetAanSport.toLocaleLowerCase()){
        case 'ja':
            antwoordSport = 'Just do it!';
            break;
        case 'nee':
            antwoordSport = 'Jammer, blijf dan maar liggen!';
            break;
        default:
            antwoordSport = '´Dat was niet duidelijk, antwoord je vanuit je luie zetel?';
    }
    alert(antwoordSport);
}

function Oefening7(){
    let d = new Date().getMonth();
    let result = '';
    switch(d){
        case 0:
            result = 'Januari';
            break;
        case 1:
            result = 'Februai';
            break;
        case 2:
            result = 'Maart';
            break;
        case 3:
            result = 'April';
            break;
        case 4:
            result = 'Mei';
            break;
        case 5:
            result = 'Junni';
            break;
        case 6:
            result = 'Julli';
            break;
        case 7:
            result = 'Augustus';
            break;
        case 8:
            result = 'September';
            break;
        case 9:
            result = 'Oktober';
            break;
        case 10:
            result = 'November';
            break;
        case 11:
            result = 'December';
            break;
    }
    console.log('Het is de maand ' + result);
}

function Oefening8() {
    let dagdeel;
    let nu = new Date();
    let uren = nu.getHours();
    let dag;

    if (uren >= 7 && uren < 12) {
        dagdeel = 'goedemorgen';
    }else if(uren > 12 && uren < 18){
        dagdeel = 'goededag';
    }else{
        dagdeel = 'goedeavond';
    }

    switch (nu.getDay()){
        case 0:
            dag = 'maandag';
            break;
        case 1:
            dag = 'dinsdag';
            break;
        case 2:
            dag = 'woensdag';
            break;
        case 3:
            dag = 'donderdag';
            break;
        case 4:
            dag = 'vrijdag';
            break;
        case 5:
            dag = 'zaterdag';
            break;
        case 6:
            dag = 'zondag';
            break;
    }
    document.getElementById('Oefening8').innerText = `Het is ${dag} ${dagdeel} ${uren}:${nu.getMinutes()}`;
}

function Oefening9(){
    let getal;
    let teller;
    getal = parseInt(prompt('Geef een getal in van 1 tot 10'));
    if (getal > 0 && getal < 10){
        for(teller = 1; teller <= 10; teller++) {
            document.getElementById('Oefening9').innerText += `${getal} * ${teller} = ${getal * teller} \n`
        }
    }else{
        getal = alert('Geef een correct getal in tussen 1 en 10');
        getal = null;
        console.log('Niet Mogelijk');
    }
}

function Oefening10(){

}

function Oefening11(){

}

function Oefening12(){

}

function Oefening13(){

}

// Deel 3 Arrays

function OEfening1(){

}

// Deel 3 Functie

function vermenigvuldig(){

}
function Random(){
    let Naam;
    let Achternaam;
    let Leeftijd;
    let Beroep;
    let Waarom;

    Naam = prompt('Geef jouw naam in?');
    Achternaam = prompt('Geef jouw achternaam in?');
    Leeftijd = parseInt(prompt('Geef jouw leeftijd in?'));
    if (Leeftijd > 0 && Leeftijd < 100){
        alert('Leeftijd is correct')
    }else{
        Leeftijd = alert('Geef een correcte leeftijd in.');
        Leeftijd = null;
    }
    Beroep = prompt('Geef je beroep in?');
    Waarom = prompt('Waarom doe je dit beroep?');
    document.getElementById('Antwoorden').innerText = `Mijn naam is ${Naam} ${Achternaam} ik ben ${Leeftijd} jaar oud en ik doe ${Beroep} als beroep, door deze reden heb ik voor dit beroep gekozen: ${Waarom}`;

}
function Omuitteproberen(){
    let Woonplaats;

    Woonplaats = prompt('Waar woont u?');
    while (Woonplaats.toLowerCase() !== 'sesame') {
        alert("Geef een juiste woonplaats in.")
        Woonplaats = prompt("Waar woont u?")
    }
    document.getElementById('Woonplaats').innerText = `De stad waar ik woon is ${Woonplaats}, dit is een van de mooiste steden uit het land en ik woon hier al meerdere jaren om te verkomen dat de stad zouw vervuilen heeft de stad besloten om alle auto die diezel gebruiken te verbannen van het centrum, dit betekend voor diegene die nog een diezel auto hebben dat zij niet meer in het centrum kunnen en mogen komen wegens dat je anders een boete van over de 100 euro kan verwachten.`

}