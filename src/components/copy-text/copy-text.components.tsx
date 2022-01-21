import React from 'react';
import { ColorTypes, FontSizes, FontWeight, MessageColorTypes } from '../../type-declarations/styled';

// Import styles
import { CopyTextStyles } from './copy-text.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	size: FontSizes;
	fontWeight?: FontWeight;
	color: ColorTypes | MessageColorTypes;
};

// Render Component
const CopyText: React.FC<Props> = ({ children, size, fontWeight, color }) => (
	<CopyTextStyles size={size} fontWeight={fontWeight} color={color}>
		{children}
	</CopyTextStyles>
);

export default CopyText;
