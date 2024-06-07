import { PropModel } from '../../models/PropsData'
import Prop from '../prop/Prop'
import './PropList.css'

type propListProps = {
  propList: PropModel[]
}

const PropList = ({propList}:propListProps) => {
  return (
    <div className='prop-list'>
      {
        propList.map(propItem => (
            <Prop key={propItem.id} prop={propItem}/>
        ))
      }
    </div>
  )
}

export default PropList
