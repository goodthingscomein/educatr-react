import { UserReducerAction } from './user.actions';

export interface UserReducerState {
	currentUser: any;
}

const INITIAL_STATE = {
	currentUser: null,
} as UserReducerState;

const userReducer = (state = INITIAL_STATE, action: UserReducerAction) => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
