import { useState, useMemo, useLayoutEffect } from "react";
import debounce from "lodash.debounce";


type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const breakpoints: Record<Breakpoint, number> = {
  xs: 0,
  sm: 40 * 16,
  md: 48 * 16,
  lg: 64 * 16,
  xl: 80 * 16,
  xxl: 96 * 16
};

const getBreakpoint = (width: number): Breakpoint => {
  if (width >= breakpoints.xxl) return "xxl";
  if (width >= breakpoints.xl) return "xl";
  if (width >= breakpoints.lg) return "lg";
  if (width >= breakpoints.md) return "md";
  if (width >= breakpoints.sm) return "sm";
  return "xs";
};


interface WindowSize {
  width: number;
  height: number;
  breakpoint: Breakpoint;
  breakpoints: Record<Breakpoint, number>;
  isAtLeast: Record<Breakpoint, boolean>;
}


const useWindowSize = (delay = 100): WindowSize => {
  const [windowSize, setWindowSize] = useState<Pick<WindowSize, "width" | "height">>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const debouncedUpdate = debounce(handleResize, delay);

    window.addEventListener("resize", debouncedUpdate);
    window.addEventListener("orientationchange", debouncedUpdate);

    return () => {
      window.removeEventListener("resize", debouncedUpdate);
      window.removeEventListener("orientationchange", debouncedUpdate);
      debouncedUpdate.cancel();
    };
  }, [delay]);

  const breakpoint: Breakpoint = useMemo(() => getBreakpoint(windowSize.width), [windowSize.width]);
  const isAtLeast: Record<Breakpoint, boolean> = useMemo(
    () => ({
      xs: windowSize.width >= breakpoints.xs,
      sm: windowSize.width >= breakpoints.sm,
      md: windowSize.width >= breakpoints.md,
      lg: windowSize.width >= breakpoints.lg,
      xl: windowSize.width >= breakpoints.xl,
      xxl: windowSize.width >= breakpoints.xxl,
    }),
    [windowSize.width]
  );

  return { ...windowSize, breakpoint, isAtLeast, breakpoints };
}

export default useWindowSize;
