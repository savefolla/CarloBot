'use strict';

const Telegram = require('telegram-node-bot');

class DonateController extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('Compra la droga ai devs o ti spezzo le gambe: paypal.me/SaverioFollador'); // riscrivere in modo che mandi un messaggio casuale
	}
}

module.exports = DonateController;