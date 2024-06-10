function* debugCount() {
	let count = 1;

	while (true) {
		yield count++;
	}
}

const gen = debugCount();

const formatArgs = (...args: unknown[]) =>
	args.length === 1 && typeof args[0] === "string"
		? args[0]
		: `\n${JSON.stringify(args, undefined, 4)}`;

export class Logger {
	static info(...args: unknown[]) {
		console.log(
			`[ \x1b[34m${args.length > 1 ? "info" : "i"}\x1b[0m ]`,
			formatArgs(...args),
		);
	}

	static warn(...args: unknown[]) {
		console.warn(
			`[ \x1b[33m${args.length > 1 ? "warning" : "!"}\x1b[0m ]`,
			formatArgs(...args),
		);
	}

	static error(...args: unknown[]) {
		for (const arg of args) {
			if (arg instanceof Error) {
				console.error(arg);
			} else {
				console.error("\x1b[0m[ \x1b[31mERROR\x1b[0m ]", arg);
			}
		}
	}

	static debug() {
		console.log(`[ \x1b[34mdebug\x1b[0m ] At #${gen.next().value}`);
	}
}
