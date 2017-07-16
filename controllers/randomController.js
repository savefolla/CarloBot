'use strict';

const Telegram = require('telegram-node-bot');
const db = require('../db/db');

class RandomController extends Telegram.TelegramBaseController {
	handle($) {
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
	}
}

module.exports = RandomController;