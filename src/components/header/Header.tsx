import { ReactNode } from "react";
import "./Header.css";
import useScrollDown from "../../hooks/useScrollDown";

type HeaderProps = {
  children: ReactNode;
  className: string;
};

const Header = ({ children, className }: HeaderProps) => {
  const { isScrollOnTop } = useScrollDown();
  return (
    <div
      className={`header ${className} ${!isScrollOnTop && "header-glass-bg"}`}
    >
      {children}
    </div>
  );
};

export default Header;
