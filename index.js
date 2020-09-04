const chalk = require('chalk');

const chalks = {
	error: chalk.red('error: '),
	warning: chalk.yellow('warning: '),
	ready: chalk.green('ready: '),
	info: chalk.cyan('info: '),
	event: chalk.magenta('event: ')
};

exports = {
	event: (...message) => {
		console.log(chalks.event, ...message);
	},
	error: (...message) => {
		console.error(chalks.error, ...message);
	},
	warning: (...message) => {
		console.warn(chalks.warning, ...message);
	},
	ready: (...message) => {
		console.log(chalks.ready, ...message);
	},
	info: (...message) => {
		console.log(chalks.info, ...message);
	}
};
