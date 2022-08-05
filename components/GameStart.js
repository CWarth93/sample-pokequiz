import React, { useState } from 'react';
import useStyle from '../hooks/useStyle';
import { getMyStyle } from './GameStart.style.js';

const Component = ({ texts, nextPhase }) => {
	const [name, setName] = useState('');
	const changeName = (event) => {
		if (event.target.value.length >= 3) {
			setNameError(false);
		} else {
			setNameError(true);
		}
		setName(event.target.value);
	};
	const [nameError, setNameError] = useState(true);
	const { style } = useStyle(getMyStyle, { nameError }, [nameError]);
	const startGame = () => {
		if (!nameError) {
			// ToDo: request to start the game
			nextPhase();
		}
	};

	return (
		<>
			<img style={style.startPicture} src="/images/start.gif" alt="Start" />
			<div style={style.startInputContainer}>
				<input style={style.nameInput} type="text" placeholder={texts['name-input-label']} value={name} onChange={changeName} />
				<button style={style.startButton} onClick={startGame}>
					{texts['start-button-label']}
				</button>
			</div>
		</>
	);
};

export default Component;
