export interface AppState {
  isFirstLoad: boolean;
  language: 'en' | 'fa';
  isMobileMenu: boolean;
  currentDate: Date | null;
}


export type AppAction =
  | { type: 'SET_FIRST_LOAD'; payload: AppState['isFirstLoad'] }
  | { type: 'SET_LANGUAGE'; payload: AppState['language'] }
  | { type: 'SET_MOBILE_MENU'; payload: AppState['isMobileMenu'] }
  | { type: 'SET_CURRENT_DATE'; payload: Date }

