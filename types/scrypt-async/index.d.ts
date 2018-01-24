// Type definitions for scrypt-async v1.3.1
// Project: https://github.com/dchest/scrypt-async-js
// Definitions by: Kaur Kuut <https://github.com/xStrom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ScryptAsync {
	interface CallbackFunc {
		(key: string): any;
		(key: number[]): any;
	}

	interface Options {
		N?: number;
		logN?: number;
		r: number;
		p: number;
		dkLen: number;
		encoding?: string;
		interruptStep?: number;
	}

	interface ScryptStatic {
		(password: string, salt: string, options: Options, callback: CallbackFunc): void;
		(password: number[], salt: string, options: Options, callback: CallbackFunc): void;
		(password: string, salt: number[], options: Options, callback: CallbackFunc): void;
		(password: number[], salt: number[], options: Options, callback: CallbackFunc): void;
		
		(password: string, salt: string, logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc, encoding: string): void;
		(password: string, salt: number[], logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc, encoding: string): void;
		(password: number[], salt: string, logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc, encoding: string): void;
		(password: number[], salt: number[], logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc, encoding: string): void;

		(password: string, salt: string, logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc): void;
		(password: string, salt: number[], logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc): void;
		(password: number[], salt: string, logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc): void;
		(password: number[], salt: number[], logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc): void;

		(password: string, salt: string, logN: number, r: number, dkLen: number, callback: CallbackFunc, encoding: string): void;
		(password: string, salt: number[], logN: number, r: number, dkLen: number, callback: CallbackFunc, encoding: string): void;
		(password: number[], salt: string, logN: number, r: number, dkLen: number, callback: CallbackFunc, encoding: string): void;
		(password: number[], salt: number[], logN: number, r: number, dkLen: number, callback: CallbackFunc, encoding: string): void;

		(password: string, salt: string, logN: number, r: number, dkLen: number, callback: CallbackFunc): void;
		(password: string, salt: number[], logN: number, r: number, dkLen: number, callback: CallbackFunc): void;
		(password: number[], salt: string, logN: number, r: number, dkLen: number, callback: CallbackFunc): void;
		(password: number[], salt: number[], logN: number, r: number, dkLen: number, callback: CallbackFunc): void;
	}
}

declare var scrypt: ScryptAsync.ScryptStatic;

export = scrypt;
