'use strict';

const Telegram = require('telegram-node-bot');

class RandomController extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('Messaggio casuale'); // riscrivere in modo che mandi un messaggio casuale
	}
}

module.exports = RandomController;