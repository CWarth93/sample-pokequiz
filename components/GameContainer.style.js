const template = require('../config/template.json');

const getMyStyle = () => ({
	header: {
		marginTop: template.sizes.giantMargin,
		height: '10vh',
		minHeight: '60px',
		display: 'flex',
		flexDirection: 'row',
	},
	content: {
		height: '80vh',
		minHeight: '580px',
		width: '80vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	firstHeading: {
		fontFamily: template.fonts.pokemon,
		fontSize: '54px',
		color: template.colors.green,
		alignSelf: 'center',
	},
	secondHeading: {
		fontFamily: template.fonts.pokemon,
		fontSize: '54px',
		color: template.colors.pink,
		alignSelf: 'center',
	},
	bottomBar: {
		height: 'min-content',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		position: 'absolute',
		bottom: '3%',
	},
	imprintLink: {
		fontSize: template.sizes.defaultFont,
		marginRight: '20px',
		cursor: 'pointer',
	},
});

module.exports = {
	getMyStyle,
};
