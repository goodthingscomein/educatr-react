import { AUTH_TYPES } from './auth.enum';
import { AuthAction } from './auth.types';

// Set side nav drawer is open state
export const setAuthToken = (authToken: string, authTokenExpiry: number) =>
	({
		type: AUTH_TYPES.SET_AUTH_TOKEN,
		payload: { authToken, authTokenExpiry },
	} as AuthAction);
