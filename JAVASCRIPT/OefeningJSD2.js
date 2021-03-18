window.onload = function (){
    Oefening11();
}

// Oefening 1
function Oefening1(){
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
function Oefenig2(){
    let array = ['Dit is zin 1', 'Dit is zin 2', 'Dit is zin 3'];
    let output;

    array.forEach(zin => { output += ' ' + zin });
    alert(Zin1 + ' ' + Zin2 + ' ' + Zin3);
    alert(`${Zin1} dit is een doorlopende tekst ${Zin2} en ${Zin3}`);
    alert(output);
}


// Oefening 3
function Oefening3(){
    let koekje = 'Ik wil een koekje';
    console.log(koekje.charAt(0));
    console.log(koekje.charAt(3));
    console.log(koekje.lastIndexOf('k'));
    console.log(koekje.lastIndexOf('e'));
    console.log(koekje.length);
}

function Oefening9() {
    let getal;
    let teller;
    getal = parseInt(prompt('Geef een getal in van 1 tot 10'));
    if (getal > 0 && getal < 10) {
        for (teller = 1; teller <= 10; teller++) {
            document.getElementById('Oefening9').innerText += `${getal} * ${teller} = ${getal * teller} \n`
        }
    } else {
        getal = alert('Geef een correct getal in tussen 1 en 10');
        getal = null;
        console.log('Niet mogelijk')
    }
}

function Oefening10(){
    let totalNumberoofRows = 5;
    let arr = new Array();
    let j;
    for (let i = 1; i <= totalNumberoofRows; i++){
        arr.push(j);
        console.log(j);
    }
    console.log("\n");
}
function Oefening11(){
    let totalNumberoofRows;
    let teller = '#';
    totalNumberoofRows = parseInt(prompt('Geef een getal in tussen 0 en 10?'));
    if (totalNumberoofRows > 0 && totalNumberoofRows < 10){
        for (teller = 1; teller <= 10; teller++){
            console.log(teller);
        }
    }else {
        totalNumberoofRows = alert('Geef een corect nummer tussen 0 en 10 in');
        console.log('niet mogelijk');
    }
}