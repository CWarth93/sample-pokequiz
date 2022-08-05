import React, { useState } from 'react';
import GameContainer from '../components/GameContainer.js';
import GameStart from '../components/GameStart.js';
import GamePlay from '../components/GamePlay.js';
import GameEnd from '../components/GameEnd.js';

const Page = ({ route, texts }) => {
	const [phase, setPhase] = useState('start');
	const nextPhase = () => setPhase(phase === 'start' ? 'play' : phase === 'play' ? 'end' : 'start');

	return (
		<GameContainer texts={texts}>
			{phase === 'start' && <GameStart texts={texts} nextPhase={nextPhase} />}
			{phase === 'play' && <GamePlay nextPhase={nextPhase} />}
			{phase === 'end' && <GameEnd nextPhase={nextPhase} />}
		</GameContainer>
	);
};

export default Page;
