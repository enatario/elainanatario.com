var username = require('./username.js');

module.exports = {
	copy: {
		google: {
			id: ''
		}
	},
	deploy: {
		ssh: {
			host: 'elainanatario.com',
			username: username,
			filepath: 'www.elainanatario.com/new/'
		}
	}
};
