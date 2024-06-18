import { ReactNode } from "react";
import useScrollDown from "../../hooks/useScrollDown";
import { headerStyle } from "./HeaderStyle.css";

type HeaderProps = {
  children: ReactNode;
  className: string;
};

const Header = ({ children, className }: HeaderProps) => {
  const { isScrollOnTop } = useScrollDown();
  return (
    <div
      className={`${headerStyle} ${className} ${!isScrollOnTop && "header-glass-bg"}`}
    >
      {children}
    </div>
  );
};

export default Header;
