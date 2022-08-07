import React, { useState } from 'react';
import useStyle from '../hooks/useStyle';
import { getMyStyle } from './GameStart.style.js';

const Component = ({ texts, name, nameError, changeName, startGame }) => {
	const { style } = useStyle(getMyStyle, { nameError }, [nameError]);

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
