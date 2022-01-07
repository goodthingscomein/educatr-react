import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

// Import styles
import { InputFieldContainer, InputField, InputFieldLabel, PasswordHiddenToggleButton } from './input.styles';

// Component Props Interface
type Props = {
	type: React.HTMLInputTypeAttribute;
	label: string;
	inputId: string;
	hasPassword?: boolean;
	value: string | number;
	onChangeStateDispatch: React.Dispatch<React.SetStateAction<any>>;
	hasError?: boolean;
};

// Render Component
const Input: React.FC<Props> = ({ type, label, inputId, value, onChangeStateDispatch, hasPassword }) => {
	// Password hidden states
	const [passwordHidden, setPasswordHidden] = useState(true);
	const [inputFieldType, setInputFieldType] = useState(type);

	// Toggle password hidden
	const togglePasswordHidden = () => {
		setPasswordHidden(!passwordHidden);
		passwordHidden ? setInputFieldType('text') : setInputFieldType('password');
	};

	// Handle change of an input field
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		stateDispatch: React.Dispatch<React.SetStateAction<any>>
	) => {
		// Set the value of the input using the state dispatch we passed
		stateDispatch(event.target.value);
	};

	return (
		<InputFieldContainer>
			<InputFieldLabel htmlFor={inputId}>{label}</InputFieldLabel>
			<InputField
				value={value}
				type={inputFieldType}
				name={inputId}
				id={inputId}
				onChange={(e) => handleChange(e, onChangeStateDispatch)}
				autoComplete='off'
			/>
			{hasPassword ? (
				<PasswordHiddenToggleButton onClick={() => togglePasswordHidden()}>
					{passwordHidden ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
				</PasswordHiddenToggleButton>
			) : (
				''
			)}
		</InputFieldContainer>
	);
};

export default Input;
