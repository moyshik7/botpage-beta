var commandList = [
    {
        name: "anime",
        description: "Search for an anime",
        allias: ["animes", "search"],
    }, {
        name: "manga",
        description: "Search for an manga / japanese comics",
        allias: ["comics", "comic", "manhwa", "manhua", "search", "doujin"],
    },{
        name: "waifu",
        description: "Pick your waifu",
        allias: ["rem", "zero two", "nezuko"],
    },{
        name: "animeme",
        description: "Anime memes",
        allias: ["goodanimemes", "animemes", "goodanimeme"],
    },{
        name: "goodanimeme",
        description: "Animemes with a hint from the other sides (Yes I'm refering to hentai)",
        allias: ["goodanimemes", "animemes", "animeme"],
    },{
        name: "wholesomehentai",
        description: "Hentais you'll end up laughing so much that you'll forget to fap",
        allias: ["whh"],
    },{
        name: "catgirl",
        description: "nya ~~ Get a cute catgirl image",
        allias: ["catgirls", "neko"],
    },{
        name: "foxgirl",
        description: "Get a cute foxgirl Image",
        allias: ["foxgirls"],
    },{
        name: "watchlist",
        description: "Your anime watchlist",
        allias: ["list"],
    },{
        name: "meme",
        description: "Get some cool memes",
        allias: ["memes", "goodmemes"],
    },{
        name: "dank",
        description: "Get some cool dank memes",
        allias: ["dankmemes", "dark","darkmemes", "darkhumour", "darkhumor"],
    },{
        name: "prequel",
        description: "Posts from the r/prequel subreddit",
        allias: ["memes"],
    },{
        name: "baka",
        description: "They're just idiots",
        allias: ["idiot", "emotions"],
    },{
        name: "cuddle",
        description: "Cuddle Someone; Get a cuddling GIF",
        allias: ["cuddling", "cuddles", "emotions"],
    },{
        name: "feed",
        description: "Feed Someone; Get a feeding GIF",
        allias: ["feeds", "feeding", "emotions"],
    },{
        name: "hug",
        description: "Hug Someone; Get a hugging GIF",
        allias: ["hugging", "emotions"],
    },{
        name: "kiss",
        description: "Kiss Someone; Get a kissing GIF",
        allias: ["kissing", "fucking", "emotions"],
    },{
        name: "pat",
        description: "Give someone headpats; Get a patting GIF",
        allias: ["headpat", "patting", "emotions"],
    },{
        name: "poke",
        description: "Poke Someone; Get a poking GIF",
        allias: ["poking", "emotions"],
    },{
        name: "smug",
        description: "Get a smug GIF",
        allias: ["emotions"],
    },{
        name: "tickle",
        description: "Tickle Someone; Get a tickling GIF",
        allias: ["ticklish", "emotions"],
    }, {
        name: "anal",
        description: "(nsfw) Taking it in the back doesn't count right ?",
        allias: [],
    },{
        name: "blowjob",
        description: "(nsfw) Take it in mouth",
        allias: [],
    },{
        name: "boobs",
        description: "(nsfw) Lumps on a woman's chest that tend to have a staring problem. Larger one's tend to stare more than others.",
        allias: ["tits"],
    },{
        name: "butt",
        description: "(nsfw) Just two lumps of watermelons",
        allias: ["asses", "butts"],
    },{
        name: "hardcore",
        description: "(nsfw) ",
        allias: [],
    },{
        name: "milf",
        description: "(nsfw) Hot moms in your area with an incurable STD",
        allias: [],
    },{
        name: "mom",
        description: "(nsfw) Joe Mama",
        allias: [],
    },{
        name: "pussy",
        description: "(nsfw) Something warm, wet, snuggly and sometimes furry that you can eat and still fuck it afterwords. The only thing I know that can bleed for seven days and not die.",
        allias: [],
    },{
        name: "thicc",
        description: "(nsfw) Damn she got a phat ass",
        allias: [],
    },{
        name: "bondage",
        description: "(nsfw) You into this shit ? *questions sanity",
        allias: ["bdsm"],
    },{
        name: "vanila",
        description: "(nsfw) She's so sweet",
        allias: [],
    },{
        name: "cumslut",
        description: "(nsfw) She just can't get enough jism",
        allias: ["cumshot"],
    },{
        name: "feet",
        description: "(nsfw) What lots of people like to suck, lick, and just enjoy in their face",
        allias: ["legs"],
    },{
        name: "femdom",
        description: "(nsfw) Mommy !",
        allias: [],
    },{
        name: "glasses",
        description: "(nsfw) She's trying to read your face when fucking",
        allias: [],
    },{
        name: "heels",
        description: "(nsfw) You into this ?",
        allias: [],
    },{
        name: "longhair",
        description: "(nsfw) Something to grab when pounding",
        allias: ["longhairs"],
    },{
        name: "oil",
        description: "(nsfw) Damn she's so slippery",
        allias: ["slimy", "slime", "oiled", "slippery"],
    },{
        name: "orgasm",
        description: "(nsfw) Never had one in my entire 19 y/o life",
        allias: [],
    },{
        name: "pawg",
        description: "(nsfw) Phat Ass White Girl with a nice round onion butt that when you screw her doggy style, it gives the right amount of cushioning",
        allias: [],
    },{
        name: "redhead",
        description: "(nsfw) Are those dyed ?",
        allias: ["dyed"],
    },{
        name: "shorthair",
        description: "(nsfw) Why do you look more like a man than my boyfriend does ?",
        allias: ["short"],
    },{
        name: "spank",
        description: "(nsfw) HARDER DADDY !!!",
        allias: ["hurt"],
    },{
        name: "tan",
        description: "(nsfw) Those tanlines seems lickable",
        allias: ["tanline", "sunburn"],
    },{
        name: "tiny",
        description: "(nsfw) The's smol(In size not age you psyco) but who cares ?",
        allias: ["small", "smol"],
    },{
        name: "trap",
        description: "(nsfw) A boy who looks like girls, dresses like a girl, talks like girls, fucks like girls",
        allias: ["femboi", "femboy"]
    },{
        name: "hentai",
        description: "(nsfw) I see you're a man of culture as well",
        allias: ["cultured"]
    },{
        name: "tentacles",
        description: "(nsfw) Who dosen't like tentacles",
        allias: ["tentai", "tentacle"]
    },{
        name: "yuri",
        description: "(nsfw) Girl x Girl",
        allias: ["lesbian", "gay", "gae"]
    },{
        name: "yaoi",
        description: "(nsfw) Boy x Boy",
        allias: ["gay", "gae"]
    },{
        name: "oppai",
        description: "(nsfw) Boobs in Anime",
        allias: ["boobs", "tits"]
    },{
        name: "holo",
        description: "(nsfw) Get an holo image / GIF",
        allias: []
    },{
        name: "futa",
        description: "(nsfw) Damn you got a vagina and a dick altogether ? Man I'm jealous",
        allias: ["futanari", "femgirl", "bisexual"]
    },{
        name: "neko",
        description: "(nsfw) Get a lewn neko image / gif",
        allias: ["catgirl"]
    },{
        name: "asian",
        description: "(nsfw) Asian porn",
        allias: ["asia", "chinese", "china"]
    },{
        name: "black",
        description: "(nsfw) Ebony girls",
        allias: ["nigga", "nigger", "ebony","blm"]
    },{
        name: "blonde",
        description: "(nsfw)  Blonde girls",
        allias: ["white", "golden"]
    },{
        name: "filipino",
        description: "(nsfw) Filipino porn",
        allias: ["filipinos", "philippines"]
    },{
        name: "indian",
        description: "(nsfw) Indian Girls",
        allias: ["india"]
    },{
        name: "japanese",
        description: "(nsfw) Japanese girls",
        allias: ["jav", "jap"]
    },{
        name: "korean",
        description: "(nsfw) Korean girls",
        allias: ["korea", "kpop"]
    },{
        name: "celebrity",
        description: "(nsfw) Celebrity porn",
        allias: ["celebrities", "famous"]
    },{
        name: "erotic",
        description: "(nsfw) Erotic images",
        allias: ["hot"]
    },{
        name: "lewd",
        description: "(nsfw) Lewd images",
        allias: ["hot"]
    },{
        name: "christmas",
        description: "(nsfw) Christmas themed porns",
        allias: ["xmas", "chrismas"]
    },{
        name: "halloween",
        description: "(nsfw) Halloween themed porns",
        allias: ["hal", "helloween"]
    },
];

