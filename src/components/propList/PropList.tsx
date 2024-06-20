import { PropModel } from '../../models/PropsData'
import { directionColumn, flexAlignCenter, fullWidth, gap1 } from '../../styles/index.css'
import Prop from '../prop/Prop'

type propListProps = {
  propList: PropModel[]
}

const PropList = ({propList}:propListProps) => {
  return (
    <div className={`${fullWidth} ${flexAlignCenter} ${directionColumn} ${gap1}`}>
      {
        propList.map(propItem => (
            <Prop key={propItem.id} prop={propItem}/>
        ))
      }
    </div>
  )
}

export default PropList
