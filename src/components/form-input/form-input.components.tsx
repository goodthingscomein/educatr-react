import React, { useState } from 'react';

// Import styles
import { InputFieldContainer, InputField, InputFieldLabel, PasswordHiddenToggleButton } from './form-input.styles';

// Import custom icons
import VisibleIcon from '@mui/icons-material/VisibilityOutlined';
import HiddenIcon from '@mui/icons-material/VisibilityOffOutlined';

// Used to identify fields for error detection
export enum INPUT_FIELD_ERROR_ID {
  EMAIL,
  PASSWORD,
  CONFIRM_PASSWORD,
}
export type InputErrorMessage = {
  fieldId: INPUT_FIELD_ERROR_ID;
  message: string;
};

// Component Props Interface
type Props = {
  type: React.HTMLInputTypeAttribute;
  label: string;
  inputId: string;
  hasPassword?: boolean;
  value: string | number;
  onChangeStateDispatch: React.Dispatch<React.SetStateAction<any>>;
};

// Render Component
const FormInput: React.FC<Props> = ({ type, label, inputId, value, onChangeStateDispatch, hasPassword }) => {
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
          {passwordHidden ? <HiddenIcon fontSize='medium' /> : <VisibleIcon fontSize='medium' />}
        </PasswordHiddenToggleButton>
      ) : (
        ''
      )}
    </InputFieldContainer>
  );
};

export default FormInput;
