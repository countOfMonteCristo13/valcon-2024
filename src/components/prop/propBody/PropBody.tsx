import { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { PropModel } from "../../../models/PropsData";
import { backgroundSecondary, backgroundTertiary, borderRadius0_5, cursorPointer, flex1, flexAlignCenter, flexCenter, flexColumn, flexWrap, fullHeight, fullWidth, gap0_5, padding0_5 } from "../../../styles/index.css";
import { buildImageURL } from "../../../utils/imageBuilder";
import { propImageStyle } from "../Prop.css";
import { gifModal, hashtagsAndGifContainer, propBodyHashtagsStyle, propBodyHashtagsTitleStyle, propBodyStyle, propGif } from "./PropBodyStyle.css";
import Modal from "../../modal/Modal";

type PropBodyProps = {
    prop: PropModel;
}

const PropBody = ({ prop }: PropBodyProps) => {
    const [showGifModal, setShowGifModal] = useState<boolean>(false);
    const {theme} = useTheme();

    return (
        <div className={`${flexColumn} ${propBodyStyle} ${gap0_5} ${flexWrap}`}>
            {
                showGifModal &&
                <Modal closeModal={() => setShowGifModal(false)} className={flexCenter}>
                    <div className={`${flexCenter} ${fullWidth} ${padding0_5}`}>
                        <img src={prop.gifUrl} alt="gif" className={`${borderRadius0_5} ${fullWidth} ${fullWidth} ${gifModal}`} />
                    </div>
                </Modal>
            }
            <div className={`${flexColumn} ${gap0_5} ${flex1}`}>
                <div className={`${flexAlignCenter} ${gap0_5}`}>
                    <span>From: </span>
                    <img src={buildImageURL(theme, prop.fromUser.profileImageReference)} alt="profile-image" className={propImageStyle} />
                    <span>{prop.fromUser.firstName} {prop.fromUser.lastName}</span>
                </div>
                <p className={`${padding0_5} ${borderRadius0_5} ${backgroundSecondary} ${fullHeight}`}>
                    {prop.message}
                </p>
            </div>
            <div className={`${flexColumn} ${gap0_5} ${flex1} ${hashtagsAndGifContainer}`}>
                <div className={`${flexAlignCenter} ${flexWrap} ${gap0_5} ${propBodyHashtagsStyle}`}>
                    {
                        prop.hashtags.map((hashtag) => (
                            <p key={hashtag.name} className={`${borderRadius0_5} ${padding0_5} ${backgroundSecondary} ${propBodyHashtagsTitleStyle}`}><span>#</span>{hashtag.name}</p>
                        ))
                    }
                </div>
                {
                    prop.gifUrl &&
                    <img className={`${propGif} ${cursorPointer} ${borderRadius0_5} ${backgroundSecondary}`} src={prop.gifUrl} alt="gif" onClick={() => setShowGifModal(true)} />

                }
            </div>
        </div>
    )
}

export default PropBody
