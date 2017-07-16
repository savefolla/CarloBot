'use strict';

const Telegram = require('telegram-node-bot');
const db = require('../db/db');

class SweController extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('fai swe');
	}
}

module.exports = SweController;