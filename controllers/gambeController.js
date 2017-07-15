'use strict';

const Telegram = require('telegram-node-bot');

class GambeController extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('Ti spezzo le gambe');
	}
}

module.exports = GambeController;