import React, { useEffect } from 'react';

import useRouting from '../hooks/useRouting';
import useCounter from '../hooks/useCounter';

import ActiveCounterPage from '../sites/activeCounter';
import ShowCounterPage from '../sites/showCounter';

const App = () => {
	// routing
	const { path, route } = useRouting();
	useEffect(() => route('activeCounter'), []);

	// application state
	const { counter, setCounter } = useCounter();

	// routes
	return (
		<>
			{path === 'activeCounter' && <ActiveCounterPage counter={counter} setCounter={setCounter} route={route} />}
			{path === 'showCounter' && <ShowCounterPage counter={counter} route={route} />}
		</>
	);
};

export default App;
