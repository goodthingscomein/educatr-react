import { AUTH_TYPES } from './auth.enum';
import { AuthAction } from './auth.types';

interface AuthState {
	authToken: string;
	authTokenExpiry: number;
}

const INITIAL_STATE = {
	authToken: '',
	authTokenExpiry: 0,
} as AuthState;

const authReducer = (state: AuthState = INITIAL_STATE, action: AuthAction) => {
	switch (action.type) {
		case AUTH_TYPES.SET_AUTH_TOKEN:
			return action.payload;
		default:
			return state;
	}
};

export default authReducer;
