import { createContext, useReducer, useMemo, type ReactNode } from 'react';
import { appReducer, type AppAction } from './appReducer';


interface AppState {
  isFirstLoad: boolean;
  language: 'en' | 'fa';
  isMobileMenu: boolean;
}


const initialAppState: AppState = {
  isFirstLoad: true,
  language: 'en',
  isMobileMenu: false,
};

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<React.Dispatch<AppAction> | undefined>(undefined);


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

export { type AppState, AppStateContext, AppDispatchContext }
export default ContextProvider;
