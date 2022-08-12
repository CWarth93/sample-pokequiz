import { saveNewUserScore, loadHighscore } from '../business/score';

const handler = async (name, userscore) => {
	await saveNewUserScore(name, userscore);
	const highscore = await loadHighscore();
	const result = { highscore };
	return result;
};

export default handler;
