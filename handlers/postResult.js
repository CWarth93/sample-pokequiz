import { saveNewUserScore, loadHighscore } from '../business/score';

const handler = async (name, score) => {
	await saveNewUserScore(name, score);
	const highscore = await loadHighscore();
	const result = { highscore };
	return result;
};

export default handler;
