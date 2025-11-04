import { useState, useLayoutEffect } from "react";
import debounce from "lodash.debounce";


const useRealViewportHeight = (delay = 100) => {
  const [vh, setVh] = useState(() => window.innerHeight * 0.01);


  useLayoutEffect(() => {
    const updateVH = () => {
      const newVh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--real-vh", `${newVh}px`);
      setVh(newVh);
    };
    updateVH();

    const debouncedUpdate = debounce(updateVH, delay);

    window.addEventListener("resize", debouncedUpdate);
    window.addEventListener("orientationchange", debouncedUpdate);

    return () => {
      window.removeEventListener("resize", debouncedUpdate);
      window.removeEventListener("orientationchange", debouncedUpdate);
      debouncedUpdate.cancel();
    };
  }, [delay]);

  return vh;
}

export default useRealViewportHeight;
