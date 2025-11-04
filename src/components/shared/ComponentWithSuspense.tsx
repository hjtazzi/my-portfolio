import { Suspense, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppState } from '../../hooks/useAppContext';
import { setIsFirstLoad } from '../../utils';

import LoadingFallback from './LoadingFallback';


const LazyLoadedMarker = () => {
  const { isFirstLoad } = useAppState();
  const dispatch = useAppDispatch();
  const didMarkRef = useRef(false);

  useEffect(() => {
    if (!didMarkRef.current && isFirstLoad) {
      didMarkRef.current = true;
      dispatch(setIsFirstLoad(false));
    }
  }, [isFirstLoad, dispatch]);

  return null;
}


const ComponentWithSuspense = ({ component }: { component: React.ReactNode; }) => {
  const { pathname } = useLocation();
  const { isFirstLoad } = useAppState();

  return (
    <Suspense
      key={pathname}
      fallback={<LoadingFallback full={isFirstLoad} />}
    >
      <LazyLoadedMarker />
      {component}
    </Suspense>
  )
}

export default ComponentWithSuspense;
