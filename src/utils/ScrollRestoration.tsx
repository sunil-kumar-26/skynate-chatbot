import { useEffect } from "react";

const SCROLL_KEY = "scroll-position";

const ScrollRestoration = () => {
  useEffect(() => {
    const savedPosition = sessionStorage.getItem(SCROLL_KEY);
    if (savedPosition) {
      requestAnimationFrame(() => {
        window.scrollTo(0, Number(savedPosition));
      });
    }
  }, []);

  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    };

    window.addEventListener("beforeunload", saveScroll);
    return () => window.removeEventListener("beforeunload", saveScroll);
  }, []);

  return null;
};

export default ScrollRestoration;
