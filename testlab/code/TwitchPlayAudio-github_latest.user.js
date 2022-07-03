// ==UserScript==
// @name Twitch Play Audio 🔊 [github]
// @icon https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Twitch_Glitch_Logo_Purple.svg/206px-Twitch_Glitch_Logo_Purple.svg.png
// @namespace    ChessSkins
// @description    `play audio in Twitch chat`
// @author          agiota_do_artenio
// @homepage        https://www.chess.com/blog/Agiota_do_Artenio
// @version        0.0.6-dev
// @grant    none
// @match           *://www.twitch.tv/*
// @run-at          document-end
// ==/UserScript==

// Get the Twitch chat HTML element
const chat = document.getElementsByClassName('chat-scrollable-area__message-container');

// Regular expression for English piece names and common terms
var regexTerms = new RegExp(/\b((k){2,}|(h[ae]){2,}|(ja){3,}|[l][o]{1,}[l]{1,}[!]{0,}|palmas|para bens|:clap:|Clap|lul|KEKW|perdemo|final triste|sadness and sorrow|sadnessandsorrow|francesa|caro-kann|naomagoarpessoas|caraca g4|caracag4|mjc|grobiano raiz|grobianoraiz|joga mais rapido|jogamaisrapido|acelera meufilho|acelerameufilho|msca|premove aloprado|premovealoprado|seismillances|6000 lances|seis mil lances|6klances|quero que ce faça lance|queroquecefacalance|andameufilho|anda meu filho|to ficando tenso|toficandotenso|pindura mds|pinduramds|ashamed|bamos|mate logo|damatelogo|florida|londres|ohcmon|que peito|quepeito|topior|ficou pior|to pior|tomelhor|to melhor|nota zero|notazero|processar o Krikor|ovoprocessarokrikor|vouprocessarokrikor|tchau daminha|tchaudaminha|saudacoesnoturnas|saudações noturnas|roubeinessapartida|roubei nessa|ocarataroubando|ta roubando|claramenteroubando|cheating|claramente roubando)\b/g, 'gui')

// Enable the mutation observer to observe the child elements of the Twitch chat, the chat messages
var mutationConfig = {childList: true};
//play audio with out html audio tag. [IMPORTANT: urls are case sensitive eg: .MP3/.mp3]
var hahaha = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/SitcomLaughter.mp3');
var kekw = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/KEKWcut-40.mp3');
var tchaudaminha = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/RafPig/tchaudaminha.MP3');
var sadnessandsorrow = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/sadnessandsorrow.mp3');
var aplausos = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/mixkit-audience-light-applause-354.mp3');

var ashamed = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/ashamed.MP3');
var bamos = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/bamos.MP3');
var damatelogo = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/damatelogo.MP3');
var florida = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/florida.MP3');
var londres = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/londres.MP3');
var ohcmon = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/ohcmon.MP3');
var quepeito = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/quepeito.MP3');
var topior = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/topior.MP3');
var tomelhor = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/tomelhor.MP3');
var notazero = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/notazero.MP3');
var vouprocessarokrikor = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/vouprocessarokrikor.MP3');
var saudacoesnoturnas = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/saudacoesnoturnas.MP3');
var claramenteroubando = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/claramenteroubando.MP3');
var ocarataroubando = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/ocarataroubando.MP3');
var roubeinessapartida = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/roubeinessapartida.MP3');
var pinduramds = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/pinduramds.MP3');
var toficandotenso = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/toficandotenso.MP3');
var andameufilho = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/andameufilho.MP3');
var queroquecefacalance = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/queroquecefacalance.MP3');
var seisklances = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/6klances.MP3');
var quepremovealoprado = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/quepremovealoprado.MP3');
var msca = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/msca.MP3');
var acelerameufilho = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/acelerameufilho.MP3');
var jogamaisrapido = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/jogamaisrapido.MP3');
var grobianoraiz = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/grobianoraiz.MP3');
var mjc = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/mjc.MP3');
var caracag4 = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/caracag4.MP3');
var naomagoarpessoas = new Audio('https://github.com/FSA1/Styles/raw/main/testlab/personalities/audio/GMKrikor/naomagoarpessoas.MP3');
// Global variable to track the RegEx in use
var selectedRegEx;

// Recursive function to check if the Twitch chat contains messages
function addObserverIfDesiredNodeAvailable() {
  if(chat.length == 0) {
      window.setTimeout(addObserverIfDesiredNodeAvailable,500);
      return;
  }
  Array.from(chat).forEach(x =>{
    observer.observe(x, mutationConfig)
  })
}

