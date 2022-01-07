import { AUTH_TYPES } from './auth.enum';

// Set auth token action types
export interface SetAuthTokenPayload {
	authToken: string;
	authTokenExpiry: number;
}
interface SetAuthTokenAction {
	type: AUTH_TYPES.SET_AUTH_TOKEN;
	payload: SetAuthTokenPayload;
}

export type AuthAction = SetAuthTokenAction;
