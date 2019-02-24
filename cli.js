#!/usr/bin/env node
'use strict';

const meow = require('meow');
const logSymbols = require('log-symbols');
const m = require('./');

const cli = meow(`
	Example
        $ aretheyup netflix.com
        $ Are they up?
		${logSymbols.success} Yup
`);

if (cli.input.length === 0) {
	console.error('Specify a URL');
	process.exit(1);
} 

m(cli.input[0]).then(up => {
    console.log('Are they up? \n')
	console.log(up ? `${logSymbols.success} Yup` : `${logSymbols.error} Nope`);
	process.exit(up ? 0 : 2);
});
