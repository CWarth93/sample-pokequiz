const template = require('../config/template.json');

const getMyStyle = () => ({
	root: {
		background: 'radial-gradient(\n    circle,\n    rgba(221, 126, 218, 1) 0%,\n    rgba(148, 233, 232, 1) 96%\n  )',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		height: '100vh',
		marginRight: -5,
		marginTop: -16,
		marginLeft: -10,
	},
});

module.exports = {
	getMyStyle,
};
