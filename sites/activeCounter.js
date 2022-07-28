import React from 'react';
import CounterComponent from '../components/Counter.js';

const Page = ({ counter, setCounter, route }) => {
	return (
		<>
			<CounterComponent counter={counter} setCounter={setCounter} />
			<button onClick={() => route('showCounter')}>show only mode</button>
		</>
	);
};

export default Page;
