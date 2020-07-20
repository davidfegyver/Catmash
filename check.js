const db = require('better-sqlite3')('images.db');


//not needed just for testing purposes
/*
let sql = db.prepare(`SELECT rowid,* from images;`);

console.log(sql.all());
*/

let sql = db.prepare(`SELECT * from images ORDER by rating DESC LIMIT 5;`);


console.log(sql.all());
