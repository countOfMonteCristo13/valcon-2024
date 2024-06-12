import useScrollDown from '../../../hooks/useScrollDown'
import { BiCoin } from 'react-icons/bi'
import { LuPlusCircle } from 'react-icons/lu'
import logo from '../../../assets/propsLogo1.png'
import'./LandingPageHeader.css'

const LandingPageHeader = () => {

  const {isShown} = useScrollDown();

  return (
    <div className={`landing-page__header ${!isShown && 'hidden'}`}>
    <div className='landing-page__header__heading'>
      <img className='landing-page__header__heading__logo' src={logo} alt="logo" />
      <h2 className='landing-page__header__heading__title'>Props</h2>
    </div>
    <div className='landing-page__header__actions'>
      <div className='landing-page__header__actions__points-icon__wrapper'>
        <h2>100</h2>
        <BiCoin size={24} color='#ffae00' className='landing-page__header__actions__points-icon'/>
      </div>
      <LuPlusCircle size={40} className='landing-page__header__actions__button'/>
    </div>
  </div>
  )
}

export default LandingPageHeader
