import React from 'react';
import useStyle from '../hooks/useStyle';
import { getMyStyle } from './GameStart.style.js';

const Component = ({ texts, name, nameError, changeName, loadQuestionsWithAnswers, nextPhase, setIsLoading }) => {
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
				<input style={style.nameInput} type="text" placeholder={texts['name-input-label']} value={name} onChange={changeName} />
				<button
					style={style.startButton}
					onClick={() => {
						startGame();
					}}
					disabled={nameError}
				>
					{texts['start-button-label']}
				</button>
			</div>
		</>
	);
};

export default Component;
