'use strict';

const Telegram = require('telegram-node-bot');

class SvegliaController extends Telegram.TelegramBaseController {
	svegliaHandler($){
		$.sendMessage('prima mi risvegliate e poi rompete il cazzo');
	}
	dormiHandler($){
		$.sendMessage('vado a letto notte');
	}
	get routes() {
		return {
			'sveglia': 'svegliaHandler',
			'dormi': 'dormiHandler',
		};
	}
}

module.exports = SvegliaController;
