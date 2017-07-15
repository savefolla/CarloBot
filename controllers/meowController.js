'use strict';

const Telegram = require('telegram-node-bot');

class MeowController extends Telegram.TelegramBaseController {
	handle($) {
		var hours = new Date($.message.date*1000).getHours();
		if(hours >= 19 || hours < 7){
			$.sendMessage('È ubriaca');
		}else{
			$.sendMessage('Aspetto: 7.5\nCarattere: 6.9\nCapacità: 7');
		}
	}
}

module.exports = MeowController;