import React from 'react';
import { ColorTypes } from '../../type-declarations/styled';

// Import styles
import { CardContainer } from './card.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	backgroundColor?: ColorTypes;
};

// Render Component
const Card: React.FC<Props> = ({ children, backgroundColor }) => (
	<CardContainer backgroundColor={backgroundColor}>{children}</CardContainer>
);

export default Card;
