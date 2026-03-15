import React, { useEffect } from 'react';
import GameContainer from '../components/GameContainer.js';
import GameStart from '../components/GameStart.js';
import GamePlay from '../components/GamePlay.js';
import LoadingContainer from '../components/LoadingContainer.js';
import useName from '../hooks/useName';
import usePhase from '../hooks/usePhase';
import useQuestionnaire from '../hooks/useQuestionnaire';
import useLoading from '../hooks/useLoading';
import useScore from '../hooks/useScore';

const Page = ({ route, texts }) => {
	const { isLoading, setIsLoading } = useLoading();
	const { name, nameError, changeName } = useName();
	const { phase, nextPhase } = usePhase();
	const { loadQuestionsWithAnswers, questionsWithAnswers, questionIndex, resetQuestionnaire, answer, userAnswers } = useQuestionnaire();
	const { sendUserScore, loadHighscore, highscore, highscoreLoaded, userscore } = useScore();

	useEffect(() => {
		loadHighscore();
	}, []);

	return (
		<GameContainer texts={texts} route={route}>
			{(isLoading || (phase === 'start' && !highscoreLoaded)) && <LoadingContainer texts={texts} />}
			{!isLoading && highscoreLoaded && phase === 'start' && (
				<GameStart
					texts={texts}
					name={name}
					nameError={nameError}
					changeName={changeName}
					loadQuestionsWithAnswers={loadQuestionsWithAnswers}
					nextPhase={nextPhase}
					setIsLoading={setIsLoading}
					highscore={highscore}
					userscore={userscore}
				/>
			)}
			{!isLoading && phase === 'play' && (
				<GamePlay
					texts={texts}
					name={name}
					questionsWithAnswers={questionsWithAnswers}
					questionIndex={questionIndex}
					resetQuestionnaire={resetQuestionnaire}
					answer={answer}
					userAnswers={userAnswers}
					sendUserScore={sendUserScore}
					nextPhase={nextPhase}
					setIsLoading={setIsLoading}
				/>
			)}
		</GameContainer>
	);
};

export default Page;
