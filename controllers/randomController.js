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
	}
	audioHandler($) {
		var func = function($) {
			var n = Math.floor(Math.random()*db.length);
			if(db[n].type === 'voice') {
				$.sendVoice(Telegram.InputFile.byId(db[n].link));
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
	latestHandler($) {
		var howMany = 20;
		var n = Math.floor(Math.random()*howMany)+db.length-howMany;
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
	}
	get routes() {
		return {
			'random': 'randomHandler',
			'audio': 'audioHandler',
			'video': 'videoHandler',
			'foto': 'fotoHandler',
			'testo': 'testoHandler',
			'latest': 'latestHandler'
		};
	}
}

module.exports = RandomController;