const template = require('../config/template.json');

const getMyStyle = () => ({
	header: {
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
		height: '3vh',
		width: '90vw',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignSelf: 'flex-end',
		position: 'absolute',
		bottom: 5,
	},
	imprintLink: {
		fontSize: '16px',
		marginRight: '20px',
	},
});

module.exports = {
	getMyStyle,
};
