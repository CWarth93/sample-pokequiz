import { generateQuestionsWithAnswers } from '../business/questions';

const handler = async (language) => {
	const questionsWithAnswers = await generateQuestionsWithAnswers(15, language, 3, 151);
	const result = { questionsWithAnswers };
	return result;
};

export default handler;
