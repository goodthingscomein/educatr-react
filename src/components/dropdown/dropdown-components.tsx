import { ClickAwayListener } from '@mui/base';
import React from 'react';
import { ColorTypes } from '../../type-declarations/styled';

// Import styles
import { DropdownRelativePosition, DropdownAbsoluteContainer } from './dropdown.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	css?: string;
	backgroundColor: ColorTypes;
	displayDropDown: boolean;
	clickAwayAction: () => unknown;
};

// Render Component
const Dropdown: React.FC<Props> = ({ children, css, backgroundColor, displayDropDown, clickAwayAction }) => (
	<ClickAwayListener onClickAway={() => clickAwayAction()} mouseEvent='onMouseDown' touchEvent='onTouchStart'>
		<DropdownRelativePosition>
			{displayDropDown ? (
				<DropdownAbsoluteContainer backgroundColor={backgroundColor} css={css}>
					{children}
				</DropdownAbsoluteContainer>
			) : (
				''
			)}
		</DropdownRelativePosition>
	</ClickAwayListener>
);

export default Dropdown;
