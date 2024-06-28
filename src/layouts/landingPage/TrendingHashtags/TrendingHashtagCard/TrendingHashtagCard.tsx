import { TrendingHashtag } from "../../../../models/PropsData"
import { borderRadius0_5, box, flexCenter, gap0_3, padding0_5, textColor } from "../../../../styles/index.css"

type TrendingHashtagCardProps = {
    hashtag: TrendingHashtag
}

const TrendingHashtagCard = ({hashtag} : TrendingHashtagCardProps) => {
  return (
    <div className={`${flexCenter} ${gap0_3} ${textColor} ${box} ${borderRadius0_5} ${padding0_5}`}>
      <p>#</p>
      <p>{hashtag.name}</p>
    </div>
  )
}

export default TrendingHashtagCard
