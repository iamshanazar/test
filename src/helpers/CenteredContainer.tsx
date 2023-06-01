import type { FC, ReactNode } from 'react';
import React from 'react';

const CenteredContainer: FC<{ children: ReactNode }> = ({ children }) => (
	<div
		style={{
			width: '100%',
			height: '700px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		{children}
	</div>
);

export default CenteredContainer;
