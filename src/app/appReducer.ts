import type { AppAction, AppState } from "../types";


export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_FIRST_LOAD':
      return { ...state, isFirstLoad: action.payload };

    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };

    case 'SET_MOBILE_MENU':
      return { ...state, isMobileMenu: action.payload };

    default:
      return state;
  }
}
