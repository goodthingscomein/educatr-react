import React from 'react';
import { ColorTypes, FontSizes, FontWeight } from '../../type-declarations/styled';

// Import styles
import { SubmitButtonContainer } from './submit-button.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	size: FontSizes;
	fontWeight?: FontWeight;
	textColor: ColorTypes;
	hoverTextColor?: ColorTypes;
	backgroundColor: ColorTypes;
	hoverBackgroundColor?: ColorTypes;

	// Padding
	padding?: string;
};

// Render Component
const SubmitButton: React.FC<Props> = ({
	children,
	size,
	fontWeight,
	textColor,
	hoverTextColor,
	backgroundColor,
	hoverBackgroundColor,
	padding,
}) => (
	<SubmitButtonContainer
		type='submit'
		size={size}
		fontWeight={fontWeight}
		textColor={textColor}
		hoverTextColor={hoverTextColor || textColor}
		backgroundColor={backgroundColor}
		hoverBackgroundColor={hoverBackgroundColor || backgroundColor}
		padding={padding}>
		{children}
	</SubmitButtonContainer>
);

export default SubmitButton;
