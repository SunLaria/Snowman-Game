
WORD_API_URL="https://random-word-api.herokuapp.com/word"
WORD_DEF_URL="https://api.api-ninjas.com/v1/dictionary?word="


// get random word function
function getWordAPI(){
    const request = axios.get(WORD_API_URL);
    const data = request.then((response) => response.data[0])
    return data
}


// get word defenition function
function getDefAPI(word){
    const request = axios.get(WORD_DEF_URL+word,{
        headers: { 'X-Api-Key': 'Os/BPM9azs+sDanCldsW2w==ajJ4ceH4z7VzU8TD'}
    });
    const data = request.then((response) => response.data)
    return data
}


// set word defenition function on page
function setDef(game_word){
    game_word.then(response => {
        getDefAPI(response).then(response => {
            if (response.valid==true){
                document.getElementById("word-defenition").innerHTML=response.definition
            }else{
                document.getElementById("word-defenition").innerHTML="No defenitions"
            }
        })
    })
}


// convert api given word into "_" list
function get_hidden_word(game_word,array){
    let result = [];
        game_word.then((e) =>{
        for (let i = 0; i < Array.from(e).length; i++) {
            letter = Array.from(e)[i]
            if(array.indexOf(letter) != -1){
                console.log("contain");
                result.push(letter);
            }else{
                result.push("-");
            }
    }})
    return result
}


// main game
function startGame(){
    document.getElementById("menu").style.display="none";
    document.getElementById("main-game").style.display="block";
    let userGuess = new Array;
    let hiddenWord = new Array
    let tries = 0
    let game_word = getWordAPI();
    setDef(game_word)
    const defenitionDiv = document.getElementById("word-defenition")


    const keyboardDiv = document.getElementById("keyboard-div");
    let letters = "abcdefghijklmnopqrstuvwxyz";
    for (let index = 0; index < letters.length; index++) {
        let button = document.createElement("button");
        button.innerHTML=letters[index];
        button.className="key-button";
        button.addEventListener("click",()=>{
            if (tries>=7){
                // end game function, WIP
            }
            userGuess.push(button.innerHTML)
            tries+=1
            hiddenWord = get_hidden_word(game_word,userGuess);
            document.getElementById("hidden-word").innerText = hiddenWord.join(" ");
            button.disabled=true;
            // debug
            console.log(document.getElementById("hidden-word").innerText) // why its empty
            console.log({'Current Word':game_word,'Hidden Word':hiddenWord,'User Gusess':userGuess,'User Tries':tries});
            //
            
        })
        keyboardDiv.appendChild(button);
    }
}


// start-button Event
document.getElementById("start-button").addEventListener("click",()=>{
    startGame()
})

