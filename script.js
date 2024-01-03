

// get random word function
WORD_API_URL="https://random-word-api.herokuapp.com/word"

function getWordAPI(){
    const request = axios.get(WORD_API_URL);
    const data = request.then((response) => response.data[0])
    return data
}


// get word defenition function
WORD_DEF_URL="https://api.dictionaryapi.dev/api/v2/entries/en/"

function getDefAPI(word){
    const request = axios.get(WORD_DEF_URL+word);
    const data = request.then((response) => response)
    return data
}


// set word defenition function on page
function setDef(game_word){
    game_word.then(response => {
        getDefAPI(response).then(response => {
            if (response.data.title=="No Definitions Found"){
                document.getElementById("word-defenition").innerHTML="No Definitions Found"
            } else{
            document.getElementById("word-defenition").innerHTML=response.data[0].meanings[0].definitions.slice(0,2).map(item => item.definition).join("")
            }
        })
    })
}


// convert api given word into "_" list and update thewordingame
function update_hidden_word(game_word,array){
    game_word.then((e) =>{
        let result = [];
        for (let i = 0; i < Array.from(e).length; i++) {
            letter = Array.from(e)[i]
            if(array.indexOf(letter) != -1){
                result.push(letter);
            }else{
                result.push("-");
            }}
        document.getElementById("hidden-word").innerHTML = result.join("    ");
})
    
}


// main game
function startGame(){
    document.getElementById("menu").style.display="none";
    document.getElementById("main-game").style.display="block";
    let userGuess = new Array;
    let fails = 0
    let game_word = getWordAPI();
    update_hidden_word(game_word,userGuess);
    let compare = document.getElementById("hidden-word").innerHTML
    setDef(game_word)
    const keyboardDiv = document.getElementById("keyboard-div");
    let letters = "abcdefghijklmnopqrstuvwxyz";
    for (let index = 0; index < letters.length; index++) {
        let button = document.createElement("button");
        button.innerHTML=letters[index];
        button.className="key-button";
        button.addEventListener("click",()=>{
            userGuess.push(button.innerHTML);
            update_hidden_word(game_word,userGuess);
            console.log(compare,document.getElementById("hidden-word").innerHTML)
            if (compare == document.getElementById("hidden-word").innerHTML){
                fails+=1
            }
            button.disabled=true;
            compare = document.getElementById("hidden-word").innerHTML
            console.log({'Current Word':game_word,'User Gusess':userGuess,'fails':fails});
            //
            
        })
        keyboardDiv.appendChild(button);
    }
}


// start-button Event
document.getElementById("start-button").addEventListener("click",()=>{
    startGame()
})

