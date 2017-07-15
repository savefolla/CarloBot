'use strict';

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('Ti spezzo le gambe');
	}
}

module.exports = OtherwiseController;