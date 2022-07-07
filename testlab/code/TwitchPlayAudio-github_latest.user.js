// ==UserScript==
// @name Twitch Play Audio 🔊 [github]
// @icon https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Twitch_Glitch_Logo_Purple.svg/206px-Twitch_Glitch_Logo_Purple.svg.png
// @namespace    ChessSkins
// @description    `play audio in Twitch chat`
// @author          agiota_do_artenio
// @homepage        https://www.chess.com/blog/Agiota_do_Artenio
// @version        0.0.10-dev
// @grant    none
// @match           *://www.twitch.tv/*
// @run-at          document-end
// ==/UserScript==

/* ============================================================================================================
  O Código continua sendo melhorado, as condições estão sendo substituidas pos Regx aos poucos.
  Além dos audio estou adicionando alguns emotes e fotos de pessoas famosas, quando são citadas.
  A fase do projeto é de desenvolvimento, ou seja, esta é uma versão de testes, estará em constantes mudanças
  pelos próximos dias.
  ===========================================================================================================*/

//set volume globally (1=100% 0.5=50%)
var choosenvol = 0.3;

// Get the Twitch chat HTML element
const chat = document.getElementsByClassName('chat-scrollable-area__message-container');

// Regular expression for English piece names and common terms
var regexTerms = new RegExp(/\b(playvideo|Raff?a?(el)? ?(Pig)?(Leitão)?|[KG]ri[kg]or?[A-z]{0,}|senna|[éeh ]{0,}tetra|Ding( Liren)?|Magnus( Carlsen)?|(Hikaru )?Naka(mura)?|(Ian )?Nepo([A-z]{0,})|Pringles|Raff?a?(el)? ?(Chess)?|k{3,}|([hk][khae] {0,1}){2,}|((ja)( ){0,1}){3,}|[l][ou]{1,}[l]{1,}[!]{0,}|wh([a]){3,}t[?]{0,}|(Salve( {0,})){1,}|en[gja]{1,2}ine|stockfish|(stock){0,1}peixe|barrilda|boa tarde|boa noite|bom dia|mds|palmas|aplausos|applauses|[A-z]{0,}(Clap( {0,})){1,}|lul|(KEKW( {0,})){1,}|perdemo|(final)( ){0,}triste|o que foi que eu fiz|(sadness)( ){0,}and( ){0,}sorrow|francesa|([kc]aro)( ){0,}[kc]a[n]{1,}|naomagoarpessoas|caraca g4|caracag4|mjc|g4 grobiano|grobiano raiz|grobianoraiz|lance|msca|premove aloprado|premovealoprado|seismillances|6000 lances|seis mil lances|6klances|quero que ce faça lance|queroquecefacalance|andameufilho|anda meu filho|to ficando tenso|toficandotenso|p[ei]ndura[A-z]{0,}|ashamed|bamos|mate logo|damatelogo|florida|londres|ohcmon|que peito|quepeito|topior|ficou pior|to pior|tomelhor|to melhor|nota zero|notazero|processar o Krikor|ovoprocessarokrikor|vouprocessarokrikor|tchau daminha|tchaudaminha|saudacoesnoturnas|saudações noturnas|roubeinessapartida|roubei nessa|ocarataroubando|ta roubando|claramenteroubando|cheating|claramente roubando)\b/g, 'gui')

// Enable the mutation observer to observe the child elements of the Twitch chat, the chat messages
var mutationConfig = {childList: true};

const srvgithub = 'https://github.com/FSA1/Styles/raw/main/testlab/';
const selectedServer = srvgithub

//play audio with out html audio tag. [IMPORTANT: urls are case sensitive eg: .MP3/.mp3]
var hahaha = new Audio(selectedServer + 'personalities/audio/SitcomLaughter.mp3');
var kekw = new Audio(selectedServer + 'personalities/audio/KEKWcut-40.mp3');
var tchaudaminha = new Audio(selectedServer + 'personalities/audio/RafPig/tchaudaminha.MP3');
var sadnessandsorrow = new Audio(selectedServer + 'personalities/audio/sadnessandsorrow.mp3');
var aplausos = new Audio(selectedServer + 'personalities/audio/mixkit-audience-light-applause-354.mp3');

