import Accordion from '../../../components/accordion/Accordion'
import { backgroundTertiary, padding1 } from '../../../styles/index.css'
import TrendingHashtags from '../TrendingHashtags/TrendingHashtags'
import UserPoints from '../UserPoints/UserPoints'

const LandingPageSideBar = () => {
  return (
    <section className={`${backgroundTertiary} ${padding1}`}>
      <Accordion title='cao'>
        Zdravo ja sam Nikola
      </Accordion>
      <TrendingHashtags/>
      <UserPoints/>
    </section>
  )
}

export default LandingPageSideBar
