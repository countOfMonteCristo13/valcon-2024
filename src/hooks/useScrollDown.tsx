import { useEffect, useState } from "react";

const useScrollDown = () => {
  const [isShown, setIsShown] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isScrollOnTop, setIsScrollOnTop] = useState<boolean>(true);

  const controlNavbar = () => {
    window.scrollY >= lastScrollY ? setIsShown(false) : setIsShown(true);
    setLastScrollY(window.scrollY);

    window.scrollY > 0 ? setIsScrollOnTop(false) : setIsScrollOnTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return { isShown, isScrollOnTop };
};

export default useScrollDown;
