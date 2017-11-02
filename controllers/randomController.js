'use strict';

const Telegram = require('telegram-node-bot');
const db = require('../db/db');

class RandomController extends Telegram.TelegramBaseController {
	randomHandler($) {
		var n = Math.floor(Math.random()*db.length);
		if(db[n].type === 'photo') {
			$.sendPhoto(Telegram.InputFile.byId(db[n].link));
		};
		if(db[n].type === 'voice') {
			$.sendVoice(Telegram.InputFile.byId(db[n].link));
		};
		if(db[n].type === 'video') {
			$.sendVideo(Telegram.InputFile.byId(db[n].link));
		};
		if(db[n].type === 'text') {
			$.sendMessage(db[n].text);
		};
		if(db[n].type === 'sticker') {
			$.sendSticker(db[n].link);
		}
	}
	audioHandler($) {
		var func = function($) {
			var n = Math.floor(Math.random()*db.length);
			if(db[n].type === 'voice') {
				$.sendVoice(Telegram.InputFile.byId(db[n].link));
			} else if(db[n].type === 'audio'){
					$.sendAudio(Telegram.InputFile.byId(db[n].link));
			} else {
						func($);
			}		
		}
		func($);		
	}
	videoHandler($) {
		var func = function($) {
			var n = Math.floor(Math.random()*db.length);
			if(db[n].type === 'video') {
				$.sendVideo(Telegram.InputFile.byId(db[n].link));
			} else {
				func($);
			}		
		}
		func($);
	}
	fotoHandler($) {
		var func = function($) {
			var n = Math.floor(Math.random()*db.length);
			if(db[n].type === 'photo') {
				$.sendPhoto(Telegram.InputFile.byId(db[n].link));
			} else {
				func($);
			}		
		}
		func($);
	}
	testoHandler($) {
		var func = function($) {
			var n = Math.floor(Math.random()*db.length);
			if(db[n].type === 'text') {
				$.sendMessage(db[n].text);
			} else {
				func($);
			}		
		}
		func($);
	}
	stickerHandler($) {
		var func = function($) {
			var n = Math.floor(Math.random()*db.length);
			if(db[n].type === 'sticker') {
				$.sendSticker(db[n].link);
			} else {
				func($);
			}		
		}
		func($);
	}					
	latestHandler($) {
		var howMany = 10;
		var n = Math.floor(Math.random()*(db.length-(db.length-howMany)+1))+(db.length-howMany)-1;
		console.log("invio "+n+"/"+db.length);
		if(db[n].type === 'photo') {
			$.sendPhoto(Telegram.InputFile.byId(db[n].link));
		};
		if(db[n].type === 'voice') {
			$.sendVoice(Telegram.InputFile.byId(db[n].link));
		};
		if(db[n].type === 'video') {
			$.sendVideo(Telegram.InputFile.byId(db[n].link));
		};
		if(db[n].type === 'audio') {
			$.sendAudio(Telegram.InputFile.byId(db[n].link));
		};
		if(db[n].type === 'text') {
			$.sendMessage(db[n].text);
		};
		if(db[n].type === 'sticker') {
			$.sendSticker(db[n].link);
		}
	}
	get routes() {
		return {
			'random': 'randomHandler',
			'audio': 'audioHandler',
			'video': 'videoHandler',
			'foto': 'fotoHandler',
			'testo': 'testoHandler',
			'latest': 'latestHandler',
			'sticker': 'stickerHandler'
		};
	}
}

module.exports = RandomController;
