'use strict'

const db = require('../db/db');
const fs = require('fs');

// scorro ciascun elemento
// per ciascuno controllo che non ci sia un successivo uguale
// se c'è lo secco

for(var i=0;i<db.length;++i){
  for(var j=i+1;j<db.length;++j){
    if(db[i].type == db[j].type && db[i].text == db[j].text && db[i].link == db[j].link){
      db.splice(j,1);
    }
  }
}

fs.writeFile('db/db.json', JSON.stringify(db), function(err) {
  if(err) {
      return console.log(err);
  }
}); 	