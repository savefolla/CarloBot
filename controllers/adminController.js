'use strict';

const Telegram = require('telegram-node-bot');
const db = require('../db/db.json');
const fs = require('fs');

class AdminController extends Telegram.TelegramBaseController {
	handle($) {
		if($.message.photo) {
			db.push({
				'type': 'photo',
				'link': $.message.photo[$.message.photo.length-1].fileId
			});
			fs.writeFile('db/db.json', JSON.stringify(db), function(err) {
				if(err) {
						return console.log(err);
				}
				console.log("aggiunta foto " + $.message.photo[$.message.photo.length-1].fileId);
			}); 			
		}
		if($.message.voice) {
			db.push({
				'type': 'voice',
				'link': $.message.voice.fileId
			});
			fs.writeFile('db/db.json', JSON.stringify(db), function(err) {
				if(err) {
						return console.log(err);
				}
				console.log("aggiunta voice note " + $.message.voice.fileId);
			}); 			
		}
		if($.message.video) {
			db.push({
				'type': 'video',
				'link': $.message.video.fileId
			});
			fs.writeFile('db/db.json', JSON.stringify(db), function(err) {
				if(err) {
						return console.log(err);
				}
				console.log("aggiunto video " + $.message.video.fileId);
			}); 			
		}
		/* se il messaggio e foto, voiceNote o video aggiungi l'id al db */
	}
}

module.exports = AdminController;