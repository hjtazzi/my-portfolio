import type { AppState } from "../app/AppContext";
import type { AppAction } from "../app/appReducer";


export const setIsFirstLoad = (payload: AppState['isFirstLoad']): AppAction => ({
  type: 'SET_FIRST_LOAD',
  payload
})

export const setIsMobileMenu = (payload: AppState['isMobileMenu']): AppAction => ({
  type: 'SET_MOBILE_MENU',
  payload
});

