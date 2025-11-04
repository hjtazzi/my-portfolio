import type { AppState } from "./AppContext";


type AppAction =
  | { type: 'SET_FIRST_LOAD'; payload: AppState['isFirstLoad'] }
  | { type: 'SET_LANGUAGE'; payload: AppState['language'] }
  | { type: 'SET_MOBILE_MENU'; payload: AppState['isMobileMenu'] }


const appReducer = (state: AppState, action: AppAction): AppState => {
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

export { type AppAction, appReducer }
