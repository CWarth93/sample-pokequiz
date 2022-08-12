import { connect, disconnect, getDb } from '../services/mongodb';

const saveNewUserScore = async (name, score) => {
	await connect(process.env.MONGODB_NAME, process.env.MONGODB_PASSWORD, process.env.MONGODB_CLUSTER, 'pokequiz');

	await getDb().collection('games').insertOne({
		name,
		score,
	});

	await disconnect();
};

const loadHighscore = async () => {
	await connect(process.env.MONGODB_NAME, process.env.MONGODB_PASSWORD, process.env.MONGODB_CLUSTER, 'pokequiz');

	const highscore = await getDb().collection('games').find().sort({ score: -1 }).limit(5).toArray();

	await disconnect();

	return highscore;
};

export { saveNewUserScore, loadHighscore };
