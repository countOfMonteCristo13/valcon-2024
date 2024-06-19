import { PropModel } from "../../../models/PropsData";
import { backgroundSecondary, borderRadius0_5, flexAlignCenter, flexColumn, flexWrap, gap0_5, padding0_5 } from "../../../styles/index.css";
import { buildImageURL } from "../../../utils/imageBuilder";
import { propImageStyle } from "../Prop.css";
import { propBodyHashtagsTitleStyle, propBodyStyle } from "./PropBodyStyle.css";

type PropBodyProps = {
    prop: PropModel;
}

const PropBody = ({prop}: PropBodyProps) => {

    return(
        <div className={`${flexColumn} ${propBodyStyle} ${gap0_5}`}>
            <div className={`${flexColumn} ${gap0_5}`}>
                <div className={`${flexAlignCenter} ${gap0_5}`}>
                    <span>From: </span>
                    <img src={buildImageURL(prop.fromUser.profileImageReference)} alt="profile-image" className={propImageStyle} />
                    <span>{prop.fromUser.firstName} {prop.fromUser.lastName}</span>
                </div>
                <p className={`${padding0_5} ${borderRadius0_5} ${backgroundSecondary}`}>
                    {prop.message}
                </p>
            </div>
            <div className={`${flexAlignCenter} ${flexWrap} ${gap0_5}`}>
                {
                prop.hashtags.map((hashtag) => (
                    <p key={hashtag.name} className={`${borderRadius0_5} ${padding0_5} ${backgroundSecondary} ${propBodyHashtagsTitleStyle}`}><span>#</span>{hashtag.name}</p>
                ))
                }
            </div>
        </div>
    )
}

export default PropBody
