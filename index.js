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

// routing
tg.router
	.when(new Telegram.TextCommand('/random'), new RandomController())
	.when(new Telegram.TextCommand('/donate'), new DonateController())
	.when(new CustomFilterCommand($ => {
		return $.message.text.includes('@Meow958')
	}), new MeowController())
	.when(new CustomFilterCommand($ => {
		return $.message.text.includes('scelta') ||
				   $.message.text.includes('scelta') ||
					 $.message.text.includes('scelgo') ||
					 $.message.text.includes('sceglierò') ||
					 $.message.text.includes('scegliere')
	}, 'sceltatua'), new GambeController())
	.when(new CustomFilterCommand($ => {
		return $.message.text.includes('@Meow958')
	}), new MeowController())
	.when(new CustomFilterCommand($ => {
		return $.message.text == 'ti'
	}, 'spezzo'), new GambeController())
	.when(new CustomFilterCommand($ => {
		return $.message.text == 'ti spezzo'
	}, 'le'), new GambeController())
	.when(new CustomFilterCommand($ => {
		return $.message.text == 'ti spezzo le'
	}, 'gambe'), new GambeController())
	.when(new CustomFilterCommand($ => {
		return $.message.text == 'ti spezzo le gambe'
	}, 'sceltatua'), new GambeController())
	.otherwise(new OtherwiseController());

