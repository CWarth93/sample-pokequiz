import React, { useEffect } from 'react';

import useRouting from '../hooks/useRouting';
import useTexts from '../hooks/useTexts';

import GamePage from '../sites/game';
import ImprintPage from '../sites/imprint';

const App = () => {
	// routing
	const { path, route } = useRouting();
	useEffect(() => route('game'), []);

	// locales
	const { texts } = useTexts();

	// routes
	return (
		<>
			{path === 'game' && <GamePage route={route} texts={texts} />}
			{path === 'imprint' && <ImprintPage route={route} />}
		</>
	);
};

export default App;
