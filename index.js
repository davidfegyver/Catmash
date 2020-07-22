const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');
const db = require('better-sqlite3')('images.db');
const elorating = require('elo-rating');

let returned1;
let returned2;


let emojis = ["1️⃣","2️⃣"]




client.on("message", message => {

    if (!message.content.startsWith(settings.prefix)) return;  
  
    if (message.content == "/catmash") {
        returned1 = newplayers();
        returned2 = newplayers();
    
        message.channel.send(returned1.src+' 1️⃣  VAGY  2️⃣'+returned2.src)
        .then((message) => {
            for(i in emojis) message.react(emojis[i]);
        
        
        });
    }

    if(message.content == "/top"){
        for(i in toplist()) message.channel.send(toplist()[i].src + ' Macska, Pont: ' + toplist()[i].rating)

    }


});


client.on("messageReactionAdd", (reaction,user)=>{

        if (reaction.emoji.name == emojis[0]) {
            change(returned1.rowid,true,returned2.rowid);
            return;
        }

        if (reaction.emoji.name == emojis[1]){
            change(returned1.rowid,false,returned2.rowid);
            return;
        }





});








client.login(settings.token);




//returns a random new cat
function newplayers() {
    let sql = db.prepare(`SELECT rowid,* from images ORDER by RANDOM();`);
    let p1 = sql.get();
    return p1;
}

//              first cat id,
//                 is first won?
//                      second cat id
function change(id1,win,id2) {

    let first = db.prepare(`SELECT * from images where rowid = ?`).get(id1);
    let rating1 = first.rating;

    let second = db.prepare(`SELECT * from images where rowid = ?`).get(id2);
    let rating2 = second.rating;

    let elo = elorating.calculate(rating1,rating2,win);
    let newrating1 = elo.playerRating;
    let newrating2 = elo.opponentRating;


    sql = db.prepare("UPDATE images SET rating = ? WHERE rowid = ?;");
    sql.run(newrating1,id1);
    sql.run(newrating2,id2);



}

//returns the top 10 rated cat
function toplist() {

    let sql = db.prepare(`SELECT * from images ORDER by rating DESC LIMIT 3;`);
    let p1 = sql.all();
    return p1;
}

