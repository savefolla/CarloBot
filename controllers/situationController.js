'use strict';

const Telegram = require('telegram-node-bot');

const situations = [" non farmi arrabbiare.",
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
				" non prendermi in giro altrimenti...",
				"E' verooo!", 
				"Ma porca boia!", 
				"Ti spezzo le gambe!", 
				"Ciao barboni!", 
				"Ma ragazzi, come si fa questo???", 
				"Ho ragione. Io puttana troia!",
				"Morirai presto",
				"Ammazzo tutti",
				"Ma questo è. Facilissimo!",
				"Ma questo è. Impossibile!",
				"Basta",
				"Ma porca. Puttana",
				"AAHHHH MA È VEROO!",
				"Ti do fuoco alla casa",
				"Hai rotto le balle",
				"Ooo basta porco cane",
				"Ti ammazzo il pene se non la smetti",
				"Sono il migliore.",
				"Vai a studiare",
				"Basta giocare andate a scopare",
				"Ma di cosa state parlando",
				"No dai, non scherzare.",
				"Oggi no, domani.",
				"Non si fa sempre quello che vuoi.",
				"Bastaaa, non lo faccio.",
				"Uffff, non lo so.",
				"Sono impegnato",
				"Non posso rispondere",
				"Ma va in mona",
				"Rimango sveglio per capire se sono al giorno dopo.",
				"Filè ha sempre il suo fascino con quei peli sull'orecchio.",
				"Le due di notte... o del mattino?",
				"Mio nonno è gia a sparare ai vicini con il suo fucile ad aria compressa",
				"Non è ancora uscito Automi!?",
				"Porca miseria non trovo la mia chiavetta a forma di coccodrillo!",
				"Svegliaa",
				"Mi trovare in Torre a saltare come un leprotto.",
				"Ragazzi ho un problema ho tirato. Fuori il computer dal. Frigo e non s'accende, cosa può. Essere?",
				"Perchè non compila?? Eppure ho scritto giusto!",
				"Morirete tutti.",
				"Non capisco niente di quello che spiegano.",
				"Qualcuno viene a mangiare con me?",
				"Io scrivo 'gcc -c bolletta.cpp' ma porca troia il computer non va!",
				"Mi sono rotto i coglioni di dirvi cosa sto facendo.",
				"Adesso vado a studiare in biblioteca.",
				"Ma la smettono di inserirmi nel gruppo?",
				"Vendo lg l80 con appena un anno tenuto bene le caratteristiche ci sono in internet. Asta a partire da 50euro.",
				"È ora di andare a letto",
				"Erotic è a pagamento????",
				"Orsacchiotti come va? Sono stanco",
				"Sei fuori a divertirti? Andate a studiare",
				"Mi scappa la cacca",
				"Andate a dormire fessacchiotti"];

class SituationController extends Telegram.TelegramBaseController {
	handle($) {
		var date = new Date($.message.date*1000);
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		if(minutes/5%1==0 && seconds/5%1==0){
			$.sendMessage(situations[hours]);
		}
	}
}

module.exports = SituationController;