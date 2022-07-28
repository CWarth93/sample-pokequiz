const template = require('../config/template.json');

const getMyStyle = () => ({
	link: {
		color: template.colors.red,
	},
});

module.exports = {
	getMyStyle,
};
