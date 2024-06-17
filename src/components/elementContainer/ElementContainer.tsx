import { ReactNode } from "react";
import "./ElementContainer.css";

type ElementContainerProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const ElementContainer = ({
  children,
  className,
  onClick,
}: ElementContainerProps) => {
  return (
    <div className={`element-container ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default ElementContainer;
