const template = require('../config/template.json');

const getMyStyle = () => ({
	root: {
		background: 'radial-gradient(\n    circle,\n    rgba(221, 126, 218, 1) 0%,\n    rgba(148, 233, 232, 1) 86%\n  )',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		minHeight: '100vh',
		height: 'content',
		width: '100%',
	},
	header: {
		height: '10vh',
		minHeight: '60px',
		display: 'flex',
		flexDirection: 'row',
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
	bottomBar: { height: '3vh', width: '90vw', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' },
	imprintLink: { fontSize: '16px', marginRight: '20px' },
});

module.exports = {
	getMyStyle,
};
