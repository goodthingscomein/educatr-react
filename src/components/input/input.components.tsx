import React from 'react';

// Import styles
import { InputContainer } from './input.styles';

// Component Props Interface
type Props = {
	placeholder: string;
	value: string | number;
	onChangeStateDispatch: React.Dispatch<React.SetStateAction<any>>;
};

// Render Component
const Input: React.FC<Props> = ({ placeholder, value, onChangeStateDispatch }) => {
	// Handle change of an input field
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		stateDispatch: React.Dispatch<React.SetStateAction<any>>
	) => {
		// Set the value of the input using the state dispatch we passed
		stateDispatch(event.target.value);
	};

	return (
		<InputContainer
			placeholder={placeholder}
			value={value}
			onChange={(e) => handleChange(e, onChangeStateDispatch)}
			autoComplete='off'
		/>
	);
};

export default Input;
