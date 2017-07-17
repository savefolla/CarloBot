'use strict';

const Telegram = require('telegram-node-bot');
const db = require('../db/db');

class P3Controller extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage('fai p3');
	}
}

module.exports = P3Controller;