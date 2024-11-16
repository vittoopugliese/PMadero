import {useState, useEffect} from "react";

export const useScrollDirection = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      // Si estamos en el top de la página, ocultamos el header
      if (currentScrollY === 0) {
        setShowHeader(false);
        return;
      }

      // Si estamos scrolleando hacia abajo y hemos pasado los 100px, mostramos el header
      if (currentScrollY > 100) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return showHeader;
};
