import { combineReducers } from 'redux';

import navigationReducer from './navigation/navigation.reducer';
import authReducer from './auth/auth.reducer';

const reducers = combineReducers({
	navigation: navigationReducer,
	auth: authReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
