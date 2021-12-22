type UserActionTypes = 'SET_CURRENT_USER';

export interface UserReducerAction {
	type: UserActionTypes;
	payload: unknown;
}

export const setCurrentUser = (user: any) =>
	({
		type: 'SET_CURRENT_USER',
		payload: user,
	} as UserReducerAction);
