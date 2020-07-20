const db = require('better-sqlite3')('images.db');
const elorating = require('elo-rating');

let returned1;
let returned2;


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

    let sql = db.prepare(`SELECT * from images ORDER by rating DESC LIMIT 10;`);
    let p1 = sql.all();
    return p1;
}


//just a little proof of concept
while (true) {
    returned1 = newplayers();
    returned2 = newplayers();


//                         random true or false    
    change(returned1.rowid,Math.random() > 0.5,returned2.rowid);
    //exit with ctrl-c
}


// go to check.js