import React from 'react';
import useStyle from '../hooks/useStyle';
import { getMyStyle } from './GameStart.style.js';

const Component = ({ texts, name, nameError, changeName, loadQuestionsWithAnswers, nextPhase, setIsLoading, highscore, userscore }) => {
	const { style } = useStyle(getMyStyle, { nameError }, [nameError]);

	const startGame = async () => {
		setIsLoading(true);
		await loadQuestionsWithAnswers();
		nextPhase();
		setIsLoading(false);
	};

	return (
		<>
			<img style={style.startPicture} src="/images/start.gif" alt="Start" />
			<div style={style.startInputContainer}>
				<input id="name-input" style={style.nameInput} type="text" placeholder={texts['name-input-label']} value={name} onChange={changeName} />
				<button
					style={style.startButton}
					onClick={() => {
						startGame();
					}}
					disabled={nameError}
					id="start-button"
				>
					{texts['start-button-label']}
				</button>
			</div>
			{userscore !== null && (
				<p style={style.scoreText}>
					{texts['score-pre']} {userscore}
				</p>
			)}
			{highscore.length > 0 && (
				<>
					<p style={style.ladderLabel}>{texts['ladder-label']}</p>
					<ul id="highscore-list" style={style.ladderList}>
						{highscore.map((result, index) => (
							<p key={index} style={style.ladderEntry}>
								{index + 1}. {result.name} ({result.score})
							</p>
						))}
					</ul>
				</>
			)}
		</>
	);
};

export default Component;
