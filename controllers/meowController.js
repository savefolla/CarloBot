'use strict';

const Telegram = require('telegram-node-bot');

class MeowController extends Telegram.TelegramBaseController {
	handle($) {
		var date = new Date($.message.date*1000);
		var hours = date.getHours();
		var day = date.getDay();
		if(hours >= 19 || hours < 7 || day == 0 || day == 7) {
			$.sendMessage('È ubriaca');
		}else{
			$.sendMessage('Aspetto: 7.5\nCarattere: 6.9\nCapacità: 7');
		}
	}
}

module.exports = MeowController;