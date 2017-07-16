'use strict';

const token = require('./token');

const Telegram = require('telegram-node-bot'),
	tg = new Telegram.Telegram(token, {
		workers: 1 //controllare numero
	});

// per comandi non riconosciuti/implementati
const OtherwiseController = require('./controllers/otherwiseController');

//per comandi validi
const RandomController = require('./controllers/randomController');
const MeowController = require('./controllers/meowController');
const CustomFilterCommand = require('./node_modules/telegram-node-bot/lib/routing/commands/CustomFilterCommand');
const DonateController = require('./controllers/donateController');
const GambeController = require('./controllers/gambeController');
const AdminController = require('./controllers/adminController');
const CarloController = require('./controllers/carloController');

// routing
tg.router
	.when(new Telegram.TextCommand('/random'), new RandomController())
	.when(new Telegram.TextCommand('/donate'), new DonateController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null) {
			return $.message.text.includes('@Meow958');
		} else {
			return false;
		};
	}), new MeowController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null) {
			return $.message.text.includes('scelta') || $.message.text.includes('Scelta') ||
						$.message.text.includes('scelta') || $.message.text.includes('Scelta') ||
						$.message.text.includes('scelgo') || $.message.text.includes('Scelgo') ||
						$.message.text.includes('sceglierò') || $.message.text.includes('Sceglierò') ||
						$.message.text.includes('scegliere') || $.message.text.includes('Scegliere')
		} else {
			return false;
		}
	}, 'sceltatua'), new GambeController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null) {
			return $.message.text == 'ti' || $.message.text == 'Ti'
		} else {
			return false;
		}
	}, 'spezzo'), new GambeController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null) {
			return $.message.text == 'ti spezzo' || $.message.text == 'Ti spezzo'
		} else {
			return false;
		}
	}, 'le'), new GambeController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null) {
			return $.message.text == 'ti spezzo le' || $.message.text == 'Ti spezzo le'
		} else {
			return false;
		}
	}, 'gambe'), new GambeController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null) {
			return $.message.text == 'ti spezzo le gambe' || $.message.text == 'Ti spezzo le gambe'
		} else {
			return false;
		}
	}, 'sceltatua'), new GambeController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null) {
			return $.message.text.includes('Carlo') || $.message.text.includes('carlo');
		} else {
			return false;
		};
	}), new CarloController())
	.when(new CustomFilterCommand($ => {
		return $.message.chat.username == 'savefolla' || $.message.chat.username == 'Sparkolo' || $.message.chat.username == 'ohalbero';
	}), new AdminController())
	.otherwise(new OtherwiseController());

