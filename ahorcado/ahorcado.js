const user = document.getElementById("user");
const container = document.getElementById("container");
const btn = document.getElementById("btn");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.height = 0;


//dibujar en canvas
const objects =
[
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];
var wordsSelect;// palabras selecionadas
var mistakes;//errores
var hits;//aciertos
var usedLetters;//letras usadas 


//dibujar las letras acertadas y no acertadas
const addLetter = letter =>
{
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    user.appendChild(letterElement);
}
//dibujar en pantalla cuerpo
const addBodyPart = objects=>
{
    ctx.fillStyle ='yellow';
    ctx.fillRect(...objects);
}

//dibujar humano
const wrongLetter = ()=>
{
    addBodyPart(objects[mistakes]);
    mistakes++;
    if(mistakes===objects.length)
    {
        alert("PERDISTE NO ERES MUY FAN DE NARUTO Y GOKU");
        endGame();
    }
}
//ver letra correcta
const correctLetter = letter=>
{
    const { children } = container;
    for(let i=0;i<children.length;i++)
    {
        if(children[i].innerHTML === letter)
        {
            children[i].classList.toggle('hidden');
            hits++;
        }
    }
    if(hits === wordsSelect.length)
    {
        endGame();
        alert("FELICIDADES ERES TODO UN FAN DE NARUTO Y GOKU MAQUINA ");
    }
}

const newLetter =letter=>
{
    if(wordsSelect.includes(letter))
    {
        correctLetter(letter);
    }
    else
    {

    }
}

const letterInput = letter=>
{
    if(wordsSelect.includes(letter))
    {
        correctLetter(letter);
    }
    else
    {
        wrongLetter();
    }
    addLetter(letter);
    usedLetters.push(letter);
}

const letterEvent = event =>
{
    let newLetter = event.key.toUpperCase();
    if(newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter))
    {
        letterInput(newLetter);
    }
}

//palabras para adivinar
const words = 
[
    'goku','piccolo','krilin','songohan','vegeta','goten','trunks','freezer','bills','cooler','dodoria','zarbon','celula','tenshihan','satan',
    'jiren','turles','gogeta','zamasu','zeno','kitela','hermes','sidra','pam','videl','majinbu','babidi','janemba','bardock','bocjack','raditch',
    'naruto','pain','sasuke','kakashi','yamato','kurama','sikamaru','sakura','hashirama','tobirama','minato','gara','hiraya','orochimaru','itachi',
    'kisame','deidara','konohamaru','hachibi','gai','kankuro','neji','hinata','shino','sai','zabuza','hako','madara','chiyo','karin','sasori','choji'
];
/* const goku = ['goku','piccolo','krilin','songohan','vegeta','goten','trunks','freezer','bills','cooler','dodoria','zarbon','celula','tenshihan','satan'];
const naruto = ['naruto','pain','sasuke','kakashi','yamato','kurama','sikamaru','sakura','hashirama','tobirama','minato','gara','hiraya'];
const campeones = ['oliver','mark','benji','julian ros','tom','bruce','danny','roberto'];
const animales = ['perro','gato','periquito','serpiente','tiburon','ballena','hanster','kapibara','nutria','cacatua','kanguro','griloo'];
const pokemon =['picachu','bulbasur','charmander','mew','geogude','squirtle','ditto','monkey','evee','scinter','kalakazan','lapas','rhino','taurus'];
 */

//pintar las palabras
const drawWords =()=>
{
    wordsSelect.forEach(letter => {
        const letterEvent=document.createElement('span');
        letterEvent.classList.add('letter');
        letterEvent.classList.add('hidden');
        letterEvent.innerHTML=letter.toUpperCase();
        container.appendChild(letterEvent); 
    });
};

//palabra aleotoria
const selectRadonWords =()=>
{
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    wordsSelect=word.split(''); //para ke se separen en letras
    console.log(word);
}
//dibujar los poxiles
const drawHawMan =()=>
{
    ctx.canvas.width = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle= "red";
    ctx.fillRect(0,7,4,1);
    ctx.fillRect(1,0,1,8);
    ctx.fillRect(2,0,3,1);
    ctx.fillRect(4,1,1,1);
}
//reinicio y empience
const startGame=()=>
{
    usedLetters=[];
    mistakes=0;
    hits=0;
    container.innerHTML='';
    user.innerHTML = '';
    btn.style.display = "none";
    drawHawMan();
    selectRadonWords();
    drawWords();
    document.addEventListener('keydown', letterEvent);
}
const endGame = () =>
{
    document.removeEventListener('keydown', letterEvent);
    btn.style.display = 'block';
}


btn.addEventListener('click', startGame)