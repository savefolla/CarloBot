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

// routing
tg.router
	.when(new Telegram.TextCommand('/random'), new RandomController())
	.when(new CustomFilterCommand($ => {
		return $.message.text.includes('@Meow958')
	}), new MeowController())
	.when(new Telegram.TextCommand('/Alessia'), new MeowController())
	.otherwise(new OtherwiseController());