// Main function for replacing the Chess moves with the funny-sound HTML element
const callback = function(mutationsList, observer) {
  Array.from(mutationsList).forEach(mutation =>{
    checkSettings();
      if (mutation.type === 'childList') {
        if(mutation.target.getElementsByClassName('text-fragment').length !=0){
          var newestMessage = mutation.target.getElementsByClassName('text-fragment')[mutation.target.getElementsByClassName('text-fragment').length-1].innerHTML
          if(!newestMessage.includes('<a class="funny-sound">')){
            if(selectedRegEx!= null){
              //myAudio.play();
              mutation.target.getElementsByClassName('text-fragment')[mutation.target.getElementsByClassName('text-fragment').length-1].innerHTML = newestMessage.replace(selectedRegEx, function(message){
              return spoiler(message);
            })
          }
        }}
      }
  })
};

const observer = new MutationObserver(callback);

// The spoiler message that will replace the chess move
const spoiler = (message)=> {
    if(message.match(/KEKW/gui)){
        kekw.play();
    }
    if(message.match(/(palmas|Clap|para bens|:clap:)/gui)){
        aplausos.play();
    }
    if(message.match(/((k){2,}|lul|(ja){3,}|(h[ae]){2,}|[l][o]{1,}[l]{1,}[!]{0,})/gui)){
        hahaha.play();
    }
    if(message==="ashamed"){
        ashamed.play();
    }
    if(message==="bamos"){
        bamos.play();
    }
    if(message.match(/(damatelogo|da mate logo)/gui)){
        damatelogo.play();
    }
    if(message==="florida"){
        florida.play();
    }
    if(message==="londres"){
        londres.play();
    }
    if(message==="ohcmon"){
        ohcmon.play();
    }
    if(message.match(/(quepeito|que peito)/gui)){
        quepeito.play();
    }
    if(message.match(/(topior|to pior|ficou pior)/gui)){
        topior.play();
    }
    if(message.match(/(tomelhor|to melhor)/gui)){
        tomelhor.play();
    }
    if(message==="notazero" || message==="nota zero"){
        notazero.play();
    }
    if(message==="vouprocessarokrikor" || message==="processar o krikor" || message==="ovoprocessarokrikor"){
        vouprocessarokrikor.play();
    }
    if(message==="tchaudaminha" || message==="tchau daminha"){
        tchaudaminha.play();
    }
    if(message==="saudacoesnoturnas" || message==="saudações noturnas"){
        saudacoesnoturnas.play();
    }
    if(message==="roubeinessapartida" || message==="roubei nessa"){
        roubeinessapartida.play();
    }
    if(message==="ocarataroubando" || message==="ta roubando"){
        ocarataroubando.play();
    }
    if(message==="claramenteroubando" || message==="claramente roubando" || message==="cheating"){
        claramenteroubando.play();
    }
    if(message==="naomagoarpessoas" || message==="francesa" || message==="caro-kann"){
        naomagoarpessoas.play();
    }
    if(message==="caracag4" || message==="caraca g4"){
        caracag4.play();
    }
    if(message==="mjc"){
        mjc.play();
    }
    if(message==="msca"){
        msca.play();
    }
    if(message==="grobianoraiz" || message==="grobiano raiz"){
        grobianoraiz.play();
    }
    if(message==="jogamaisrapido" || message==="joga mais rapido"){
        jogamaisrapido.play();
    }
    if(message==="acelerameufilho" || message==="acelera meu filho"){
        acelerameufilho.play();
    }
    if(message==="premovealoprado" || message==="premove aloprado"){
        quepremovealoprado.play();
    }
    if(message==="6klances" || message==="seismillances" || message==="seis mil lances" || message==="6000 mil lances"){
        seisklances.play();
    }
    if(message==="queroquecefacalance" || message==="quero que ce faça lance"){
        queroquecefacalance.play();
    }
    if(message==="andameufilho" || message==="anda meu filho"){
        andameufilho.play();
    }
    if(message==="toficandotenso" || message==="to ficando tenso"){
        toficandotenso.play();
    }
    if(message==="pinduramds" || message==="pindura mds"){
        pinduramds.play();
    }
    if(message==="sadnessandsorrow" || message==="sadness and sorrow" || message==="final triste" || message==="perdemo"){
        sadnessandsorrow.play();
    }
  return '<a class="funny-sound">[🔊]</a> '+ message
}

addObserverIfDesiredNodeAvailable();

// Method for setting the RegEx used in filtering
function checkSettings(){
    //this variable was intend to be used with a options menu like in chrome extension but as a script it could be removed. I will keep this just in case.
    var chatWords = true;
    if(chatWords === true){
      selectedRegEx = regexTerms
    }
    if(!chatWords === true){
      selectedRegEx = null;
    }
}
//myAudio.Stop();
var forceStyle = document.querySelector('head');
forceStyle.insertAdjacentHTML('afterend', '<style type="text/css">.funny-sound { position: relative; display: inline-block; }  .funny-sound .funny-sound-text { visibility: hidden; width: 60px; background-color: black; color: #fff; text-align: center; border-radius: 6px; padding: 5px 0;  /* Position the tooltip */ position: absolute; z-index: 1; bottom: 100%; left: 100%; margin-left: -60px; } .funny-sound:hover .funny-sound-text { visibility: visible; }</style>');