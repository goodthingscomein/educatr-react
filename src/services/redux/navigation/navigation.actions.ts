type NavigationActionTypes = 'OPEN_SIDE_NAV_DRAWER';

export interface NavigationReducerAction {
	type: NavigationActionTypes;
	payload: unknown;
}

export const setDrawerIsOpen = (open: boolean) =>
	({
		type: 'OPEN_SIDE_NAV_DRAWER',
		payload: open,
	} as NavigationReducerAction);
