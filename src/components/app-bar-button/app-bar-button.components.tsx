import { IconButton } from '@mui/material';

const AppBarButton: React.FunctionComponent<{ size: 'large' | 'medium' | 'small'; edge: 'start' | 'end' }> = ({
  children,
  size,
  edge,
}) => {
  return (
    <IconButton size={size} edge={edge} color='inherit' aria-label='open drawer' sx={{ mr: 2 }}>
      {children}
    </IconButton>
  );
};

export default AppBarButton;
