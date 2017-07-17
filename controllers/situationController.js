'use strict';

const Telegram = require('telegram-node-bot');

const situations = [
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
	"Andate a dormire fessacchiotti"
]

class SituationController extends Telegram.TelegramBaseController {
	handle($) {
		var date = new Date($.message.date*1000);
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		if(!minutes%5 && !seconds%5){
			$.sendMessage(situations[hours]);
		}
	}
}

module.exports = SituationController;