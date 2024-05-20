import { useState, useEffect } from "react";

function useScreenSize() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 900);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 900);
    }

    window.addEventListener("resize", handleResize);

    // Limpiar el listener del evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El array vacío como segundo argumento garantiza que el efecto se ejecute solo una vez al montar el componente

  return isSmallScreen;
}

export default useScreenSize;
