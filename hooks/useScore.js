import { useState } from 'react';
import { postResult, loadHighscore as loadHighscoreFromApi } from '../fetchers/api.js';

const hook = () => {
	const [userscore, setUserscore] = useState(null);
	const [highscore, setHighscore] = useState([]);
	const [highscoreLoaded, setHighscoreLoaded] = useState(false);

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

	const loadHighscore = async () => {
		const res = await loadHighscoreFromApi();
		setHighscore(res.highscore);
		setHighscoreLoaded(true);
	};

	return { sendUserScore, loadHighscore, highscore, highscoreLoaded, userscore };
};

export default hook;
