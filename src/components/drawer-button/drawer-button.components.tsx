import React from 'react';
import { ColorTypes, FontSizes, FontWeight } from '../../type-declarations/styled';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { State } from '../../redux/root-reducer';

// Import styles
import { DrawerButtonContainer } from './drawer-button.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;

	textColor: ColorTypes;
	hoverTextColor?: ColorTypes;
	size?: FontSizes;
	fontWeight?: FontWeight;

	href?: string;
	clickAction?: () => unknown;

	selected?: boolean;
	isDrawerOpen: boolean;
};

// Render Component
const DrawerButton: React.FC<Props> = ({
	children,
	textColor,
	hoverTextColor,
	size,
	fontWeight,
	href,
	clickAction,
	selected,
	isDrawerOpen,
}) => (
	<DrawerButtonContainer
		textColor={textColor}
		hoverTextColor={hoverTextColor || textColor}
		size={size}
		fontWeight={fontWeight}
		href={href}
		onClick={clickAction ? () => clickAction() : undefined}
		selected={selected}
		isDrawerOpen={isDrawerOpen}>
		{children}
	</DrawerButtonContainer>
);

const mapStateToProps = (state: State) => ({
	isDrawerOpen: state.navigation.isDrawerOpen,
});

export default connect(mapStateToProps)(DrawerButton);
