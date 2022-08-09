import loadQuestions from '../../handlers/loadQuestions';

export default async (req, res) => {
	try {
		// read request
		const {
			query: { endpoint },
			method,
			headers,
			body,
		} = req;

		// process request
		let result;
		if (endpoint === 'loadQuestions') {
			if (method === 'GET') {
				const { language } = headers;
				result = await loadQuestions(language);
			} else {
				throw new Error('Wrong request method.');
			}
		} else {
			throw new Error('Endpoint doesnt exist.');
		}

		// send response
		res.status('200').json(result);
	} catch (error) {
		res.status('500').json({ error: error.toString().split('Error: ')[1] });
	}
};
