import getTestKey from '../../handlers/getTestKey';

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
		if (endpoint === 'getTestKey') {
			if (method === 'GET') {
				result = await getTestKey();
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
