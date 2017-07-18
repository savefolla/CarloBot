'use strict';

const Telegram = require('telegram-node-bot');

class CarloController extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('che ce');
	}
}

module.exports = CarloController;