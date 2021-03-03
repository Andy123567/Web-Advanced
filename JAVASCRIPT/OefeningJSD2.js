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

let array = ('Dit is zin 1', 'Dit is zin 2', 'Dit is zin 3');
let output;

array.forEach(zin => { output += ' ' + zin });
alert(Zin1 + ' ' + Zin2 + ' ' + Zin3);
alert(`${Zin1} dit is een doorlopende tekst ${Zin2} en ${Zin3}`);
alert(output);