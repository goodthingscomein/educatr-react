import styled from 'styled-components';

// Message Container Props
type MessageContainerProps = {
  ourMessage?: boolean;
};

export const MessageContainer = styled.div<MessageContainerProps>`
  position: relative;
  width: 100%;
  margin-top: 6px;
  display: flex;
  justify-content: ${(props) => (props.ourMessage ? 'flex-end' : 'flex-start')};
`;

export const MessageTextContainer = styled.div<MessageContainerProps>`
  background-color: ${(props) =>
    props.ourMessage ? props.theme.themeColors.primary : props.theme.themeColors.lightGrey};
  height: fit-content;
  width: fit-content;
  max-width: 40%;
  padding: 8px;
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  align-items: center;
`;
