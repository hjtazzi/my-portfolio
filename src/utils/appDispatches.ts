import type { AppAction, AppState } from "../types";


export const setIsFirstLoad = (payload: AppState['isFirstLoad']): AppAction => ({
  type: 'SET_FIRST_LOAD',
  payload
});

export const setIsMobileMenu = (payload: AppState['isMobileMenu']): AppAction => ({
  type: 'SET_MOBILE_MENU',
  payload
});

export const setLanguage = (payload: AppState['language']): AppAction => ({
  type: 'SET_LANGUAGE',
  payload
});