var ashamed = new Audio(selectedServer + 'personalities/audio/GMKrikor/ashamed.MP3');
var bamos = new Audio(selectedServer + 'personalities/audio/GMKrikor/bamos.MP3');
var damatelogo = new Audio(selectedServer + 'personalities/audio/GMKrikor/damatelogo.MP3');
var florida = new Audio(selectedServer + 'personalities/audio/GMKrikor/florida.MP3');
var londres = new Audio(selectedServer + 'personalities/audio/GMKrikor/londres.MP3');
var ohcmon = new Audio(selectedServer + 'personalities/audio/GMKrikor/ohcmon.MP3');
var quepeito = new Audio(selectedServer + 'personalities/audio/GMKrikor/quepeito.MP3');
var topior = new Audio(selectedServer + 'personalities/audio/GMKrikor/topior.MP3');
var tomelhor = new Audio(selectedServer + 'personalities/audio/GMKrikor/tomelhor.MP3');
var notazero = new Audio(selectedServer + 'personalities/audio/GMKrikor/notazero.MP3');
var vouprocessarokrikor = new Audio(selectedServer + 'personalities/audio/GMKrikor/vouprocessarokrikor.MP3');
var saudacoesnoturnas = new Audio(selectedServer + 'personalities/audio/GMKrikor/saudacoesnoturnas.MP3');
var claramenteroubando = new Audio(selectedServer + 'personalities/audio/GMKrikor/claramenteroubando.MP3');
var ocarataroubando = new Audio(selectedServer + 'personalities/audio/GMKrikor/ocarataroubando.MP3');
var roubeinessapartida = new Audio(selectedServer + 'personalities/audio/GMKrikor/roubeinessapartida.MP3');
var pinduramds = new Audio(selectedServer + 'personalities/audio/GMKrikor/pinduramds.MP3');
var pinduradesgraca = new Audio(selectedServer + 'personalities/audio/GMKrikor/pindura-desgra%C3%A7a.MP3');
var pinduramaldito = new Audio(selectedServer + 'personalities/audio/GMKrikor/pindura-maldito.MP3');
var toficandotenso = new Audio(selectedServer + 'personalities/audio/GMKrikor/toficandotenso.MP3');
var andameufilho = new Audio(selectedServer + 'personalities/audio/GMKrikor/andameufilho.MP3');
var queroquecefacalance = new Audio(selectedServer + 'personalities/audio/GMKrikor/queroquecefacalance.MP3');
var acelerameufilho = new Audio(selectedServer + 'personalities/audio/GMKrikor/acelerameufilho.MP3');
var jogamaisrapido = new Audio(selectedServer + 'personalities/audio/GMKrikor/jogamaisrapido.MP3');
var seisklances = new Audio(selectedServer + 'personalities/audio/GMKrikor/6klances.MP3');
var quepremovealoprado = new Audio(selectedServer + 'personalities/audio/GMKrikor/quepremovealoprado.MP3');
var msca = new Audio(selectedServer + 'personalities/audio/GMKrikor/msca.MP3');
var grobianoraiz = new Audio(selectedServer + 'personalities/audio/GMKrikor/grobianoraiz.MP3');
var mjc = new Audio(selectedServer + 'personalities/audio/GMKrikor/mjc.MP3');
var caracag4 = new Audio(selectedServer + 'personalities/audio/GMKrikor/caracag4.MP3');
var naomagoarpessoas = new Audio(selectedServer + 'personalities/audio/GMKrikor/naomagoarpessoas.MP3');
var senna = new Audio(selectedServer + 'personalities/audio/senna-short.mp3');
var tetra = new Audio(selectedServer + 'personalities/audio/tetra.mp3');
var bomdia1 = new Audio(selectedServer + 'personalities/audio/GMKrikor/krikor-bom-dia-pessoal01.MP3');
var bomdia2 = new Audio(selectedServer + 'personalities/audio/GMKrikor/krikor-bom-dia-pessoal02.MP3');
var bomdia3 = new Audio(selectedServer + 'personalities/audio/GMKrikor/krikor-bom-dia-pessoal03.MP3');
// Global variable to track the RegEx in use
var selectedRegEx;

//An array to house all of the URLs of your sounds
// play random sounds
function playRandomSound(options){

      //This line will select a random sound to play out of your provided URLS
      //var soundFile = sounds[Math.floor(Math.random()*sounds.length)];

      var rSound = new Audio(options[Math.floor(Math.random()*options.length)]);
      rSound.play();
}

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
              mutation.target.getElementsByClassName('text-fragment')[mutation.target.getElementsByClassName('text-fragment').length-1].innerHTML = newestMessage.replace(selectedRegEx, function(message){
              return soundmsg(message);
            })
          }
        }}
      }
  })
};

const observer = new MutationObserver(callback);


