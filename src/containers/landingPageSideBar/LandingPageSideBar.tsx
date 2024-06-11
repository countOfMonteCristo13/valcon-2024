import RandomRewards from '../randomRewards/RandomRewards'
import TrandingHashtags from '../trandingHashtags/TrandingHashtags'
import TrandingReceivers from '../trandingReceivers/TrandingReceivers'
import UserPoints from '../userPoints/UserPoints'
import './LandingPageSideBar.css'

const LandingPageSideBar = () => {
  return (
    <section className='side-bar'>
        <UserPoints/>
        <RandomRewards/>
        <TrandingHashtags/>
        <TrandingReceivers/>
    </section>
  )
}

export default LandingPageSideBar
