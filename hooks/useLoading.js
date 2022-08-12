import { useState } from 'react';

const hook = () => {
	const [isLoading, setIsLoading] = useState(false);

	return { isLoading, setIsLoading };
};

export default hook;
