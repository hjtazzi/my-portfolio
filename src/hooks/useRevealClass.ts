import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';


const onLoadCheck = (el: HTMLElement, root: HTMLElement): boolean => {
  const rect = el.getBoundingClientRect();
  const rootRect = root.getBoundingClientRect();

  return (rect.top <= rootRect.bottom && rect.bottom >= rootRect.top);
}


interface useRevealClass extends IntersectionObserverInit {
  className: string[];
  isLoadStyle?: CSSProperties;
  root?: HTMLElement | null;
  threshold?: number;
  triggerOnLoadCheck?: boolean;
}


const useRevealClass = <T extends HTMLElement>({ className, isLoadStyle, root = null, threshold = 0.25, triggerOnLoadCheck = false, ...options }: useRevealClass) => {
  const ref = useRef<T | null>(null);
  const isVisibleOnLoad = useRef(false);


  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !root || !triggerOnLoadCheck) return;

    const visible = onLoadCheck(el, root);

    if (visible) {
      isVisibleOnLoad.current = true;

      el.classList.add(...className);
      if (isLoadStyle)
        Object.assign(el.style, isLoadStyle);
    } else {
      isVisibleOnLoad.current = false;
    }
  }, [root, triggerOnLoadCheck, className, isLoadStyle]);


  useEffect(() => {
    const el = ref.current;
    if (!el || isVisibleOnLoad.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add(...className);
            observer.unobserve(el);
          }
        });
      },
      { threshold, root, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [root, triggerOnLoadCheck, className, isLoadStyle, threshold, options]);


  return ref;
}

export default useRevealClass;
