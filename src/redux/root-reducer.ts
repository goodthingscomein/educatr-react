import { combineReducers } from 'redux';

import navigationReducer from './navigation/navigation.reducer';

const reducers = combineReducers({
	navigation: navigationReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
