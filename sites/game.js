import React, { useState } from 'react';
import GameContainer from '../components/GameContainer.js';
import GameStart from '../components/GameStart.js';
import GamePlay from '../components/GamePlay.js';
import GameEnd from '../components/GameEnd.js';
import LoadingContainer from '../components/LoadingContainer.js';
import usePlayerName from '../hooks/usePlayerName';
import useGamePhase from '../hooks/useGamePhase';
import { loadQuestions } from '../fetchers/api.js';
import { getCurrentLanguage } from '../business/locales.js';

const Page = ({ route, texts }) => {
	const [isLoading, setIsLoading] = useState(false);
	const { name, nameError, changeName } = usePlayerName();
	const { phase, nextPhase } = useGamePhase();
	const [questionsWithAnswers, setQuestionsWithAnswers] = useState([]);
	const loadQuestionsWithAnswers = async () => {
		setIsLoading(true);
		const qwa = (await loadQuestions(getCurrentLanguage())).questionsWithAnswers;
		console.log(qwa);
		setQuestionsWithAnswers(qwa);
		setIsLoading(false);
	};
	const startGame = () => {
		if (!nameError) {
			nextPhase();
			loadQuestionsWithAnswers();
		}
	};

	return (
		<GameContainer texts={texts}>
			{isLoading && <LoadingContainer texts={texts} />}
			{!isLoading && phase === 'start' && <GameStart texts={texts} name={name} nameError={nameError} changeName={changeName} startGame={startGame} />}
			{!isLoading && phase === 'play' && <GamePlay texts={texts} nextPhase={nextPhase} questionsWithAnswers={questionsWithAnswers} />}
			{!isLoading && phase === 'end' && <GameEnd nextPhase={nextPhase} />}
		</GameContainer>
	);
};

export default Page;
