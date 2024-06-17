import { PropModel } from '../../models/PropsData'
import { buildImageURL } from '../../utils/imageBuilder';

type PropBodyProps = {
    prop: PropModel;
}

const PropBody = ({prop}: PropBodyProps) => {

    return(
        <div className="prop__body">
            <div className="prop__body__message">
                <div className="prop__body__message__title">
                    <span>From: </span>
                    <img src={buildImageURL(prop.fromUser.profileImageReference)} alt="profile-image" className='prop__body__message__img prop__img' />
                    <span className="prop__body__message__sender__name">{prop.fromUser.firstName} {prop.fromUser.lastName}</span>
                </div>
                <p className="prop__body__message__description">
                    {prop.message}
                </p>
            </div>
            <div className="prop__body__hashtags">
                {
                prop.hashtags.map((hashtag) => (
                    <p key={hashtag.name} className="prop__body__hashtags__title"><span>#</span>{hashtag.name}</p>
                ))
                }
            </div>
        </div>
    )
}

export default PropBody
