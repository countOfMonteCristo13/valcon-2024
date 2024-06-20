import { ReactNode } from "react";
import { headerStyle } from "./HeaderStyle.css";

type HeaderProps = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div
      className={`${headerStyle} ${className}`}
    >
      {children}
    </div>
  );
};

export default Header;
