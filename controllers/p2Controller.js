'use strict';

const Telegram = require('telegram-node-bot');

class P2Controller extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('fai p2');
	}
}

module.exports = P2Controller;