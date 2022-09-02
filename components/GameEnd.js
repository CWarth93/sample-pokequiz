import React from 'react';
import { getMyStyle } from './GameEnd.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ userscore, highscore, texts, nextPhase }) => {
	const { style } = useStyle(getMyStyle);
	return (
		<>
			<p style={style.scoreText}>
				{texts['score-pre']} {userscore}
			</p>
			<p style={style.ladderLabel}>{texts['ladder-label']}</p>
			<ul style={style.ladderList}>
				{highscore.map((result, index) => (
					<p style={style.ladderEntry}>
						{index + 1}. {result.name} ({result.score})
					</p>
				))}
			</ul>
			<button style={style.finishButton} onClick={nextPhase}>
				{texts['finish-button-label']}
			</button>
		</>
	);
};

export default Component;
