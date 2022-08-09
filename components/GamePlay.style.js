const template = require('../config/template.json');

const getMyStyle = () => ({
	questionText: { fontFamily: template.fonts.pokemon, fontSize: '20px', alignSelf: 'center' },
	optionsContainer: { width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', alignSelf: 'center' },
	pokemonOption: {
		height: '15vh',
		minHeight: '140px',
		minWidth: '140px',
	},
	timerContainer: {
		marginTop: '20px',
		alignSelf: 'center',
		fontFamily: template.fonts.pokemon,
		fontSize: '18px',
	},
});

module.exports = {
	getMyStyle,
};
