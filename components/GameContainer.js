import React from 'react';
import { getMyStyle } from './GameContainer.style.js';
import useStyle from '../hooks/useStyle';
import Head from 'next/head';
import RootContainer from './RootContainer.js';

const Component = ({ texts, children, route }) => {
	const { style } = useStyle(getMyStyle);

	return (
		<>
			<Head>
				<link href="/fonts/Pokemon/style.css" rel="stylesheet" />
			</Head>
			<RootContainer>
				<div style={style.header}>
					<p style={style.firstHeading}>{texts['heading-first']}</p>
					<p style={style.secondHeading}>{texts['heading-second']}</p>
				</div>
				<div style={style.content}>{children}</div>
				<div style={style.bottomBar}>
					<a style={style.imprintLink} onClick={() => route("imprint")} >
						{texts['imprint-link']}
					</a>
				</div>
			</RootContainer>
		</>
	);
};

export default Component;
