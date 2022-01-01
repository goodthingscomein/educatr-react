import React from 'react';
import {ColorTypes} from '../../type-declarations/styled';

// Import styles
import {ColumnContainer} from './column.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  backgroundColor?: ColorTypes;
  imgUrl?: string;
  imgDarken?: number;
};

// Render Component
const Column: React.FC<Props> = ({children, backgroundColor, imgUrl, imgDarken}) => (
  <ColumnContainer backgroundColor={backgroundColor} imgUrl={imgUrl} imgDarken={imgDarken}>
    {children}
  </ColumnContainer>
);

export default Column;
