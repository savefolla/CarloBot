'use strict';

const Telegram = require('telegram-node-bot');
const messages = require('../db/messages.json');

const milliseconds = 1000*60*60*24;

class GetMsg extends Telegram.TelegramBaseController {
	handle($) {
		//console.log($);
		this.clean($);
	}
	clean($) {
		for (let i = 0; i < messages.length; ++i) {
			if (new Date().getTime() > messages[i].date + milliseconds) {
                this.deleteMessage($, messages[i]);
                messages.splice(i, 1);
            }
		}
	}
	deleteMessage($, message) {
        // $.api.call as a workaround for the absence of deleteMessage method
        $.api.call('deleteMessage', Object.assign({
            chat_id: message.chat_id,
            message_id: message.message_id
        }));
	}
}

module.exports = GetMsg;