'use strict';

const Telegram = require('telegram-node-bot');

class GambeController extends Telegram.TelegramBaseController {
	spezzoHandler($){
		$.sendMessage('spezzo le gambe');
	}
	leHandler($){
		$.sendMessage('le gambe');
	}
	gambeHandler($){
		$.sendMessage('gambe');
	}
	sceltaTuaHandler($){
		$.sendMessage('scelta tua');
	}
	mahHandler($){
		$.sendMessage('MAH');
	}
	get routes() {
		return {
			'spezzo': 'spezzoHandler',
			'le': 'leHandler',
			'gambe': 'gambeHandler',
			'sceltatua': 'sceltaTuaHandler',
			'mah': 'mahHandler'
		};
	}
}

module.exports = GambeController;