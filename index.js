'use strict';

const token = require('./token');

const Telegram = require('telegram-node-bot'),
	tg = new Telegram.Telegram(token, {
		workers: 1 //controllare numero
	});

const GetMsg = require('./controllers/getMsg');

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
const SweController = require('./controllers/sweController');
const P2Controller = require('./controllers/p2Controller');
const P3Controller = require('./controllers/p3Controller');
const SituationController = require('./controllers/situationController');
const FromCarloController = require('./controllers/fromCarloController');
const RidiController = require('./controllers/ridiController');
const AltrimentiController = require('./controllers/altrimentiController');
const SvegliaController = require('./controllers/svegliaController');
const LocationController = require('./controllers/locationController');

tg.sveglio = true;

// routing
tg.router
	.when(new CustomFilterCommand($ => {
		return true;
	}), new GetMsg())
	.when(new CustomFilterCommand($ => {
		if(tg.sveglio == true && $.message.text == 'stai zitto carlo' && !($.message.from.id == '17694064')){
			tg.sveglio = false;
			return true;
		} else {
			return false;
		}
	}, 'dormi'), new SvegliaController())
	.when(new CustomFilterCommand($ => {
		if(tg.sveglio == false && $.message.text == 'sveglia carlo' && !($.message.from.id == '17694064')){
			tg.sveglio = true;
			return true;
		} else {
			return false;
		}
	}, 'sveglia'), new SvegliaController())
	.when(new CustomFilterCommand($ => {
		return ($.message.text == 'sveglia carlo' || $.message.text == 'stai zitto carlo') && $.message.from.id == '17694064';
	}, 'sveglia'), new FromCarloController())
	.when(new Telegram.TextCommand('/random', 'random'), new RandomController())
	.when(new Telegram.TextCommand('/audio', 'audio'), new RandomController())
	.when(new Telegram.TextCommand('/video', 'video'), new RandomController())
	.when(new Telegram.TextCommand('/foto', 'foto'), new RandomController())
	.when(new Telegram.TextCommand('/frase', 'testo'), new RandomController())
	.when(new Telegram.TextCommand('/latest', 'latest'), new RandomController())
	.when(new Telegram.TextCommand('/sticker', 'sticker'), new RandomController())
	.when(new Telegram.TextCommand('/donate'), new DonateController())
	.when(new Telegram.TextCommand('/trovacarlo'), new LocationController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && 
		tg.sveglio == true &&
		$.message.text.includes('@Meow958');
	}), new MeowController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && tg.sveglio == true &&
		($.message.text.includes('scelta') || $.message.text.includes('Scelta') ||
		$.message.text.includes('scelta') || $.message.text.includes('Scelta') ||
		$.message.text.includes('scelto') || $.message.text.includes('Scelto') ||
		$.message.text.includes('Ho') || $.message.text.includes('ho') ||
		$.message.text.includes('abbiamo') || $.message.text.includes('Abbiamo') ||
		$.message.text.includes('scelgo') || $.message.text.includes('Scelgo') ||
		$.message.text.includes('sceglierò') || $.message.text.includes('Sceglierò') ||
		$.message.text.includes('scegliere') || $.message.text.includes('Scegliere'))
	}, 'sceltatua'), new GambeController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && tg.sveglio == true && 
		($.message.text == 'ti' || $.message.text == 'Ti'|| $.message.text == 'TI')
	}, 'spezzo'), new GambeController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && tg.sveglio == true &&
		($.message.text == 'ti spezzo' || $.message.text == 'Ti spezzo')
	}, 'le'), new GambeController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && tg.sveglio == true &&
		($.message.text == 'ti spezzo le' || $.message.text == 'Ti spezzo le')
	}, 'gambe'), new GambeController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && tg.sveglio == true &&
		($.message.text == 'ti spezzo le gambe' || $.message.text == 'Ti spezzo le gambe')
	}, 'sceltatua'), new GambeController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && tg.sveglio == true &&
		($.message.text.includes(' Carlo ') || $.message.text.includes(' carlo ') || $.message.text.includes('@carlocingolato') || $.message.text.includes('@uomocingolato'))
	}), new CarloController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && tg.sveglio == true &&
		$.message.text.includes('swe')
	}), new SweController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && tg.sveglio == true &&
		$.message.text.includes('p2')
	}), new P2Controller())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && tg.sveglio == true &&
		$.message.text.includes('p3')
	}), new P3Controller())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && tg.sveglio == true &&
		($.message.text.includes('😂') || $.message.text.includes('haha') || $.message.text.includes('lol') || $.message.text.includes('lel'))
	}), new RidiController())
	.when(new CustomFilterCommand($ => {
		return $.message.text && tg.sveglio == true
	}), new SituationController())
	.when(new CustomFilterCommand($ => {
		return $.message.from.id == '17694064' && tg.sveglio == true
	}, 'frase'), new FromCarloController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && $.message.text.includes('ok') && tg.sveglio == true
	}, 'sceltatua'), new GambeController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && $.message.text.includes('mah') && tg.sveglio == true
	}, 'mah'), new GambeController())
	.when(new CustomFilterCommand($ => {
		return $.message.text != null && $.message.text.includes('altrimenti') && tg.sveglio == true
	}), new AltrimentiController())
	.when(new CustomFilterCommand($ => {
		return !($.message.from.id == '17694064') && $.message.chat.username == 'savefolla' || $.message.chat.username == 'Sparkolo' || $.message.chat.username == 'ohalbero' || $.message.chat.username == 'joemerlino' || $.message.chat.username == 'ale_bragagnolo';
	}), new AdminController())
	.otherwise(new OtherwiseController());
