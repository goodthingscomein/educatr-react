import React from 'react';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	css?: string;
	// var-name: type
	// var-function: () => any
};

// Render Component
const MessageTopBar: React.FC<Props> = ({ children, css }) => (
	<div>
		<h1>Hello World!</h1>
	</div>
);

export default MessageTopBar;
