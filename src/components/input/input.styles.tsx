import styled, { css } from 'styled-components';

// Input Container Props
type InputContainerProps = {
  hasDropShadow?: boolean;
};

const DropShadowStyles = css`
  box-shadow: 0 2px 4px 0 ${(props) => props.theme.themeColors.shadow};
`;

export const InputContainer = styled.input<InputContainerProps>`
  width: 100%;
  padding: 4px 12px;
  border: 1px solid ${(props) => props.theme.themeColors.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.themeColors.textDark};
  outline: none;
  ${(props) => props.hasDropShadow && DropShadowStyles};
  ::placeholder {
    color: ${(props) => props.theme.themeColors.textLight};
    opacity: 1;
  }
`;
