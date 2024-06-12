import { RxAvatar } from 'react-icons/rx'
import { IMAGE_BASE_URL } from '../../utils/constants'
import { PropModel } from '../../models/PropsData'

type PropBodyProps = {
    prop: PropModel;
}

const PropBody = ({prop}: PropBodyProps) => {

    return(
        <div className="prop__body">
            <div className="prop__body__message">
                <div className="prop__body__message__title">
                    <span>From: </span>
                    {
                    prop.fromUser.profileImageReference ? 
                    <img src={`${IMAGE_BASE_URL}${prop.fromUser.profileImageReference}`} alt="profile-image" className="prop__body__message__img prop__img"/>
                    :
                    <RxAvatar size={32}/>
                    }
                    <span className="prop__body__message__sender__name">{prop.fromUser.firstName} {prop.fromUser.lastName}</span>
                </div>
                <p className="prop__body__message__description">
                    {prop.message}
                </p>
            </div>
            <div className="prop__body__hashtags">
                {
                prop.hashtags.map((hashtag) => (
                    <p className="prop__body__hashtags__title"><span>#</span>{hashtag.name}</p>
                ))
                }
            </div>
        </div>
    )
}

export default PropBody
