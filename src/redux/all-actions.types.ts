import { AuthAction } from './auth/auth.types';
import { NavigationAction } from './navigation/navigation.types';

export type Action = NavigationAction | AuthAction;
