import Accordion from "../../../components/accordion/Accordion";
import useTrendingHashtags from "../../../hooks/useTrendingHashtags"
import { flex, flexWrap, gap0_5, paddingTop0_5 } from "../../../styles/index.css";
import TrendingHashtagCard from "./TrendingHashtagCard/TrendingHashtagCard";


const TrendingHashtags = () => {

    const {trendingHashtagsList} = useTrendingHashtags();

  return (
    <Accordion title="Trending Hashtags">
        <div className={`${flex} ${flexWrap} ${gap0_5} ${paddingTop0_5}`}>
        {
            trendingHashtagsList.map(hashtag => (
                <TrendingHashtagCard hashtag={hashtag} key={hashtag.id}/>
            )) 
        }
        </div>
    </Accordion>
  )
}

export default TrendingHashtags
