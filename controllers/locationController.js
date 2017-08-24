'use strict';

const Telegram = require('telegram-node-bot');

const posizioni = [
  'a letto',
  'a letto',
  'a letto',
  'a letto',
  'a letto',
  'a casa',
  'in torre',
  'in torre',
  'in torre',
  'in torre',
  'alla piovego',
  'in torre',
  'in torre',
  'in torre',
  'in torre',
  'in torre',
  'a casa',
  'a casa',
  'a casa che guardo dragonball',
  'a casa che gioco ai carri armati',
  'a letto',
  'a letto',
  'a letto',
  'a letto',
]

class LocationController extends Telegram.TelegramBaseController {
	handle($) {
		var date = new Date($.message.date*1000);
    var hours = date.getHours();
    $.sendMessage('sono '+posizioni[hours]);
	}
}

module.exports = LocationController;