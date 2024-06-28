import { ReactNode, useEffect, useRef, useState } from "react"
import { LuChevronDown } from "react-icons/lu";
import { backgroundSecondary, borderPrimary, borderRadius1, cursorPointer, flexAlignCenter, flexCenter, flexColumn, fullWidth, gap0_5, justifyBetween, padding0_5, textColor } from "../../styles/index.css";
import { accordionBodyStyle, accordionButtonStyle, accordionTitleStyle, rotateAccordionButton } from "./AccordionStyle.css";

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
    <div className={`${borderPrimary} ${borderRadius1} ${backgroundSecondary} ${textColor} ${flexColumn} ${padding0_5} ${fullWidth}`}>
      <div className={`${flexAlignCenter} ${justifyBetween} ${gap0_5} ${cursorPointer}`} onClick={() => setToggleAccordion(!toggleAccordion)}>
        <h4 className={accordionTitleStyle}>{title}</h4>
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
