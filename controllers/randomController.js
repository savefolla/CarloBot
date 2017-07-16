'use strict';

const Telegram = require('telegram-node-bot');
const db = require('../db/db');

class RandomController extends Telegram.TelegramBaseController {
	handle($) {
		var n = Math.floor(Math.random()*db.length);
		$.sendPhoto(Telegram.InputFile.byFilePath(db[n].link));
		// $.sendMessage('Messaggio casuale'); // riscrivere in modo che mandi un messaggio casuale
	}
}

module.exports = RandomController;