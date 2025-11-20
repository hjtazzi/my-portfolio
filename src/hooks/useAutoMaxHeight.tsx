import { useCallback, useLayoutEffect, useState, type RefObject } from 'react';
import debounce from 'lodash.debounce';


interface useAutoMaxHeight {
  contentRef: RefObject<HTMLElement | null>;
  open: boolean;
  delay?: number;
}


const useAutoMaxHeight = ({ contentRef, open, delay = 100 }: useAutoMaxHeight) => {
  const [maxHeight, setMaxHeight] = useState<number>(0);


  const updateMaxHeight = useCallback(() => {
    if (!contentRef.current)
      return;

    if (open)
      setMaxHeight(contentRef.current.scrollHeight);
    else
      setMaxHeight(0);
  }, [contentRef, open]);

  useLayoutEffect(() => {
    requestAnimationFrame(updateMaxHeight);

    const debouncedUpdate = debounce(updateMaxHeight, delay);
    window.addEventListener('resize', debouncedUpdate);
    window.addEventListener('orientationchange', debouncedUpdate);

    return () => {
      window.removeEventListener('resize', debouncedUpdate);
      window.removeEventListener('orientationchange', debouncedUpdate);
      debouncedUpdate.cancel();
    };
  }, [updateMaxHeight, contentRef, delay]);


  return { maxHeight, setMaxHeight };
}

export default useAutoMaxHeight;
