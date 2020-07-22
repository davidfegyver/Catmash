const db = require('better-sqlite3')('images.db');

function createtable(p1, p2) {
    const sqlInit = `
    CREATE TABLE IF NOT EXISTS images (src varchar(200), rating int(5) DEFAULT '2200');
        `;
    db.exec(sqlInit);
}

createtable();


//TODO make a scraper
let urls = [
    'https://cdn2.thecatapi.com/images/MTUxOTE0Nw.jpg',
    'https://cdn2.thecatapi.com/images/MTY3ODE2MA.jpg',
    'https://cdn2.thecatapi.com/images/3k0.jpg',
    'https://cdn2.thecatapi.com/images/2v0.jpg',
    'https://cdn2.thecatapi.com/images/9r7.jpg',
    'https://cdn2.thecatapi.com/images/a1a.jpg',
    'https://cdn2.thecatapi.com/images/48f.gif',
    'https://cdn2.thecatapi.com/images/bfn.jpg',
    'https://cdn2.thecatapi.com/images/ait.gif',
    'https://cdn2.thecatapi.com/images/74r.jpg',
    'https://cdn2.thecatapi.com/images/ckh.jpg',
    'https://cdn2.thecatapi.com/images/MTkyOTQwNg.jpg',
    'https://cdn2.thecatapi.com/images/rPTbM2Tvt.png',
    'https://cdn2.thecatapi.com/images/MTkwNTgyNg.gif',
    'https://cdn2.thecatapi.com/images/d26.jpg',
    'https://cdn2.thecatapi.com/images/MTU1MTM1Mg.jpg',
    'https://cdn2.thecatapi.com/images/MjAxOTgyNQ.jpg',
    'https://cdn2.thecatapi.com/images/2dl.jpg',
    'https://cdn2.thecatapi.com/images/cp1.jpg',
    'https://cdn2.thecatapi.com/images/MTUxMjcxNw.jpg',
    'https://cdn2.thecatapi.com/images/b3a.jpg',
    'https://cdn2.thecatapi.com/images/a35.jpg',
    'https://cdn2.thecatapi.com/images/NwMUoJYmT.jpg',
    'https://cdn2.thecatapi.com/images/7CGV6WVXq.jpg',
    'https://cdn2.thecatapi.com/images/d3d.png',
    'https://cdn2.thecatapi.com/images/5ev.jpg',
    'https://cdn2.thecatapi.com/images/RVwCfKRvR.jpg',
    'https://cdn2.thecatapi.com/images/9fc.jpg',
    'https://cdn2.thecatapi.com/images/6ho.jpg',
    'https://cdn2.thecatapi.com/images/6oq.gif',
    'https://cdn2.thecatapi.com/images/ar6.jpg',
    'https://cdn2.thecatapi.com/images/bfd.jpg',
    'https://cdn2.thecatapi.com/images/dn3.jpg',
    'https://cdn2.thecatapi.com/images/794.png',
    'https://cdn2.thecatapi.com/images/Wrrjbll_V_640.jpg',
    'https://cdn2.thecatapi.com/images/MTk2NjE4Mw.jpg',
    'https://cdn2.thecatapi.com/images/4lk.gif',
    'https://cdn2.thecatapi.com/images/Sh_ce5dcl.png',
    'https://cdn2.thecatapi.com/images/dqh.jpg',
    'https://cdn2.thecatapi.com/images/9qm.png'
]

for (x in urls){
    db.prepare(`INSERT INTO images (src) VALUES(?);`).run(urls[x]);
}
