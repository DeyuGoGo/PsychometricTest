import { useEffect } from "react";

function useDelayedEffect(callback, delay) {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);
}

export default useDelayedEffect;
