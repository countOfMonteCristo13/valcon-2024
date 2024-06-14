import { PropModel } from "../../models/PropsData"
import { dateFormat } from "../../services/DateFormat"
import PropHeader from "./PropHeader"
import PropBody from "./PropBody"
import PropFooter from "./PropFooter"
import './Prop.css'

type PropPostProps = {
  prop: PropModel
}

const Prop = ({ prop } : PropPostProps) => {

  const dateOfCreation = dateFormat(prop.creationTime);

  return (
    <div className="prop">
      <PropHeader prop={prop}/>
      <PropBody prop={prop}/>
      <PropFooter dateOfCreation={dateOfCreation}/>
    </div>
  )
}

export default Prop
