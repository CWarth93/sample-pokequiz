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
		fontSize: '20px',
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
		//maxWidth: "25vw",
		height: 'auto',
	},
	timerContainer: {
		alignSelf: 'center',
		fontFamily: template.fonts.pokemon,
		fontSize: '18px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: '16px',
	},
});

module.exports = {
	getMyStyle,
};
