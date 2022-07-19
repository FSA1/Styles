//Eng: set laughter volume (1=100% 0.5=50%) ( will not work with laudness equalization)
//pt_BR: volume de risadas, não funciona se voce ativar a equalização de intensidade nas configuralções de som do sistema.
var laughsVol = 0.4;
var greetingVol = 1;
var miscVol = 1;

// Method for setting the RegEx used in filtering
function checkSettings() {
    chrome.storage.local.get({
        laughsAudio: true,
        greetingAudio: true,
        chatWords: true,
        channelGrigor: true,
        laughsVol: 0.4,
        greetingVol: 1,
        miscellaneousVol: 1
    },
        function (items) {
            var regx1;
            var regx2;
            var regx3;
            var regx4;
            if (items.laughsAudio) {
                regx1 = regexLaughs.source
            }
            if (items.greetingAudio) {
                regx2 = regexGreetings.source
            }
            if (items.chatWords) {
                regx3 = regexTerms.source
            }
            if (items.channelGrigor) {
                regx4 = regexGrigor.source
            }
            selectedRegEx = new RegExp(regx1 + "|" + regx2 + "|" + regx3 + "|" + regx4, 'gui');
            laughsVol = items.laughsVol;
            greetingVol = items.greetingVol;
            miscVol = items.miscellaneousVol;
        });
}

// Get the Twitch chat HTML element
const chat = document.getElementsByClassName('chat-scrollable-area__message-container');

// Regular expression for the laughs
var regexLaughs = new RegExp(/\b((KEKW([ ]{0,1})){1,}|k{3,}|([khae ]){6,}|((ja)( ){0,1}){3,}|palmas|app?laus[eo]s|[A-z]{0,}(Clap( {0,})){1,})\b|\b(omega)?[l][ou]{1,}[l]{1,}\b[!]{0,}/g, 'gui')

// Regular expression for the greetings
var regexGreetings = new RegExp(/^(bo[ma] (dia|tarde|noite))!?/g, 'gui')

