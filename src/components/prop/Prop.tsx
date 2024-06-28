import { PropModel } from "../../models/PropsData"
import { dateFormat } from "../../services/DateFormat"
import PropHeader from "./propHeader/PropHeader"
import PropBody from "./propBody/PropBody"
import PropFooter from "./propFooter/PropFooter"
import { backgroundTertiary, borderPrimary, borderRadius1, flexColumn, fullWidth, gap0_5, padding1, textColor } from "../../styles/index.css"
import { propStyle } from "./Prop.css"

type PropPostProps = {
  prop: PropModel,
}

const Prop = ({ prop } : PropPostProps) => {

  const dateOfCreation = dateFormat(prop.creationTime);

  return (
    <div className={`${flexColumn} ${gap0_5} ${borderPrimary} ${borderRadius1} ${padding1} ${textColor} ${fullWidth} ${backgroundTertiary} ${propStyle}`}>
      <PropHeader prop={prop}/>
      <PropBody prop={prop}/>
      <PropFooter dateOfCreation={dateOfCreation}/>
    </div>
  )
}

export default Prop
