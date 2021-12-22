import { IconButton } from '@mui/material';

type Props = {
	size: 'large' | 'medium' | 'small';
	edge: 'start' | 'end';
	onClickAction?: () => any;
	children?: JSX.Element | JSX.Element[];
};

const AppBarIconButton: React.FC<Props> = ({ size, edge, onClickAction, children }) => {
	// Toggle Drawer Function
	const clickAction = () => (event: any) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
		if (onClickAction == null) return;
		onClickAction();
	};

	return (
		<IconButton size={size} edge={edge} color='inherit' aria-label='open drawer' sx={{ mr: 2 }} onClick={clickAction()}>
			{children}
		</IconButton>
	);
};

export default AppBarIconButton;
