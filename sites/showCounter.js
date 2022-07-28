import React from 'react';
import CounterComponent from '../components/Counter.js';

const Page = ({ counter, route }) => {
	return (
		<>
			<CounterComponent counter={counter} showOnly />
			<button onClick={() => route('activeCounter')}>edit mode</button>
		</>
	);
};

export default Page;
