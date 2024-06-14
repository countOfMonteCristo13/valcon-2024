import { ReactNode } from 'react'
import './ElementContainer.css'

type ElementContainerProps = {
  children: ReactNode;
  className?: string;
}

const ElementContainer = ({children,className}: ElementContainerProps) => {
  return (
    <div className={`element-container ${className}`}>
      {children}
    </div>
  )
}

export default ElementContainer
