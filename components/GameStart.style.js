const template = require('../config/template.json');

const getMyStyle = ({ nameError }) => ({
	startPicture: {
		height: '20vh',
		minHeight: '180px',
		alignSelf: 'center',
	},
	startInputContainer: {
		marginTop: '60px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	nameInput: {
		width: '180px',
		padding: '10px',
		border: nameError ? '2px solid red' : '1px solid green',
	},
	startButton: {
		width: '160px',
		backgroundColor: template.colors.green,
		marginLeft: template.sizes.giantMargin,
		fontFamily: template.fonts.pokemon,
		fontSize: template.sizes.defaultFont,
		cursor: 'pointer',
		textTransform: 'uppercase',
		padding: '0px',
	},
});

module.exports = {
	getMyStyle,
};
