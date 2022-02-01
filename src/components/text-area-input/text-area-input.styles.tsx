import styled from 'styled-components';

// Text Area Input Props
type TextAreaInputProps = {
  height: number;
  small?: boolean;
};

export const TextAreaInputContainer = styled.textarea<TextAreaInputProps>`
  width: 100%;
  padding: 4px 12px;
  height: ${(props) => props.height}px;
  font-size: ${(props) => (props.small ? props.theme.getFontSize('x-small') : props.theme.getFontSize('medium'))};
  font-weight: 400;
  max-height: 136px;
  border: 1px solid ${(props) => props.theme.themeColors.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.themeColors.textDark};
  box-shadow: 0 2px 4px 0 ${(props) => props.theme.themeColors.shadow};
  outline: none;
  resize: none;

  ::placeholder {
    color: ${(props) => props.theme.themeColors.textLight};
    opacity: 1;
  }
`;
