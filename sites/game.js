import React from 'react';
import GameContainer from '../components/GameContainer.js';
import GameStart from '../components/GameStart.js';
import GamePlay from '../components/GamePlay.js';
import GameEnd from '../components/GameEnd.js';
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
	const { sendUserScore, highscore, userscore } = useScore();

	return (
		<GameContainer texts={texts} route={route}>
			{isLoading && <LoadingContainer texts={texts} />}
			{!isLoading && phase === 'start' && (
				<GameStart
					texts={texts}
					name={name}
					nameError={nameError}
					changeName={changeName}
					loadQuestionsWithAnswers={loadQuestionsWithAnswers}
					nextPhase={nextPhase}
					setIsLoading={setIsLoading}
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
			{!isLoading && phase === 'end' && <GameEnd nextPhase={nextPhase} texts={texts} highscore={highscore} userscore={userscore} />}
		</GameContainer>
	);
};

export default Page;
