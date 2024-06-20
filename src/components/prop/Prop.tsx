import { PropModel } from "../../models/PropsData"
import { dateFormat } from "../../services/DateFormat"
import PropHeader from "./propHeader/PropHeader"
import PropBody from "./propBody/PropBody"
import PropFooter from "./propFooter/PropFooter"
import { propStyle } from "./Prop.css"
import { borderPrimary, borderRadius1, flexColumn, gap0_5, padding1, textColor } from "../../styles/index.css"

type PropPostProps = {
  prop: PropModel,
  theme:boolean
}

const Prop = ({ prop,theme } : PropPostProps) => {

  const dateOfCreation = dateFormat(prop.creationTime);

  return (
    <div className={`${propStyle} ${flexColumn} ${gap0_5} ${borderPrimary} ${borderRadius1} ${padding1} ${textColor}`}>
      <PropHeader prop={prop} theme={theme}/>
      <PropBody prop={prop} theme={theme}/>
      <PropFooter dateOfCreation={dateOfCreation}/>
    </div>
  )
}

export default Prop
