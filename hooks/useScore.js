import { useState } from 'react';
import { postResult } from '../fetchers/api.js';

const hook = () => {
	const [userscore, setUserscore] = useState([]);
	const [highscore, setHighscore] = useState([]);

	const sendUserScore = async (name, userAnswers, correctAnswers) => {
		let score = 0;
		for (let i = 0; i < correctAnswers.length; i++) {
			if (correctAnswers[i] === userAnswers[i]) {
				score++;
			}
		}
		setUserscore(score);
		const res = await postResult(name, score);
		setHighscore(res.highscore);
	};

	return { sendUserScore, highscore, userscore };
};

export default hook;
