'use strict';

const Telegram = require('telegram-node-bot');

class MeowController extends Telegram.TelegramBaseController {
	handle($) {
		var date = new Date($.message.date*1000);
		var hours = date.getHours();
		var day = date.getDay();
		if(hours >= 17 || hours < 7 || day == 0 || day == 7) {
			$.sendMessage('È ubriaca.');
		}else{
			$.sendMessage('Dove sei? Adesso vi trovo.');
		}
	}
}

module.exports = MeowController;