import styled from 'styled-components';
import {ColorTypes} from '../../type-declarations/styled';

// Colored background
interface CardContainerProps {
  height: number;
  width: number;
  backgroundColor: ColorTypes;
  cardHoverGrowMultiplier: number;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  overflow: hidden;
  background-color: ${(props) => props.theme.getColor(props.backgroundColor)};
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: scale(${(props) => props.cardHoverGrowMultiplier});
  }
`;
