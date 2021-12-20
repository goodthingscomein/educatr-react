import {Typography} from '@mui/material';

type Variant = 'h6' | 'subtitle1' | 'subtitle2';

const SideNavDrawerList: React.FunctionComponent<{variant: Variant}> = ({children, variant}) => {
  return (
    <Typography variant={variant} noWrap component='div' sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
      {children}
    </Typography>
  );
};

export default SideNavDrawerList;