// Regular expression for the  GMKrikor channel
var regexGrigor = new RegExp(/\b(Pringles|fot(o){0,1}(inh[oa]){0,1} de anime|n[aã]o ?magoar( as)? ?pessoas|jogar? [kc]aro[ -]?[kc]ann?|jogar? francesa|caraca ?g4|g4 ?grobiano|grobiano ?raiz|premove ?aloprado|(seis|[0-9]{1,})( ?k?| ?mil)? ?lances?|p[ei]ndura[A-z]{0,}|da ?mate ?logo|oh ?c'?mon|(eu ?)?to ?pior( ?j[aá])?|to ?melhor( ?j[aá])?|nota ?zero|[KG]ri[kg]or?[A-z]{0,}|roubei ?nessa ?(partida)?|(o ?cara ?)?t[aá] ?ro(u)?bando|claramente ?roubando|^(mds|mjc|msca)$)\b|\b(oh?)? ?cacilda\b!?|\bbamos\b!?|\bperdemo\b!?|\bSafado\b!?|lance!|(eu )?[voôu]{2,3} ?processar ?[oa]?|(a[ií])? ?é fl[oó]rida|\blondres\b!|\bsaudaç[õo]es ?noturnas?\b!?/g, 'gui')

// Regular expression for general terms and expressions
var regexTerms = new RegExp(/\b(MLADY|testevideo|modCheck|(isso)? ?n[ao] russia [A-zÀ-ú ,.]{0,} cadeia|Raff?a?(el)? ?Pig|Raff?ael Leitão|Salve.{0,2}|senna|Ding( Liren)?|Magnus( Carlsen)?|(Hikaru )?Naka(mura)?|(Ian )?Nepo([A-z]{0,})|Raff?a?(el)? ?Chess|wh([a]){2,}t[?]{0,}|o? ?qu(e){3,}[?]{0,}|en[gja]{1,2}ine|stockfish|(stock){0,1}peixe|barrilda|tchau ?daminha|(final)( ){0,}triste|(sadness)( ){0,}and( ){0,}sorrow|cheating)\b|\ba?cab([o]){2,}([hu ]){0,}\b!?|[eéh ]{0,}\bt[eé]{1,}tr[a]{1,}\b!?/g, 'gui')

// Enable the mutation observer to observe the child elements of the Twitch chat, the chat messages
var mutationConfig = { childList: true };

const srvgithub = 'https://github.com/FSA1/Styles/raw/main/testlab/';
const selectedServer = srvgithub;

//play audio without html audio tag. [IMPORTANT: urls are case sensitive eg: .MP3/.mp3]
var hahaha = new Audio(selectedServer + 'personalities/audio/SitcomLaughter.mp3');
var kekw = new Audio(selectedServer + 'personalities/audio/KEKWcut-40.mp3');
var aplausos = new Audio(selectedServer + 'personalities/audio/mixkit-audience-light-applause-354.mp3');
var tchaudaminha = new Audio(selectedServer + 'personalities/audio/RafPig/tchaudaminha.MP3');
var sadnessandsorrow = new Audio(selectedServer + 'personalities/audio/sadnessandsorrow.mp3');

var bamos = new Audio(selectedServer + 'personalities/audio/GMKrikor/bamos.MP3');
var damatelogo = new Audio(selectedServer + 'personalities/audio/GMKrikor/damatelogo.MP3');
var florida = new Audio(selectedServer + 'personalities/audio/GMKrikor/florida.MP3');
var londres = new Audio(selectedServer + 'personalities/audio/GMKrikor/londres.MP3');
var ohcmon = new Audio(selectedServer + 'personalities/audio/GMKrikor/ohcmon.MP3');
var topior = new Audio(selectedServer + 'personalities/audio/GMKrikor/topior.MP3');
var topior2 = new Audio(selectedServer + 'personalities/audio/GMKrikor/deixei-escapar-essa-vantagem.MP3');
var tomelhor = new Audio(selectedServer + 'personalities/audio/GMKrikor/tomelhor.MP3');
var notazero = new Audio(selectedServer + 'personalities/audio/GMKrikor/notazero.MP3');
var vouprocessarokrikor = new Audio(selectedServer + 'personalities/audio/GMKrikor/vouprocessarokrikor.MP3');
var bomdia1 = new Audio(selectedServer + 'personalities/audio/GMKrikor/krikor-bom-dia-pessoal01.MP3');
var bomdia2 = new Audio(selectedServer + 'personalities/audio/GMKrikor/krikor-bom-dia-pessoal02.MP3');
var bomdia3 = new Audio(selectedServer + 'personalities/audio/GMKrikor/krikor-bom-dia-pessoal03.MP3');
var cacilda1 = new Audio(selectedServer + 'personalities/audio/GMKrikor/cacilda01.MP3');
var cacilda2 = new Audio(selectedServer + 'personalities/audio/GMKrikor/cacilda02-deixa-eu-dar-o-mate.MP3');
var safado1 = new Audio(selectedServer + 'personalities/audio/GMKrikor/safado-neh.MP3');
var safado2 = new Audio(selectedServer + 'personalities/audio/GMKrikor/entao-esse-que-eh-o-safado.MP3');
var saudacoesnoturnas = new Audio(selectedServer + 'personalities/audio/GMKrikor/saudacoesnoturnas.MP3');
var claramenteroubando = new Audio(selectedServer + 'personalities/audio/GMKrikor/claramenteroubando.MP3');
var ocarataroubando = new Audio(selectedServer + 'personalities/audio/GMKrikor/ocarataroubando.MP3');
var engine = new Audio(selectedServer + 'personalities/audio/GMKrikor/Sempre-tem-um-engine-que-vai-estragar-sua-vida.MP3');
var roubeinessapartida = new Audio(selectedServer + 'personalities/audio/GMKrikor/roubeinessapartida.MP3');
var pinduramds = new Audio(selectedServer + 'personalities/audio/GMKrikor/pinduramds.MP3');
var pinduradesgraca = new Audio(selectedServer + 'personalities/audio/GMKrikor/pindura-desgra%C3%A7a.MP3');
var pinduramaldito = new Audio(selectedServer + 'personalities/audio/GMKrikor/pindura-maldito.MP3');
var andameufilho = new Audio(selectedServer + 'personalities/audio/GMKrikor/andameufilho.MP3');
var queroquecefacalance = new Audio(selectedServer + 'personalities/audio/GMKrikor/queroquecefacalance.MP3');
var acelerameufilho = new Audio(selectedServer + 'personalities/audio/GMKrikor/acelerameufilho.MP3');
var jogamaisrapido = new Audio(selectedServer + 'personalities/audio/GMKrikor/jogamaisrapido.MP3');
var seisklances = new Audio(selectedServer + 'personalities/audio/GMKrikor/6klances.MP3');
var quepremovealoprado = new Audio(selectedServer + 'personalities/audio/GMKrikor/quepremovealoprado.MP3');
var mjc = new Audio(selectedServer + 'personalities/audio/GMKrikor/mjc.MP3');
var msca = new Audio(selectedServer + 'personalities/audio/GMKrikor/msca.MP3');
var grobianoraiz = new Audio(selectedServer + 'personalities/audio/GMKrikor/grobianoraiz.MP3');
var caracag4 = new Audio(selectedServer + 'personalities/audio/GMKrikor/caracag4.MP3');
var naomagoarpessoas = new Audio(selectedServer + 'personalities/audio/GMKrikor/naomagoarpessoas.MP3');
var senna = new Audio(selectedServer + 'personalities/audio/senna-short.mp3');
var tetra = new Audio(selectedServer + 'personalities/audio/tetra.mp3');
var batidasnaporta = new Audio(selectedServer + 'personalities/audio/batida-de-porta-troll.mp3');

// Global variable to track the RegEx in use
var selectedRegEx;

//An array to house all of the URLs of your sounds
// play random sounds
function playRandomSound(options, vol) {

    //This line will select a random sound to play out of your provided URLS
    //var soundFile = sounds[Math.floor(Math.random()*sounds.length)];

    var rSound = new Audio(options[Math.floor(Math.random() * options.length)]);
    rSound.volume = vol;
    rSound.play();
}
function randomLink(links) {

    const rLink = links[Math.floor(Math.random() * links.length)];
    return rLink;
}

// Recursive function to check if the Twitch chat contains messages
function addObserverIfDesiredNodeAvailable() {
    if (chat.length == 0) {
        window.setTimeout(addObserverIfDesiredNodeAvailable, 500);
        return;
    }
    Array.from(chat).forEach(x => {
        observer.observe(x, mutationConfig)
    })
}

// Main function for replacing the Chess moves with the funny-sound HTML element
const callback = function (mutationsList, observer) {
    Array.from(mutationsList).forEach(mutation => {
        checkSettings();
        if (mutation.type === 'childList') {
            if (mutation.target.getElementsByClassName('text-fragment').length != 0) {
                var newestMessage = mutation.target.getElementsByClassName('text-fragment')[mutation.target.getElementsByClassName('text-fragment').length - 1].innerHTML
                if (!newestMessage.includes('<a class="funny-sound">')) {
                    if (selectedRegEx != null) {
                        mutation.target.getElementsByClassName('text-fragment')[mutation.target.getElementsByClassName('text-fragment').length - 1].innerHTML = newestMessage.replace(selectedRegEx, function (message) {
                            return soundmsg(message);
                        })
                    }
                }
            }
        }
    })
};

const observer = new MutationObserver(callback);


// The sound and text message that will replace the term matched
const soundmsg = (message) => {
    //maiúsculo usa o emote estático, padrão
    if (message.match(/(KEKW([ ]{0,1})){1,}/gu)) {
        playRandomSound([kekw.src], laughsVol)
        return '<a class="funny-sound">🔊</a> <img src="https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/1x" srcset="https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/2x 2x, https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/3x 4x" alt="KEKW" class="chat-line__message--emote bttv-emote-image">  &nbsp'
    }//minúsculo usa emote alternativo, animado
    if (message.match(/(kekw([ ]{0,1})){1,}/gu)) {
        playRandomSound([kekw.src], laughsVol)
        return '<a class="funny-sound">🔊</a> <img src="https://cdn.betterttv.net/emote/62b2898c65092c1291b963e1/1x" srcset="https://cdn.betterttv.net/emote/62b2898c65092c1291b963e1/2x 2x, https://cdn.betterttv.net/emote/62b2898c65092c1291b963e1/3x 4x" alt="KEKW" class="chat-line__message--emote bttv-emote-image">  &nbsp'
    }//kkkk, hahaha, hehehe, jajaja, LOL, lul (LUL maiúsculo não é capturado, infelizmente)
    if (message.match(/(k{3,}|([khae ]){6,}|((ja) ?){3,}|\b(omega)?[l][ou]{1,}[l]{1,}\b[!]{0,})/gui)) {
        playRandomSound([hahaha.src], laughsVol)
        return '<a class="funny-sound">🔊</a><span class="bttv-message-container">  <img alt="LUL" class="chat-image chat-line__message--emote" src="https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/1.0 1x,https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/2.0 2x,https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/3.0 4x"> </span> '
    }//palmas PT e En
    if (message.match(/(palmas|[A-z]{0,}(Clap( {0,})){1,}|aplausos|applauses)/gui)) {
        playRandomSound([aplausos.src], laughsVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Bom dia (imagem provisória)
    if (message.match(/\bbom dia\b!?/gui)) {
        playRandomSound([bomdia1.src, bomdia2.src, bomdia3.src], greetingVol)
        return '<a class="funny-sound">🔊</a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="https://c.tenor.com/jdBU6FP2oi8AAAAi/catala-bon-dia.gif"> ' + message
    }//Boa tarde
    if (message.match(/\bboa tarde\b!?/gui)) {
        //som em breve
        return '<a class="funny-sound">🔊</a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="https://c.tenor.com/mlmBfvRo0FsAAAAd/salve-rapaziada-ninjas-in-pyjamas.gif"> ' + message
    }//Boa noite, Krikor 'Saudações noturnas' (Krikor propôs que se saudasse como no emote MLADY)
    if (message.match(/\b(boa noite|saudaç[õo]es ?noturnas?)\b!?/gui)) {
        playRandomSound([saudacoesnoturnas.src], greetingVol)
        const gif1 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'emotes/mlady.gif"';
        const gif2 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'emotes/mlady2.gif"';
        const gif3 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'emotes/mlady3.gif"';
        const gif4 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'emotes/mlady4.gif"';

        return '<a class="funny-sound"></a> ' + randomLink([gif1, gif2, gif3, gif4]) + '"> ' + message
    }//Salve!
    if (message.match(/Salve.{0,2}/gui)) {
        //som em breve
        return '<a class="funny-sound">🔊</a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="https://c.tenor.com/P-DA6xO99H0AAAAj/unis-flyers.gif"> '
    }//fotinho de anime
    if (message.match(/fot(o){0,1}(inh[oa]){0,1} de anime/gui)) {
        playRandomSound([kekw.src], laughsVol)
        return '<a class="funny-sound">🔊</a> <img src="https://cdn.betterttv.net/emote/618664d51f8ff7628e6cad93/1x" srcset="https://cdn.betterttv.net/emote/618664d51f8ff7628e6cad93/2x 2x, https://cdn.betterttv.net/emote/618664d51f8ff7628e6cad93/3x 4x" alt="KEKW" class="chat-line__message--emote bttv-emote-image">  &nbsp' + message
    }//MLADY, emote de cumprimento
    if (message.match(/mlady/gui)) {
        const gif1 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'emotes/mlady.gif"';
        const gif2 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'emotes/mlady2.gif"';
        const gif3 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'emotes/mlady3.gif"';
        const gif4 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'emotes/mlady4.gif"';

        return '<a class="funny-sound"></a> ' + randomLink([gif1, gif2, gif3, gif4]) + '"> ' + message
    }//teste de video
    if (message.match(/testevideo/gui)) {
        return '<a class="funny-sound">🔊</a> <iframe width="300" height="200" src="https://www.youtube.com/embed/-RVC1Ld7ydo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  &nbsp' + message
    }//whaaaat?, o queee?
    if (message.match(/wh([a]){2,}t[?]{0,}|o? ?qu(e){3,}[?]{0,}/gui)) {
        playRandomSound([msca.src], miscVol)
        return '<a class="funny-sound">🔊</a> <img style="display: block; user-select: none; margin: left;  width: 50%" src="https://c.tenor.com/PuHfGwOm4HYAAAAM/shocked-oh.gif"> ' + message
    }//emote: stockfish, stockpeixe, engine, enjaine
    if (message.match(/(stockfish|(stock){0,1}peixe|en[gja]{1,2}ine)/gui)) {
        //sem audio por enquanto
        return '<a class="funny-sound">🔊</a> <img alt="SabaPing" class="chat-image chat-line__message--emote" src="https://static-cdn.jtvnw.net/emoticons/v2/160402/default/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/160402/default/dark/1.0 1x,https://static-cdn.jtvnw.net/emoticons/v2/160402/default/dark/2.0 2x,https://static-cdn.jtvnw.net/emoticons/v2/160402/default/dark/3.0 4x"> ' + message
    }//siglas para "meu Deus do ceu", "meu Jesus/Santo Cristo amado", 
    if (message.match(/^(mds|mjc|msca)$/gui)) {
        playRandomSound([mjc.src, msca.src], miscVol)
        return '<a class="funny-sound">🔊</a> <img style="display: block; user-select: none; margin: left;  width: 50%" src="https://c.tenor.com/AbXV2FwLRNgAAAAd/goodstory-legendary.gif"> ' + message
    }//Safado!
    if (message.match(/\bSafado\b!?/gui)) {
        playRandomSound([safado1.src, safado2.src], miscVol)
        return '<a class="funny-sound">🔊</a>&nbsp ' + message
    }//Oh Cacilda!
    if (message.match(/\b(oh?)? ?cacilda\b!?/gui)) {
        playRandomSound([cacilda1.src, cacilda2.src], miscVol)
        return '<a class="funny-sound">🔊</a>&nbsp ' + message
    }//barrilda
    if (message.match(/barrilda/gui)) {
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 20%" src="' + selectedServer + 'emotes/barrilda.gif"> ' + message
    }//Rafael Leitão, RafPig, Raffa Pig
    if (message.match(/Raff?a?(el)? ?Pig|Raff?ael Leitão/gui)) {
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/RafPig.png"> ' + message
    }//Raffael Chess
    if (message.match(/Raff?a?(el)? ?Chess/gui)) {
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/RaffaelChess.png"> ' + message
    }//Ian Nepomniachi
    if (message.match(/((Ian )?Nepo([A-z]{0,}))/gui)) {
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/nepomniachi.png"> ' + message
    }//Magnus Carlsen
    if (message.match(/Magnus( Carlsen)?/gui)) {

        const img1 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/Carlsen.png"';
        const img2 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/Carlsen2.png"';
        const img3 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/Carlsen3.png"';
        const img4 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/Carlsen4.png"';

        return '<a class="funny-sound"></a> ' + randomLink([img1, img2, img3, img4]) + '"> ' + message
    }//Hikaru Nakamura
    if (message.match(/(Hikaru )?Naka(mura)?/gui)) {
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/Nakamura.png"> ' + message
    }//Ding Liren
    if (message.match(/Ding( Liren)?/gui)) {
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/ding.png"> ' + message
    }//Acabou!, é tetra!
    if (message.match(/\ba?cab([o]){2,}([hu ]){0,}\b!?|[eéh ]{0,}\bt[eé]{1,}tr[a]{1,}\b!?/gui)) {
        playRandomSound([tetra.src], miscVol)
        const gif1 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="https://c.tenor.com/YAuoFbHA7SAAAAAd/tetra-futebol.gif';
        const gif2 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="https://thumbs.gfycat.com/SolidEasygoingAlaskajingle-size_restricted.gif';
        const gif3 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="https://c.tenor.com/1J-n2oBWMa8AAAAi/peepo-brazil.gif';
        const gif4 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="https://c.tenor.com/53mmUaqb1b0AAAAC/copa-torcedor.gif';
        const gif5 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="https://pa1.narvii.com/7243/fe3792bdc48b91754f8678c7fc78f11502e804e9r1-480-270_hq.gif';

        return '<a class="funny-sound"></a> ' + randomLink([gif1, gif2, gif3, gif4, gif5]) + '"> 🔊&nbsp' + message
    }//Musica da vitória
    if (message.match(/senna/gui)) {
        playRandomSound([senna.src], miscVol)
        return '<a class="funny-sound"></a> <img style="display: block; user-select: none; margin: left;  width: 20%" src="https://c.tenor.com/1J-n2oBWMa8AAAAi/peepo-brazil.gif"> 🔊&nbsp' + message
    }//Alexandra Botez 'vamos!' em espanhol
    if (message.match(/\bbamos\b!/gui)) {
        playRandomSound([bamos.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Rafael Leite 'Dá mate logo...'
    if (message.match(/(da ?mate ?logo)/gui)) {
        playRandomSound([damatelogo.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor 'Aí é flórida!'
    if (message.match(/(a[ií])? ?é fl[oó]rida/gui)) {
        playRandomSound([florida.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor 'Boa tarde[...] menos pra você que joga londres
    if (message.match(/londres!/gui)) {
        playRandomSound([londres.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Nakamura Oh c'mon!
    if (message.match(/oh ?c'?mon/gui)) {
        playRandomSound([ohcmon.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor 'eu to pior já'
    if (message.match(/(eu ?)?to ?pior( ?j[aá])?/gui)) {
        playRandomSound([topior.src, topior2.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor 'Muito bom, nota zero'
    if (message.match(/nota ?zero/gui)) {
        playRandomSound([notazero.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//RafPig 'Eu vou processar o Krikor'
    if (message.match(/(eu )?[voôu]{2,3} ?processar ?[oa]?/gui)) {
        playRandomSound([vouprocessarokrikor.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor, Grikor, Grigor, Pringles
    if (message.match(/([KG]ri[kg]or?[A-z]{0,}|Pringles)/gui)) {

        const img1 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/Krikor.png"';
        const img2 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/Krikor2.png"';
        const img3 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/Krikor3.png"';
        const img4 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/Krikor4.png"';
        const img5 = '<img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'personalities/chess-personalities/Krikor5.png"';

        return '<a class="funny-sound"></a> ' + randomLink([img1, img2, img3, img4, img5]) + '"> &nbsp' + message
    }//RafPig 'tchau daminha!'
    if (message.match(/tchau ?daminha/gui)) {
        playRandomSound([tchaudaminha.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//emote modCheck (para o caso do canal assistido não ter)
    if (message.match(/(modCheck)/gui)) {
        //não tem som planejado para este emote
        return '<a class="funny-sound">🔊</a><img src="https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/1x" srcset="https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/2x 2x, https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/3x 4x" alt="modCheck" class="chat-line__message--emote bttv-emote-image"> &nbsp'
    }//Krikor 'Até que eu tô melhor..'
    if (message.match(/to ?melhor( ?j[aá])?/gui)) {
        playRandomSound([tomelhor.src], miscVol)
        return '<a class="funny-sound">🔊</a><img alt="krikNotBad" class="chat-image chat-line__message--emote" src="https://static-cdn.jtvnw.net/emoticons/v2/2116179/default/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/2116179/default/dark/1.0 1x,https://static-cdn.jtvnw.net/emoticons/v2/2116179/default/dark/2.0 2x,https://static-cdn.jtvnw.net/emoticons/v2/2116179/default/dark/3.0 4x">&nbsp' + message
    }//Krikor 'Roubei nessa partida'
    if (message.match(/roubei ?nessa ?(partida)?/gui)) {
        playRandomSound([roubeinessapartida.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor 'O cara ta roubando', 'Claramente roubando', 'Cheating'
    if (message.match(/(o ?cara ?)?t[aá] ?ro(u)?bando|claramente ?roubando|cheating/gui)) {
        playRandomSound([ocarataroubando.src, claramenteroubando.src, engine.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Na rússia isso dá cadeia
    if (message.match(/(isso)? ?n[ao] russia [A-zÀ-ú ,.]{0,} cadeia/gui)) {
        playRandomSound([batidasnaporta.src], miscVol)
        return '<a class="funny-sound">🔊</a> <img style="display: block; user-select: none; margin: left;  width: 30%" src="' + selectedServer + 'emotes/narussia.gif"> &nbsp' + message
    }//Krikor sobre defesa francesa e Caro-Kann 'Não magoar as pessoas', 'jogar francesa', 'jogar Caro-Kann'
    if (message.match(/n[aã]o ?magoar( as)? ?pessoas|jogar? [kc]aro[ -]?[kc]ann?|jogar? francesa/gui)) {
        playRandomSound([naomagoarpessoas.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor 'Caraca G4'
    if (message.match(/caraca ?g4/gui)) {
        caracag4.play();
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor 'G4 grobiano', 'Grobiano raiz'
    if (message.match(/grobiano ?raiz|g4 ?grobiano/gui)) {
        playRandomSound([grobianoraiz.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor 'Lance!'
    if (message.match(/lance!/gui)) {
        playRandomSound([jogamaisrapido.src, acelerameufilho.src, queroquecefacalance.src, andameufilho.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor 'premove aloprado'
    if (message.match(/premove ?aloprado/gui)) {
        playRandomSound([quepremovealoprado.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor 'seis mil lances'
    if (message.match(/(seis|[0-9]{1,})( ?k?| ?mil)? ?lances?/gui)) {
        playRandomSound([seisklances.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Krikor 'pindura meu Deus', 'pindura desgraça', 'pindura maldito'
    if (message.match(/p[ei]ndura[A-z]{0,}/gui)) {
        playRandomSound([pinduramds.src, pinduradesgraca.src, pinduramaldito.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }//Musica triste: 'Sadness and Sorrow', 'final triste', 'perdemo'
    if (message.match(/((sadness)( ){0,}and( ){0,}sorrow|(final)( ){0,}triste|perdemo!?)/gui)) {
        playRandomSound([sadnessandsorrow.src], miscVol)
        return '<a class="funny-sound">🔊</a> ' + message
    }

}

addObserverIfDesiredNodeAvailable();
