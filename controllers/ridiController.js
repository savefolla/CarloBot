'use strict';

const Telegram = require('telegram-node-bot');

class RidiController extends Telegram.TelegramBaseController {
	handle($) {
        $.sendMessage("che cazzo ridi");
    }
}

module.exports = RidiController;