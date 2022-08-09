import React from 'react';
import GameContainer from '../components/GameContainer.js';
import GameStart from '../components/GameStart.js';
import GamePlay from '../components/GamePlay.js';
import GameEnd from '../components/GameEnd.js';
import LoadingContainer from '../components/LoadingContainer.js';
import usePlayerName from '../hooks/usePlayerName';
import useGamePhase from '../hooks/useGamePhase';
import useGame from '../hooks/useGame';

const Page = ({ route, texts }) => {
	const { name, nameError, changeName } = usePlayerName();
	const { phase, nextPhase } = useGamePhase();
	const { startGame, questionsWithAnswers, questionIndex, answer, isLoading } = useGame({ nextPhase, nameError });

	return (
		<GameContainer texts={texts} route={route}>
			{isLoading && <LoadingContainer texts={texts} />}
			{!isLoading && phase === 'start' && <GameStart texts={texts} name={name} nameError={nameError} changeName={changeName} startGame={startGame} />}
			{!isLoading && phase === 'play' && <GamePlay texts={texts} questionsWithAnswers={questionsWithAnswers} questionIndex={questionIndex} answer={answer} />}
			{!isLoading && phase === 'end' && <GameEnd nextPhase={nextPhase} />}
		</GameContainer>
	);
};

export default Page;
