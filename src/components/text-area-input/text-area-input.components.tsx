import React, { useState } from 'react';

// Import styles
import { TextAreaInputContainer } from './text-area-input.styles';

// Component Props Interface
type Props = {
  placeholder: string;
  value: string;
  onChangeStateDispatch: React.Dispatch<React.SetStateAction<any>>;
  small?: boolean;
};

// Render Component
const TextAreaInput: React.FC<Props> = ({ placeholder, value, onChangeStateDispatch, small }) => {
  const defaultHeight = small ? 28 : 32;
  const [textAreaHeight, setTextAreaHeight] = useState(defaultHeight);

  // Handle change of an input field
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    stateDispatch: React.Dispatch<React.SetStateAction<any>>
  ) => {
    // Set the value of the input using the state dispatch we passed
    stateDispatch(event.target.value);
    setTextAreaHeight(event.target.scrollHeight + 2);
  };

  // Adjust the height of the text area
  if (value === '' && textAreaHeight !== defaultHeight) setTextAreaHeight(defaultHeight);

  // Render component
  return (
    <TextAreaInputContainer
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e, onChangeStateDispatch)}
      height={textAreaHeight}
      small={small}
    />
  );
};

export default TextAreaInput;
