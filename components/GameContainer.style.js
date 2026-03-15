const template = require('../config/template.json');

const getMyStyle = () => ({
	header: {
		marginTop: '24px',
		minHeight: '70px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '4px',
	},
	content: {
		minHeight: '400px',
		width: '90vw',
		maxWidth: '600px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: template.colors.bgPanel,
		border: '3px solid ' + template.colors.borderLight,
		borderRadius: '12px',
		boxShadow: '0 0 20px rgba(59,76,202,0.3), inset 0 0 30px rgba(0,0,0,0.3)',
		padding: '24px 16px',
		marginTop: '16px',
		marginBottom: '16px',
		position: 'relative',
	},
	firstHeading: {
		fontFamily: template.fonts.pokemon,
		fontSize: '48px',
		color: template.colors.pokemonYellow,
		textShadow: '2px 2px 0px ' + template.colors.pokemonYellowDark + ', 4px 4px 0px rgba(0,0,0,0.5)',
		letterSpacing: '2px',
	},
	secondHeading: {
		fontFamily: template.fonts.pokemon,
		fontSize: '48px',
		color: template.colors.pokemonRed,
		textShadow: '2px 2px 0px ' + template.colors.pokemonRedDark + ', 4px 4px 0px rgba(0,0,0,0.5)',
		letterSpacing: '2px',
	},
	bottomBar: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		padding: '12px 0',
	},
	imprintLink: {
		fontSize: template.sizes.smallFont,
		color: template.colors.textMuted,
		cursor: 'pointer',
		textDecoration: 'none',
	},
});

module.exports = {
	getMyStyle,
};
