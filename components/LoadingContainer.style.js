const template = require('../config/template.json');

const getMyStyle = () => ({
	loadingPicture: {
		height: '20vh',
		minHeight: '180px',
		alignSelf: 'center',
		filter: 'drop-shadow(0 0 10px rgba(255,203,5,0.3))',
	},
	loadingText: {
		marginTop: template.sizes.giantMargin,
		display: 'flex',
		fontFamily: template.fonts.pokemon,
		fontSize: template.sizes.defaultFont,
		textAlign: 'center',
		alignSelf: 'center',
		color: template.colors.textMuted,
		letterSpacing: '1px',
	},
});

module.exports = {
	getMyStyle,
};
