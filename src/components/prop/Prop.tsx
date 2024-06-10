import { PropModel } from "../../models/PropsData"
import './Prop.css'

type PropPostProps = {
  prop: PropModel
}

const Prop = ({ prop } : PropPostProps) => {
  return (
    <div className="prop">
      <div className="prop__to-user__wrapper">
        <h1 className="prop__to-user__name">From: {prop.toUser.firstName}</h1>
        <p>Points: {prop.propPoints}</p>
      </div>
      <div className="prop__message__wrapper">
        <h4 className="prop__message__title">Message:</h4>
        <p>{prop.message}</p>
      </div>
    </div>
  )
}

export default Prop
