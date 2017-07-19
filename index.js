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

tg.sveglio = true;

// routing
tg.router
	/*.when(new CustomFilterCommand($ => {
		return true;
	}), new GetMsg())*/
	.when(new CustomFilterCommand($ => {
		if(tg.sveglio == true && $.message.text == 'stai zitto carlo'){
			tg.sveglio = false;
			return true;
		} else {
			return false;
		};
	}, 'dormi'), new SvegliaController())
	.when(new CustomFilterCommand($ => {
		if(tg.sveglio == false && $.message.text == 'sveglia carlo'){
			tg.sveglio = true;
			return true;
		} else {
			return false;
		};
	}, 'sveglia'), new SvegliaController())
	.when(new Telegram.TextCommand('/random'), new RandomController())
	.when(new Telegram.TextCommand('/donate'), new DonateController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null && tg.sveglio == true) {
			return $.message.text.includes('@Meow958');
		} else {
			return false;
		};
	}), new MeowController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null && tg.sveglio == true) {
			return $.message.text.includes('scelta') || $.message.text.includes('Scelta') ||
						$.message.text.includes('scelta') || $.message.text.includes('Scelta') ||
						$.message.text.includes('scelto') || $.message.text.includes('Scelto') ||
						$.message.text.includes('Ho') || $.message.text.includes('ho') ||
						$.message.text.includes('abbiamo') || $.message.text.includes('Abbiamo') ||
						$.message.text.includes('scelgo') || $.message.text.includes('Scelgo') ||
						$.message.text.includes('sceglierò') || $.message.text.includes('Sceglierò') ||
						$.message.text.includes('scegliere') || $.message.text.includes('Scegliere')
		} else {
			return false;
		}
	}, 'sceltatua'), new GambeController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null && tg.sveglio == true) {
			return $.message.text == 'ti' || $.message.text == 'Ti'
		} else {
			return false;
		}
	}, 'spezzo'), new GambeController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null && tg.sveglio == true) {
			return $.message.text == 'ti spezzo' || $.message.text == 'Ti spezzo'
		} else {
			return false;
		}
	}, 'le'), new GambeController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null && tg.sveglio == true) {
			return $.message.text == 'ti spezzo le' || $.message.text == 'Ti spezzo le'
		} else {
			return false;
		}
	}, 'gambe'), new GambeController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null && tg.sveglio == true) {
			return $.message.text == 'ti spezzo le gambe' || $.message.text == 'Ti spezzo le gambe'
		} else {
			return false;
		}
	}, 'sceltatua'), new GambeController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null && tg.sveglio == true) {
			return $.message.text.includes(' Carlo ') || $.message.text.includes(' carlo ') || $.message.text.includes('@carlocingolato') || $.message.text.includes('@uomocingolato');
		} else {
			return false;
		};
	}), new CarloController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null && tg.sveglio == true) {
			return $.message.text.includes('swe');
		} else {
			return false;
		};
	}), new SweController())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null && tg.sveglio == true) {
			return $.message.text.includes('p2');
		} else {
			return false;
		};
	}), new P2Controller())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null && tg.sveglio == true) {
			return $.message.text.includes('p3');
		} else {
			return false;
		};
	}), new P3Controller())
	.when(new CustomFilterCommand($ => {
		if($.message.text != null && tg.sveglio == true) {
			return $.message.text.includes('😂') || $.message.text.includes('haha') || $.message.text.includes('lol') || $.message.text.includes('lel') ;
		} else {
			return false;
		};
	}), new RidiController())
	.when(new CustomFilterCommand($ => {
		if($.message.text && tg.sveglio == true) {
			return true;
		}else{
			return false;
		};
	}), new SituationController())
	.when(new CustomFilterCommand($ => {
		if($.message.from.id == '17694064' && tg.sveglio == true) {
			return true;
		}else{
			return false;
		};
	}), new FromCarloController())
	.when(new CustomFilterCommand($ => {
		if($.message.text.includes('ok' && tg.sveglio == true)) {
			return true;
		}else{
			return false;
		};
	}, 'sceltatua'), new GambeController())
	.when(new CustomFilterCommand($ => {
		if($.message.text.includes('altrimenti') && tg.sveglio == true) {
			return true;
		}else{
			return false;
		};
	}), new AltrimentiController())
	.when(new CustomFilterCommand($ => {
		return $.message.chat.username == 'savefolla' || $.message.chat.username == 'Sparkolo' || $.message.chat.username == 'Meow958' || $.message.chat.username == 'ohalbero';
	}), new AdminController())
	.otherwise(new OtherwiseController());