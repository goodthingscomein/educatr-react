import React from 'react';

// Import styles
import {MarginContainer} from './margin.styles';

// Component Props Interface
type Props = {
  height?: number;
};

// Render Component
const Margin: React.FC<Props> = ({height}) => <MarginContainer height={height} />;

export default Margin;
