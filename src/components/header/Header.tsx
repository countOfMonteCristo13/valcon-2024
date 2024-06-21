import { ReactNode } from "react";
import { headerStyle } from "./HeaderStyle.css";
import { backgroundSecondary, flexWrap, fullWidth, gap1 } from "../../styles/index.css";

type HeaderProps = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div
      className={`${headerStyle} ${fullWidth} ${backgroundSecondary} ${flexWrap} ${gap1} ${className}`}
    >
      {children}
    </div>
  );
};

export default Header;
