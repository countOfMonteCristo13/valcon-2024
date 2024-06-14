import Button from '../../../components/button/Button'
import RandomRewards from '../randomRewards/RandomRewards'
import TrandingHashtags from '../trandingHashtags/TrandingHashtags'
import TrandingReceivers from '../trandingReceivers/TrandingReceivers'
import UserPoints from '../userPoints/UserPoints'
import './LandingPageSideBar.css'

type LandingPageSideBarProps = {
  onClick: (toggle:boolean) => void
}

const LandingPageSideBar = ({onClick} : LandingPageSideBarProps) => {
  return (
    <section className='side-bar'>
        <Button title='Add Prop' className='side-bar__add-prop-button' onClick={() => onClick(true)}/>
        <UserPoints/>
        <RandomRewards/>
        <TrandingHashtags/>
        <TrandingReceivers/>
    </section>
  )
}

export default LandingPageSideBar
