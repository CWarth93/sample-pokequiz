const template = require('../config/template.json');

const getMyStyle = () => ({
	scoreText: {
		fontFamily: template.fonts.pokemon,
		fontSize: template.sizes.dataFont,
		alignSelf: 'center',
	},
	ladderLabel: {
		fontFamily: template.fonts.pokemon,
		alignSelf: 'center',
	},
	ladderList: {
		marginTop: template.sizes.smallMargin,
		alignSelf: 'center',
		listStyleType: 'decimal',
		backgroundColor: template.colors.pink,
		paddingLeft: '32px',
		paddingRight: '32px',
		paddingBottom: '16px',
		minWidth: '30%',
		border: '2px solid white',
	},
	ladderEntry: {
		fontFamily: template.fonts.pokemon,
		fontSize: template.sizes.defaultFont,
		marginBottom: template.sizes.tinyMargin,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	finishButton: {
		marginTop: '30px',
		width: '160px',
		backgroundColor: template.colors.green,
		fontFamily: template.fonts.pokemon,
		fontSize: template.sizes.defaultFont,
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
