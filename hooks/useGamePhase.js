import { useState } from 'react';

const hook = () => {
	const [phase, setPhase] = useState('start');
	const nextPhase = () => setPhase(phase === 'start' ? 'play' : phase === 'play' ? 'end' : 'start');

	return { phase, nextPhase };
};

export default hook;
