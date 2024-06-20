import { Hashtag } from "../../../models/PropsData";
import { borderRadius0_5, cursorPointer, flex, flexAlignCenter, flexWrap, fullWidth, gap0_5 } from "../../../styles/index.css";
import { suggestedHashtagCardStyle } from "./SuggestedHashtagsStyle.css";

type SuggestedHashtagCardProps = {
    list: Hashtag[];
    onClick: (name:string) => void
}

const SuggestedHashtags = ({list, onClick}: SuggestedHashtagCardProps) => {
  return (
    <div className={`${flex} ${flexWrap} ${gap0_5} ${borderRadius0_5} ${fullWidth}`}>
      {
        list.map(item => (
          <div key={item.id} className={`${flexAlignCenter} ${borderRadius0_5} ${cursorPointer} ${suggestedHashtagCardStyle}`} onClick={() => onClick(item.name)}>
            <p>#</p>
            <p>{item.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default SuggestedHashtags
