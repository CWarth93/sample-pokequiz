import { loadHighscore } from '../business/score';

const handler = async () => {
	const highscore = await loadHighscore();
	const result = { highscore };
	return result;
};

export default handler;
