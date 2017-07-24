'use strict';

const Telegram = require('telegram-node-bot');

class AltrimentiController extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('altrimenti vengo in ciascuna delle vostre case e vi spezzo le gambe');
	}
}

module.exports = AltrimentiController;