const template = require('../config/template.json');

const getMyStyle = () => ({
	root: {
		background: 'radial-gradient(\n    circle,\n    rgba(221, 126, 218, 1) 0%,\n    rgba(148, 233, 232, 1) 86%\n  )',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		minHeight: '100vh',
		height: 'content',
		marginRight: -5,
		marginTop: -10,
		marginLeft: -10,
	},
});

module.exports = {
	getMyStyle,
};
