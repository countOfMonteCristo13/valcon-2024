import { BiCoin } from 'react-icons/bi'
import { PropModel } from '../../models/PropsData'
import { buildImageURL } from '../../utils/imageBuilder'

type PropHeaderProps = {
    prop: PropModel;
}

const PropHeader = ({prop}: PropHeaderProps) => {
    return (
      <div className="prop__header">
        <div className="prop__header__to-user">
          <img src={buildImageURL(prop.toUser.profileImageReference)} alt="profile-image" className='prop__header__to-user__img prop__img' />
          <p className="prop__header__to-user__name">{prop.toUser.firstName} {prop.toUser.lastName}</p>
        </div>
        <div className="prop__header__points">
          <h3 className="prop__header__points__number">{prop.propPoints}</h3>
          <BiCoin size={24}/>
        </div>
      </div>
    )
}

export default PropHeader