// The sound and text message that will replace the term matched
const soundmsg = (message)=> {
    if(message.match(/playvideo/gui)){
        kekw.volume = choosenvol;
        kekw.play();
        return '<a class="funny-sound">[🔊]</a><iframe width="300" height="200" src="https://www.youtube.com/embed/469oNbcsF6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '+ message
    }
    if(message.match(/(KEKW( {0,})){1,}/gui)){
        kekw.volume = choosenvol;
        kekw.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message.match(/(palmas|[A-z]{0,}(Clap( {0,})){1,}|aplausos|applauses)/gui)){
        aplausos.volume = choosenvol;
        aplausos.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
        //<div style="position:relative; padding-bottom:calc(67.40% + 44px)"><iframe src="https://gfycat.com/ifr/FelineFlawlessBullfrog" frameborder="0" scrolling="no" width="100%" height="100%" style="position:absolute;top:0;left:0;" allowfullscreen></iframe></div> '+ message
    }
    if(message.match(/(k{3,}|([hk][khae] {0,1}){2,}|((ja)( ){0,1}){3,}|[l][ou]{1,}[l]{1,}[!]{0,})/gui)){
        hahaha.volume = choosenvol;
        hahaha.play();
        return '<a class="funny-sound">[🔊]</a><span class="bttv-message-container">  <img alt="LUL" class="chat-image chat-line__message--emote" src="https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/1.0 1x,https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/2.0 2x,https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/3.0 4x"> </span> ' + message
    }

    if(message.match(/(wh([a]){3,}t[?]{0,})/gui)){
        msca.play();
        return '<a class="funny-sound">[🔊]</a> <img style="display: block; user-select: none; margin: left;  width: 50%" src="https://c.tenor.com/PuHfGwOm4HYAAAAM/shocked-oh.gif"> ' + message
    }
    if(message.match(/(stockfish|(stock){0,1}peixe|en[gja]{1,2}ine)/gui)){
        //sem audio por enquanto
        return '<a class="funny-sound">[🔊]</a> <img alt="SabaPing" class="chat-image chat-line__message--emote" src="https://static-cdn.jtvnw.net/emoticons/v2/160402/default/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/160402/default/dark/1.0 1x,https://static-cdn.jtvnw.net/emoticons/v2/160402/default/dark/2.0 2x,https://static-cdn.jtvnw.net/emoticons/v2/160402/default/dark/3.0 4x"> ' + message
    }
    if(message.match(/mds/gui)){
        msca.play();
        return '<a class="funny-sound">[🔊]</a> <img style="display: block; user-select: none; margin: left;  width: 50%" src="https://c.tenor.com/AbXV2FwLRNgAAAAd/goodstory-legendary.gif"> ' + message
    }
    if(message.match(/bom dia/gui)){
        playRandomSound([bomdia1.src,bomdia2.src,bomdia3.src])
        return '<a class="funny-sound">[🔊]</a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="https://c.tenor.com/jdBU6FP2oi8AAAAi/catala-bon-dia.gif"> ' + message
    }
    if(message.match(/boa tarde/gui)){
        londres.play();
        return '<a class="funny-sound">[🔊]</a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="https://c.tenor.com/mlmBfvRo0FsAAAAd/salve-rapaziada-ninjas-in-pyjamas.gif"> ' + message
    }
    if(message.match(/boa noite/gui)){
        saudacoesnoturnas.play();
        return '<a class="funny-sound">[🔊]</a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="https://c.tenor.com/k1qPg8hPeVUAAAAd/boa-noite-good-night.gif"> ' + message
    }
    if(message.match(/(Salve( {0,})){1,}/gui)){
        saudacoesnoturnas.play();
        return '<a class="funny-sound">[🔊]</a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="https://c.tenor.com/P-DA6xO99H0AAAAj/unis-flyers.gif"> ' + message
    }
    if(message.match(/barrilda/gui)){
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 20%" src="'+ selectedServer + 'emotes/barrilda.gif"> ' + message
    }
    if(message.match(/Raff?a?(el)? ?(Pig)?(Leitão)?/gui)){
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 20%" src="'+ selectedServer + 'personalities/chess-personalities/RafPig.png"> ' + message
    }
    if(message.match(/([KG]ri[kg]or?[A-z]{0,}|Pringles)/gui)){
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 20%" src="'+ selectedServer + 'personalities/chess-personalities/Krikor.png"> ' + message
    }
    if(message.match(/((Ian )?Nepo([A-z]{0,}))/gui)){
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 20%" src="'+ selectedServer + 'personalities/chess-personalities/nepomniachi.png"> ' + message
    }
    if(message.match(/Magnus( Carlsen)?/gui)){
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 20%" src="'+ selectedServer + 'personalities/chess-personalities/Carlsen.png"> ' + message
    }
    if(message.match(/(Hikaru )?Naka(mura)?/gui)){
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 20%" src="'+ selectedServer + 'personalities/chess-personalities/Nakamura.png"> ' + message
    }
    if(message.match(/Ding( Liren)?/gui)){
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 20%" src="'+ selectedServer + 'personalities/chess-personalities/ding.png"> ' + message
    }
    if(message.match(/[éeh ]{0,}tetra/gui)){
        //tetra.play();
        playRandomSound([senna.src,tetra.src])
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 20%" src="https://c.tenor.com/kurkWs72xQkAAAAC/peepo-brazil.gif"> <div class="c-aUMP"><audio controls=""><source src="https://d3dabxdkbtmy0c.cloudfront.net/E%CC%81+tetra.mp3"><p>Seu navegador não suporta o elemento audio.</p></audio></div> ' + message
    }
    if(message.match(/senna/gui)){
        senna.play();
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 20%" src="https://c.tenor.com/kurkWs72xQkAAAAC/peepo-brazil.gif"> ' + message
    }
    if(message==="ashamed"){
        ashamed.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="bamos"){
        bamos.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message.match(/(damatelogo|mate logo)/gui)){
        damatelogo.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="florida"){
        florida.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="londres"){
        londres.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="ohcmon"){
        ohcmon.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message.match(/(quepeito|que peito)/gui)){
        quepeito.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message.match(/(topior|to pior|ficou pior)/gui)){
        topior.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="notazero" || message==="nota zero"){
        notazero.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="vouprocessarokrikor" || message==="processar o krikor" || message==="ovoprocessarokrikor"){
        vouprocessarokrikor.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="tchaudaminha" || message==="tchau daminha"){
        tchaudaminha.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message.match(/(tomelhor|to melhor)/gui)){
        tomelhor.play();
        return '<a class="funny-sound">[🔊]</a><img alt="krikNotBad" class="chat-image chat-line__message--emote" src="https://static-cdn.jtvnw.net/emoticons/v2/2116179/default/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/2116179/default/dark/1.0 1x,https://static-cdn.jtvnw.net/emoticons/v2/2116179/default/dark/2.0 2x,https://static-cdn.jtvnw.net/emoticons/v2/2116179/default/dark/3.0 4x"> Até que eu to melhor!'
    }
    if(message==="saudacoesnoturnas" || message==="saudações noturnas"){
        saudacoesnoturnas.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="roubeinessapartida" || message==="roubei nessa"){
        roubeinessapartida.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="ocarataroubando" || message==="ta roubando"){
        ocarataroubando.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="claramenteroubando" || message==="claramente roubando" || message==="cheating"){
        claramenteroubando.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message.match(/(naomagoarpessoas|([kc]aro)( ){0,}[kc]a[n]{1,}|francesa)/gui)){
        naomagoarpessoas.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="caracag4" || message==="caraca g4"){
        caracag4.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="mjc"){
        mjc.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="msca"){
        msca.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="grobianoraiz" || message==="grobiano raiz" || message==="g4 grobiano"){
        grobianoraiz.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="jogamaisrapido" || message==="joga mais rapido"){
        jogamaisrapido.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="acelerameufilho" || message==="acelera meu filho"){
        acelerameufilho.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }//l(a)?nce!
    if(message==="queroquecefacalance" || message==="quero que ce faça lance"){
        queroquecefacalance.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="andameufilho" || message==="anda meu filho"){
        andameufilho.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="toficandotenso" || message==="to ficando tenso"){
        toficandotenso.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message.match(/l([a]?)nce([!]?)/gui)){
        playRandomSound([jogamaisrapido.src,acelerameufilho.src,queroquecefacalance.src,andameufilho.src])
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="premovealoprado" || message==="premove aloprado"){
        quepremovealoprado.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message==="6klances" || message==="seismillances" || message==="seis mil lances" || message==="6000 mil lances"){
        seisklances.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message.match(/p[ei]ndura[A-z]{0,}/gui)){
        playRandomSound([pinduramds.src,pinduradesgraca.src,pinduramaldito.src])
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
    if(message.match(/((sadness)( ){0,}and( ){0,}sorrow|(final)( ){0,}triste|(ficou)( ){0,}pior|o que foi que eu fiz)/gui)){
        sadnessandsorrow.play();
        return '<a class="funny-sound">[🔊]</a> '+ message
    }
  //return '<a class="funny-sound">[🔊]</a>'+ message
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
forceStyle.insertAdjacentHTML('afterend', '.funny-sound { position: relative; display: inline-block; }  .funny-sound .funny-sound-text { visibility: hidden; width: 60px; background-color: black; color: #fff; text-align: center; border-radius: 6px; padding: 5px 0;  /* Position the tooltip */ position: absolute; z-index: 1; bottom: 100%; left: 100%; margin-left: -60px; } .funny-sound:hover .funny-sound-text { visibility: visible; }</style>');