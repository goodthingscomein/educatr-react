import React from 'react';
import {ColorTypes} from '../../type-declarations/styled';

// Import styles
import {CardContainer} from './card.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  height: number;
  width: number;
  backgroundColor: ColorTypes;
};

// Render Component
const Card: React.FC<Props> = ({children, height, width, backgroundColor}) => (
  <CardContainer height={height} width={width} backgroundColor={backgroundColor} cardHoverGrowMultiplier={1.06}>
    {children}
  </CardContainer>
);

export default Card;
