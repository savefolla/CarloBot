'use strict';

const Telegram = require('telegram-node-bot');

class AltrimentiController extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('altrimenti ti spezzo le gambe');
	}
}

module.exports = AltrimentiController;