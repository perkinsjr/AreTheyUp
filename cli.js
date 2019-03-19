#!/usr/bin/env node
"use strict";

const meow = require("meow");
const logSymbols = require("log-symbols");
const m = require("./");

const cli = meow(`
	Example
        $ aretheyup netflix.com
        $ Are they up?
		${logSymbols.success} Yup
`);

if (cli.input.length === 0) {
	console.error("Specify a URL");
	process.exit(1);
} 

m(cli.input[0]).then(up => {
	console.log("Are they up? \n")
	console.log(up["status_code"] === 1 ? `${logSymbols.success} Yup`  : `${logSymbols.error} Nope`);
	console.log("Domain: " + up["domain"]);
	console.log("Port: " + up["port"]);
	console.log("Response IP: " + up["response_ip"]);
	console.log("Response Time: " + up["response_time"] * 1000 + " Milliseconds");
	console.log("Response Code: " + up["response_code"]);
	process.exit(up ? 0 : 2);
});
