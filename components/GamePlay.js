import React, { useEffect, useState } from 'react';
import { getMyStyle } from './GamePlay.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ texts, name, questionsWithAnswers, questionIndex, resetQuestionnaire, answer, userAnswers, sendUserScore, nextPhase, setIsLoading }) => {
	const { style } = useStyle(getMyStyle);
	const [timer, setTimer] = useState(15);

	useEffect(() => {
		const timerInterval = setInterval(() => {
			setTimer((prevTime) => prevTime - 1);

			if (timer === 0) {
				answer(-1);
				resetTimer();
			}
		}, 1000);

		return () => clearInterval(timerInterval);
	}, [answer, timer]);

	useEffect(() => {
		if (questionIndex === questionsWithAnswers.length - 1) {
			endGame();
		}
	}, [questionIndex, questionsWithAnswers]);

	const endGame = async () => {
		setIsLoading(true);
		await sendUserScore(
			name,
			userAnswers,
			questionsWithAnswers.map((q) => q.answer)
		);
		resetQuestionnaire();
		nextPhase();
		setIsLoading(false);
	};

	const resetTimer = () => {
		setTimer(15);
	};

	return (
		<div style={style.questionContainer}>
			<p style={style.questionText}>
				{texts['question-count-pre']} {questionIndex + 1}: {questionsWithAnswers[questionIndex].text}
			</p>

			<div style={style.optionsContainer} id="answers-container">
				{questionsWithAnswers[questionIndex].options.map((option, index) => (
					<img
						style={style.pokemonOption}
						id={'answer-' + index}
						key={'pokemon-' + option}
						src={'/images/pokemon/' + option + '.png'}
						onClick={() => {
							answer(option);
							resetTimer();
						}}
					/>
				))}
			</div>

			<div style={style.timerContainer}>
				<p>{timer}</p>
			</div>
		</div>
	);
};

export default Component;
