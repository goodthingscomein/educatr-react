import { combineReducers } from 'redux';

import userReducer, { UserReducerState } from './user/user.reducer';
import navigationReducer, { NavigationReducerState } from './navigation/navigation.reducer';

export interface CustomMapStateToProps {
	user: UserReducerState;
	navigation: NavigationReducerState;
}

export default combineReducers({
	user: userReducer,
	navigation: navigationReducer,
});
