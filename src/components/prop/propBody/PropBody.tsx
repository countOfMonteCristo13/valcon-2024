import { useState } from "react";
import { PropModel } from "../../../models/PropsData";
import { backgroundSecondary, borderRadius0_5, cursorPointer, flexAlignCenter, flexCenter, flexColumn, flexWrap, gap0_5, padding0_5 } from "../../../styles/index.css";
import { buildImageURL } from "../../../utils/imageBuilder";
import { propImageStyle } from "../Prop.css";
import { gifModal, propBodyHashtagsTitleStyle, propBodyStyle, propGif } from "./PropBodyStyle.css";
import Modal from "../../modal/Modal";

type PropBodyProps = {
    prop: PropModel;
    theme: boolean
}

const PropBody = ({ prop, theme }: PropBodyProps) => {
    const [showGifModal, setShowGifModal] = useState<boolean>(false);

    return (
        <div className={`${flexColumn} ${propBodyStyle} ${gap0_5}`}>
            {
                showGifModal &&
                <Modal closeModal={() => setShowGifModal(false)} className={flexCenter}>
                    <div className={padding0_5}>
                        <img src={prop.gifUrl} alt="gif" className={`${borderRadius0_5} ${gifModal}`} />
                    </div>
                </Modal>
            }
            <div className={`${flexColumn} ${gap0_5}`}>
                <div className={`${flexAlignCenter} ${gap0_5}`}>
                    <span>From: </span>
                    <img src={buildImageURL(theme, prop.fromUser.profileImageReference)} alt="profile-image" className={propImageStyle} />
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
            {
                prop.gifUrl &&
                <img className={`${propGif} ${cursorPointer}`} src={prop.gifUrl} alt="gif" onClick={() => setShowGifModal(true)} />

            }
        </div>
    )
}

export default PropBody
