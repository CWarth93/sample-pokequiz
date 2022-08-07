import { useState } from 'react';

const hook = () => {
	const [name, setName] = useState('');
	const changeName = (event) => {
		if (event.target.value.length >= 3) {
			setNameError(false);
		} else {
			setNameError(true);
		}
		setName(event.target.value);
	};
	const [nameError, setNameError] = useState(true);

	return { name, nameError, changeName };
};

export default hook;
