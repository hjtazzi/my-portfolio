import { createContext, useReducer, useMemo, type ReactNode } from 'react';
import { appReducer } from './appReducer';
import type { AppAction, AppState } from '../types';


const initialAppState: AppState = {
  isFirstLoad: true,
  language: 'en',
  isMobileMenu: false,
  currentDate: null
};


export const AppStateContext = createContext<AppState | undefined>(undefined);
export const AppDispatchContext = createContext<React.Dispatch<AppAction> | undefined>(undefined);


const ContextProvider = ({ children }: { children: ReactNode; }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const stateValue = useMemo(() => state, [state]);
  const dispatchValue = useMemo(() => dispatch, [dispatch]);

  return (
    <AppStateContext.Provider value={stateValue}>
      <AppDispatchContext.Provider value={dispatchValue}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export default ContextProvider;
