const template = require('../config/template.json');

const getMyStyle = () => ({
	root: {
		background: template.colors.bgDark,
		backgroundImage:
			'radial-gradient(circle at 20% 50%, rgba(59,76,202,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(204,0,0,0.1) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(255,203,5,0.08) 0%, transparent 50%)',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		minHeight: '100vh',
		margin: 0,
		padding: 0,
		position: 'relative',
		overflow: 'auto',
	},
});

module.exports = {
	getMyStyle,
};
