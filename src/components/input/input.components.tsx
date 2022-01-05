import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';

// Import styles
import {InputFieldContainer, InputField, InputFieldLabel, PasswordHiddenToggleButton} from './input.styles';

// Component Props Interface
type Props = {
  type: React.HTMLInputTypeAttribute;
  label: string;
  inputId: string;
  hasPassword?: boolean;
};

// Render Component
const Input: React.FC<Props> = ({type, label, inputId, hasPassword}) => {
  // Password hidden states
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [inputFieldType, setInputFieldType] = useState(type);

  // Toggle password hidden
  const togglePasswordHidden = () => {
    setPasswordHidden(!passwordHidden);
    passwordHidden ? setInputFieldType('text') : setInputFieldType('password');
  };

  return (
    <InputFieldContainer>
      <InputFieldLabel htmlFor={inputId}>{label}</InputFieldLabel>
      <InputField type={inputFieldType} name={inputId} id={inputId} autoComplete='off' />
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
