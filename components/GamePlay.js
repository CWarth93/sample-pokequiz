import React, { useEffect } from 'react';
import { getMyStyle } from './GamePlay.style.js';
import useStyle from '../hooks/useStyle';
import Timer from 'react-compound-timer';

const tiRef = React.createRef();

const Component = ({ texts, name, questionsWithAnswers, questionIndex, resetQuestionnaire, answer, userAnswers, sendUserScore, nextPhase, setIsLoading }) => {
	const { style } = useStyle(getMyStyle);

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

	useEffect(() => {
		if (questionIndex === questionsWithAnswers.length - 1) {
			endGame();
		}
	}, [questionIndex, questionsWithAnswers]);

	return (
		<div style={style.questionContainer}>
			<p style={style.questionText}>
				{texts['question-count-pre']} {questionIndex + 1}: {questionsWithAnswers[questionIndex].text}
			</p>
			<Timer
				id="timer"
				ref={tiRef}
				onStop={() => {
					answer(-1);
				}}
				checkpoints={[
					{
						time: 0,
						callback: () => {
							try {
								if (tiRef.current !== null) {
									tiRef.current.stop();
									tiRef.current.reset();
									tiRef.current.start();
								} else {
									throw 'no timer available';
								}
							} catch (e) {
								console.error(e);
							}
						},
					},
				]}
				initialTime={15000}
				direction="backward"
			>
				{({ reset }) => (
					<div>
						<div style={style.optionsContainer}>
							{questionsWithAnswers[questionIndex].options.map((option) => (
								<img
									style={style.pokemonOption}
									id={'pokemon-' + option}
									key={'pokemon-' + option}
									src={'/images/pokemon/' + option + '.png'}
									onClick={() => {
										answer(option);
										reset();
									}}
								/>
							))}
						</div>
						<div style={style.timerContainer}>
							<Timer.Seconds id="timer-seconds" />
						</div>
					</div>
				)}
			</Timer>
		</div>
	);
};

export default Component;
