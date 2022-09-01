const template = require('../config/template.json');

const getMyStyle = () => ({
	scoreText: {
		fontFamily: template.fonts.pokemon,
		fontSize: '20px',
		alignSelf: 'center',
	},
	ladderLabel: {
		fontFamily: template.fonts.pokemon,
		alignSelf: 'center',
	},
	ladderList: {
		marginTop: '20px',
		alignSelf: 'center',
		listStyleType: 'decimal',
	},
	ladderEntry: {
		fontFamily: template.fonts.pokemon,
		fontSize: '14px',
		marginLeft: '-8px',
		marginBottom: '5px',
	},
	finishButton: {
		marginTop: '30px',
		width: '160px',
		backgroundColor: template.colors.green,
		fontFamily: template.fonts.pokemon,
		fontSize: '16px',
		cursor: 'pointer',
		textTransform: 'uppercase',
		padding: '0px',
		alignSelf: 'center',
		marginBottom: '20px',
	},
});

module.exports = {
	getMyStyle,
};
