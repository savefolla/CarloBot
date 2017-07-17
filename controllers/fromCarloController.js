'use strict';

const Telegram = require('telegram-node-bot');

const insulti = [" non farmi arrabbiare.",
							" ti taglio la punta della matita.",
							", non potrai fuggire dalla mia furia.",
							" tua mamma è un mammifero.",
							" non fare il cretino.",
							" ridammi gli occhiali.",
							" dov'è il mio zaino?",
							" sei uno stronzo.",
							" ti taglio le gambe.",
							" bastaaa!",
							" dammi il cellulare.",
							" io ti sparo il tuo diploma su per il culo come faccio con il bastone daaelfie",
							" hai scatenato la mia iraaaaaa ti spacco bottiglia brucio casa",
							" non prendermi in giro altrimenti..."];

class CarloController extends Telegram.TelegramBaseController {
	handle($) {
		console.log("messaggio di carlo");
		var n = Math.floor(Math.random()*insulti.length);
		$.sendMessage(insulti[n]);
	}
}

module.exports = CarloController;