import { ReactNode, useEffect, useRef, useState } from "react"
import { LuChevronDown } from "react-icons/lu";
import { backgroundSecondary, borderPrimary, borderRadius1, cursorPointer, flexCenter, flexColumn, gap0_5, padding0_5, textColor } from "../../styles/index.css";
import { accordionBodyStyle, accordionButtonStyle, rotateAccordionButton } from "./AccordionStyle.css";

type AccordionProps = {
    children:ReactNode;
    title:string
}

const Accordion = ({title,children}:AccordionProps) => {
    const accordionBodyRef = useRef<HTMLDivElement>(null);
    const [toggleAccordion, setToggleAccordion] = useState<boolean>(false);
    const [childrenHeight, setChildrenHeight] = useState<number>(0);

    useEffect(() => {
        if(accordionBodyRef.current){

            toggleAccordion ? setChildrenHeight(accordionBodyRef.current.scrollHeight) : setChildrenHeight(0);
        }
    },[toggleAccordion])

  return (
    <div className={`${borderPrimary} ${borderRadius1} ${backgroundSecondary} ${textColor} ${flexColumn} ${padding0_5}`}>
      <div className={`${flexCenter} ${gap0_5} ${cursorPointer}`} onClick={() => setToggleAccordion(!toggleAccordion)}>
        <h3>{title}</h3>
        <LuChevronDown 
            size={24} 
            strokeWidth={4} 
            className={`${accordionButtonStyle} ${toggleAccordion && rotateAccordionButton}`}
        />
      </div>
      <div 
        ref={accordionBodyRef} 
        style={{height:childrenHeight}} 
        className={accordionBodyStyle}
       >
        {children}
      </div>
    </div>
  )
}

export default Accordion
