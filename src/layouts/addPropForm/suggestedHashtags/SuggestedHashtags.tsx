import { Hashtag } from "../../../models/PropsData";
import './SuggestedHashtags.css'

type SuggestedHashtagCardProps = {
    list: Hashtag[];
    onClick: (name:string) => void
}

const SuggestedHashtags = ({list, onClick}: SuggestedHashtagCardProps) => {
  return (
    <div className='suggested-hashtags'>
      {
        list.map(item => (
          <div key={item.id} className="suggested-hashtags__card" onClick={() => onClick(item.name)}>
            <p className="suggested-hashtags__card__hashtag-sign">#</p>
            <p className="suggested-hashtags__card__name">{item.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default SuggestedHashtags
