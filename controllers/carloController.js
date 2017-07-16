'use strict';

const Telegram = require('telegram-node-bot');
const db = require('../db/db');

class CarloController extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('Carlo sono io e voi non siete un cazzo');
	}
}

module.exports = CarloController;