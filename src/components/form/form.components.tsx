import React from 'react';

// Import styles
import { FormContainer } from './form.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	handleSubmit?: React.FormEventHandler<HTMLFormElement>;
};

// Render Component
const Form: React.FC<Props> = ({ children, handleSubmit }) => (
	<FormContainer onSubmit={handleSubmit}>{children}</FormContainer>
);

export default Form;
