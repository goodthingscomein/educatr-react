import React from 'react';
import { ColorTypes } from '../../type-declarations/styled';

// Import styles
import { BottomShapeContainer } from './bottom-shape-divider.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	shapeColor: ColorTypes;
};

// Render Component
const BottomShapeDivider: React.FC<Props> = ({ children, shapeColor }) => (
	<BottomShapeContainer shapeColor={shapeColor}>{children}</BottomShapeContainer>
);

export default BottomShapeDivider;
