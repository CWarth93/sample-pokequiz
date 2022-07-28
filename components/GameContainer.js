import React from 'react';
import { getMyStyle } from './GameContainer.style.js';
import useStyle from '../hooks/useStyle';
import Head from 'next/head';

const Component = ({ texts, children }) => {
	const { style } = useStyle(getMyStyle);

	return (
		<>
			<Head>
				<link href="/fonts/Pokemon/style.css" rel="stylesheet" />
			</Head>
			<div style={style.root}>
				<div style={style.header}>
					<p style={style.firstHeading}>{texts['heading-first']}</p>
					<p style={style.secondHeading}>{texts['heading-second']}</p>
				</div>
				<div style={style.content}>{children}</div>
			</div>
			<div style={style.bottomBar}>
				<a style={style.imprintLink} href="/imprint">
					{texts['imprint-link']}
				</a>
			</div>
		</>
	);
};

export default Component;
