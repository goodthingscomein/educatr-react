import React from 'react';
import Button from '../../../components/button/button.components';
import Dropdown from '../../../components/dropdown/dropdown-components';
import { MainTheme } from '../../../themes/main.theme';

// Props
type Props = {
	showDropdown: boolean;
	clickAwayAction: () => unknown;
};

// Render Component
const MessageOptionsDropdown: React.FC<Props> = ({ showDropdown, clickAwayAction }) => (
	<Dropdown
		backgroundColor='white'
		displayDropDown={showDropdown}
		clickAwayAction={() => clickAwayAction()}
		css={`
			top: 20px;
			right: 0;
			border: 1px solid ${MainTheme.themeColors.borderColor};
			border-top: none;
			padding: 12px 0;
		`}>
		<Button
			variant='solid'
			size='medium'
			backgroundColor='transparent'
			hoverBackgroundColor='lightGrey'
			textColor='textDark'
			minWidth='220px'>
			Test Button
		</Button>
		<Button
			variant='solid'
			size='medium'
			backgroundColor='transparent'
			hoverBackgroundColor='lightGrey'
			textColor='textDark'
			minWidth='220px'>
			Test Button
		</Button>
		<Button
			variant='solid'
			size='medium'
			backgroundColor='transparent'
			hoverBackgroundColor='lightGrey'
			textColor='textDark'
			minWidth='220px'>
			Test Button
		</Button>
	</Dropdown>
);

export default MessageOptionsDropdown;
