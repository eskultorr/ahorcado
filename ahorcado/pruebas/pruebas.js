const primero = ['uno','dos','tres'];
const segundo =  ['cuatro','cinco','sexto'];
const tercero = ['siete','ocho','nueve'];
const conjunto =  new Array(primero,segundo,tercero);
const conjuntoDos =
[
    ['uno','dos','tres'],
    ['cuatro','cinco','sexto'],
    ['siete','ocho','nueve']
]
console.log(conjuntoDos)


    let word = conjuntoDos[Math.floor((Math.random() * conjuntoDos.length))];
    wordsSelect=word.split(''); //para ke se separen en letras
    alert(word);




/* const prueba =()=>
{
    let word = conjunto[Math.floor((Math.random() * conjunto.length))].toUpperCase();
    wordsSelect=word.split(''); //para ke se separen en letras
    console.log(word);
}*/
//prueba(); 