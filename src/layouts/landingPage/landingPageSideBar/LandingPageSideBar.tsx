import { backgroundTertiary, flexColumn, fullHeight, gap1, hideScrollBar } from '../../../styles/index.css'
import TrendingHashtags from '../TrendingHashtags/TrendingHashtags'
import UserPoints from '../UserPoints/UserPoints'
import RandomRewards from '../randomRewards/RandomRewards'
import { landingPageSideBarStyle } from './LandingPageSideBar.css'

const LandingPageSideBar = () => {
  return (
      <div className={`${backgroundTertiary} ${hideScrollBar} ${fullHeight} ${flexColumn} ${gap1} ${landingPageSideBarStyle}`}>
        <UserPoints/>
        <TrendingHashtags/>
        <RandomRewards/>
      </div>
  )
}

export default LandingPageSideBar
