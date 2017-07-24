'use strict';

const Telegram = require('telegram-node-bot');

class SweController extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('fai swe');
	}
}

module.exports = SweController;