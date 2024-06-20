import { ReactNode } from "react";
import { headerStyle } from "./HeaderStyle.css";
import { backgroundSecondary, fullWidth } from "../../styles/index.css";

type HeaderProps = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div
      className={`${headerStyle} ${fullWidth} ${backgroundSecondary} ${className}`}
    >
      {children}
    </div>
  );
};

export default Header;
