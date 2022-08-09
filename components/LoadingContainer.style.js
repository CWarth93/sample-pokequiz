const template = require('../config/template.json');

const getMyStyle = () => ({
	loadingPicture: {
		height: '20vh',
		minHeight: '180px',
		alignSelf: 'center',
	},
	loadingText: {
		marginTop: '20px',
		display: 'flex',
		fontFamily: template.fonts.pokemon,
		fontSIze: '16px',
		textAlign: 'center',
		alignSelf: 'center',
	},
});

module.exports = {
	getMyStyle,
};
