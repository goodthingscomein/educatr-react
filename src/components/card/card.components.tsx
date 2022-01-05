import React from 'react';
import {ColorTypes} from '../../type-declarations/styled';

// Import styles
import {CardContainer} from './card.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  height: number;
  backgroundColor?: ColorTypes;
};

// Render Component
const Card: React.FC<Props> = ({children, height, backgroundColor}) => (
  <CardContainer height={height} backgroundColor={backgroundColor}>
    {children}
  </CardContainer>
);

export default Card;
