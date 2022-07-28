import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const hook = () => {
	const [counter, setCounter] = useState(0);
	useLocalStorage('counter', counter, setCounter);

	return { counter, setCounter };
};

export default hook;
