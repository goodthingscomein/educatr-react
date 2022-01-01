import React from 'react';

// Import styles
import {CardListContainer} from './card-list.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
};

// Render Component
const CardList: React.FC<Props> = ({children}) => <CardListContainer>{children}</CardListContainer>;

export default CardList;
