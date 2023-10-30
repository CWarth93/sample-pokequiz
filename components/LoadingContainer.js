import React from 'react';
import useStyle from '../hooks/useStyle';
import { getMyStyle } from './LoadingContainer.style.js';

const Component = ({ texts }) => {
	const { style } = useStyle(getMyStyle);
	return (
		<>
			<img style={style.loadingPicture} src="/images/loading.gif" alt="Loading" id="loading-container" />
			<p style={style.loadingText}>{texts['loading-text']}</p>
		</>
	);
};

export default Component;
