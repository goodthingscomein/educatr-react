import React, { useState } from 'react';

// Import styles
import { TextAreaInputContainer } from './text-area-input.styles';

// Component Props Interface
type Props = {
	placeholder: string;
	value: string;
	onChangeStateDispatch: React.Dispatch<React.SetStateAction<any>>;
};

// Render Component
const TextAreaInput: React.FC<Props> = ({ placeholder, value, onChangeStateDispatch }) => {
	const defaultHeight = 36;
	const [textAreaHeight, setTextAreaHeight] = useState(defaultHeight);

	// Handle change of an input field
	const handleChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
		stateDispatch: React.Dispatch<React.SetStateAction<any>>
	) => {
		// Set the value of the input using the state dispatch we passed
		stateDispatch(event.target.value);
		event.target.value === '' ? setTextAreaHeight(defaultHeight) : setTextAreaHeight(event.target.scrollHeight + 2);
	};
	return (
		<TextAreaInputContainer
			placeholder={placeholder}
			value={value}
			onChange={(e) => handleChange(e, onChangeStateDispatch)}
			height={textAreaHeight}
		/>
	);
};

export default TextAreaInput;
