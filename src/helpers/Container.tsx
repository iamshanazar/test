import type { FC, ReactNode } from 'react';
import React from 'react';

const Container: FC<{ children: ReactNode }> = ({ children }) => (
	<div
		style={{
			margin: '10px',
		}}
	>
		{children}
	</div>
);

export default Container;
