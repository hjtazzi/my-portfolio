import { useContext } from "react";
import { AppStateContext, AppDispatchContext } from "../app/AppContext";


export const useAppState = () => {
  const context = useContext(AppStateContext);

  if (!context)
    throw new Error('useAppState must be used within an AppProvider');

  return context;
}


export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);

  if (!context)
    throw new Error('useAppDispatch must be used within an AppProvider');

  return context;
}
