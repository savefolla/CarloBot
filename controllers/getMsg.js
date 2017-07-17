'use strict';

const Telegram = require('telegram-node-bot');

class GetMsg extends Telegram.TelegramBaseController {
	handle($) {
		console.log($);
	}
}

module.exports = GetMsg;