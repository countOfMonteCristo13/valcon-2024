import { BiCoin } from 'react-icons/bi'
import { RxAvatar } from 'react-icons/rx'
import { ACTIVE_COLOR, IMAGE_BASE_URL } from '../../utils/constants'
import { PropModel } from '../../models/PropsData'

type PropHeaderProps = {
    prop: PropModel;
}

const PropHeader = ({prop}: PropHeaderProps) => {
    return (
      <div className="prop__header">
        <div className="prop__header__to-user">
          {
            prop.toUser.profileImageReference ? 
            <img src={`${IMAGE_BASE_URL}${prop.toUser.profileImageReference}`} alt="profile-image" className="prop__header__to-user__img prop__img"/>
          :
            <RxAvatar size={32}/>
          }
          <p className="prop__header__to-user__name">{prop.toUser.firstName} {prop.toUser.lastName}</p>
        </div>
        <div className="prop__header__points">
          <h3 className="prop__header__points__number">{prop.propPoints}</h3>
          <BiCoin size={24} color={ACTIVE_COLOR}/>
        </div>
      </div>
    )
}

export default PropHeader
