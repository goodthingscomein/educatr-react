import React from 'react';

// Import styles
import { CardContainer } from './form-card.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
};

// Render Component
const FormCard: React.FC<Props> = ({ children }) => <CardContainer>{children}</CardContainer>;

export default FormCard;
