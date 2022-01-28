import styled from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

// Colored background
interface CardContainerProps {
  backgroundColor?: ColorTypes;
}

export const CardContainer = styled.div<CardContainerProps>`
  padding: 48px 36px;
  min-height: fit-content;
  width: 100%;
  background-color: ${(props) => props.theme.getColor(props.backgroundColor || 'white')};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  overflow: hidden;
`;
