import React from 'react';
import { getMyStyle } from './RootContainer.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ children }) => {
	const { style } = useStyle(getMyStyle);

	return <div style={style.root}>{children}</div>;
};

export default Component;
