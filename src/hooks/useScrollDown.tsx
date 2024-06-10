import { useEffect, useState } from "react";

const useScrollDown = () => {
    const [isShown, setIsShown] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
  
    const controlNavbar = () => {
      if (window.scrollY >= lastScrollY) { 
        setIsShown(false); 
      } else { 
        setIsShown(true);  
      }
  
      setLastScrollY(window.scrollY); 
    };
  
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
  
      return () => {
         window.removeEventListener('scroll', controlNavbar);
      };
    }, [lastScrollY]);

    return {isShown}
}

export default useScrollDown
