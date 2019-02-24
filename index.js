'use strict';

const got = require('got');

module.exports = url => {
	return got(`http://isitup.org/${url}.json`, {
		json: true,
		headers: {
			'user-agent': 'https://github.com/perkins/are-they-up'
		}
	}).then(res => {
		if (res.body.status_code === 3) {
			throw new Error('Check the domain, it seems to be invalid');
		}

		return res.body.status_code === 1;
	});
};