const handler = async () => {
	const result = { key: process.env.NEXT_PUBLIC_TEST_KEY };
	return result;
};

export default handler;
