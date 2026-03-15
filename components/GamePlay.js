import React, { useEffect, useState } from 'react';
import { getMyStyle } from './GamePlay.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ texts, name, questionsWithAnswers, questionIndex, resetQuestionnaire, answer, userAnswers, sendUserScore, nextPhase, setIsLoading }) => {
	const { style } = useStyle(getMyStyle);
	const [timer, setTimer] = useState(15);
	const [imagesLoaded, setImagesLoaded] = useState(0);
	const currentOptions = questionsWithAnswers[questionIndex].options;
	const allImagesReady = imagesLoaded >= currentOptions.length;

	useEffect(() => {
		setImagesLoaded(0);
	}, [questionIndex]);

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

			<div style={{ ...style.optionsContainer, visibility: allImagesReady ? 'visible' : 'hidden' }} id="answers-container">
				{currentOptions.map((option, index) => (
					<img
						style={style.pokemonOption}
						id={'answer-' + index}
						key={'pokemon-' + option}
						src={'/images/pokemon/' + option + '.png'}
						onLoad={() => setImagesLoaded((prev) => prev + 1)}
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
