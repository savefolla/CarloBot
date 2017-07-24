'use strict';

const Telegram = require('telegram-node-bot');

class P3Controller extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('fai p3');
	}
}

module.exports = P3Controller;