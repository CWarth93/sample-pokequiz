const template = require('../config/template.json');

const getMyStyle = () => ({
	questionContainer: {
		height: '60%',
		maxHeight: '400px',
		width: '90%',
		alignSelf: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	questionText: {
		fontFamily: template.fonts.pokemon,
		fontSize: template.sizes.dataFont,
		alignSelf: 'center',
		justifySelf: 'flex-start',
	},
	optionsContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
		alignSelf: 'center',
	},
	pokemonOption: {
		width: '30%',
		maxWidth: '120px',
		height: 'auto',
	},
	timerContainer: {
		alignSelf: 'center',
		fontFamily: template.fonts.pokemon,
		fontSize: template.sizes.defaultFont,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: template.sizes.bigMargin,
	},
});

module.exports = {
	getMyStyle,
};
