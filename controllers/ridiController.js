'use strict';

const Telegram = require('telegram-node-bot');

class RidiController extends Telegram.TelegramBaseController {
	handle($) {
        $.sendMessage("che cazzo hai da ridere coglione");
    }
}

module.exports = RidiController;
