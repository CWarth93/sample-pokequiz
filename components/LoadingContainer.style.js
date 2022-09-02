const template = require('../config/template.json');

const getMyStyle = () => ({
	loadingPicture: {
		height: '20vh',
		minHeight: '180px',
		alignSelf: 'center',
	},
	loadingText: {
		marginTop: template.sizes.giantMargin,
		display: 'flex',
		fontFamily: template.fonts.pokemon,
		fontSIze: template.sizes.defaultFont,
		textAlign: 'center',
		alignSelf: 'center',
	},
});

module.exports = {
	getMyStyle,
};