console.log(commandList.length, " Commands documented")
function search() {
    var input = document.getElementById("searchtext");
    var term = input.value.toLowerCase();
    var result = [];
    for (var a = 0; a < commandList.length; a++) {
        let command = commandList[a];
        if (
            command.name.toLowerCase().indexOf(term) > -1 ||
            //(command.description.toLowerCase().indexOf(term) > -1) ||
            ArraySearch(command.allias, term)
        ) {
            result.push(command);
        }
    }
    if (!term.trim().length) {
        result = [];
    }
    return ShowResult(result);
}
function ShowResult(ResultArray) {
    var list = document.getElementById("searchlist");
    list.innerHTML = "";
    if (ResultArray.length < 1) {
        return false;
    }
    ResultArray.forEach((element) => {
        var li = document.createElement("li");
        li.innerHTML = `<a href="/commands/${element.name.toLowerCase()}">${
            element.name
        }</a>`;
        list.appendChild(li);
    });
    return false;
}

function ArraySearch(arr, term){
    if(!arr){ return false }
    if(!term){ return false }
    if(!arr.length){ return false }
    let res = false
    for(let a = 0; a < arr.length; a++){
        if(arr[a].toLowerCase().indexOf(term.toLowerCase()) > -1){
            res = true
        }
    }
    return res;
}
