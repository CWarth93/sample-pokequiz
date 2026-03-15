const template = require('../config/template.json');

const getMyStyle = () => ({
	questionContainer: {
		width: '95%',
		alignSelf: 'center',
		display: 'flex',
		flexDirection: 'column',
		gap: '20px',
	},
	questionText: {
		fontFamily: template.fonts.pokemon,
		fontSize: template.sizes.dataFont,
		alignSelf: 'center',
		color: template.colors.textLight,
		textShadow: '1px 1px 0px rgba(0,0,0,0.5)',
		textAlign: 'center',
		lineHeight: '1.4',
		height: '62px',
		display: 'flex',
		alignItems: 'center',
	},
	optionsContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
		alignSelf: 'center',
		gap: '8px',
	},
	pokemonOption: {
		width: '120px',
		height: '120px',
		objectFit: 'contain',
		cursor: 'pointer',
		border: '2px solid ' + template.colors.borderLight,
		borderRadius: '10px',
		backgroundColor: template.colors.bgPanelLight,
		padding: '8px',
		boxShadow: '0 3px 0px ' + template.colors.borderDark + ', 0 4px 10px rgba(0,0,0,0.3)',
		transition: 'transform 0.1s',
	},
	timerContainer: {
		alignSelf: 'center',
		fontFamily: template.fonts.pokemon,
		fontSize: template.sizes.headlineFont,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: template.sizes.bigMargin,
		color: template.colors.pokemonYellow,
		textShadow: '0 0 10px rgba(255,203,5,0.5)',
	},
});

module.exports = {
	getMyStyle,
};
