import React from 'react';

// Import styles
import { MarginContainer } from './margin.styles';

// Component Props Interface
type Props = {
  height?: string;
  width?: string;
};

// Render Component
const Margin: React.FC<Props> = ({ height, width }) => <MarginContainer height={height} width={width} />;

export default Margin;
