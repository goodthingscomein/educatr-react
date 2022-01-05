import React from 'react';
import {ColorTypes} from '../../type-declarations/styled';

// Import styles
import {ColumnHalfContainer} from './column.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  backgroundColor?: ColorTypes;
  imgUrl?: string;
  imgDarken?: number;
  overflow?: string;
};

// Render Component
const Column: React.FC<Props> = ({children, backgroundColor, imgUrl, imgDarken, overflow}) => (
  <ColumnHalfContainer backgroundColor={backgroundColor} imgUrl={imgUrl} imgDarken={imgDarken} overflow={overflow}>
    {children}
  </ColumnHalfContainer>
);

export default Column;
