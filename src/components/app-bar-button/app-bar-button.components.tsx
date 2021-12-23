import { IconButton } from '@mui/material';

type Props = {
	size: 'large' | 'medium' | 'small';
	edge: 'start' | 'end';
	clickAction?: () => unknown;
	children?: JSX.Element | JSX.Element[];
};

const AppBarIconButton: React.FC<Props> = ({ size, edge, clickAction, children }) => (
	<IconButton
		size={size}
		edge={edge}
		color='inherit'
		aria-label='open drawer'
		sx={{ mr: 2 }}
		onClick={clickAction ? () => clickAction() : undefined}>
		{children}
	</IconButton>
);

export default AppBarIconButton;
