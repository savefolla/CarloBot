'use strict';

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {
	handle($) {
		// console.log($.message);
		// $.sendMessage('Ti spezzo le gambe');
	}
}

module.exports = OtherwiseController;