import React, { useState } from 'react';
import GameContainer from '../components/GameContainer.js';
import GameStart from '../components/GameStart.js';
import GamePlay from '../components/GamePlay.js';
import GameEnd from '../components/GameEnd.js';
import usePlayerName from '../hooks/usePlayerName';
import useGamePhase from '../hooks/useGamePhase';

const Page = ({ route, texts }) => {
	const { name, nameError, changeName } = usePlayerName();
	const { phase, nextPhase } = useGamePhase();
	const startGame = () => {
		if (!nameError) {
			// ToDo: request to start the game
			nextPhase();
		}
	};

	return (
		<GameContainer texts={texts}>
			{phase === 'start' && <GameStart texts={texts} name={name} nameError={nameError} changeName={changeName} startGame={startGame} />}
			{phase === 'play' && <GamePlay texts={texts} nextPhase={nextPhase} />}
			{phase === 'end' && <GameEnd nextPhase={nextPhase} />}
		</GameContainer>
	);
};

export default Page;
