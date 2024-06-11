import { BiGift, BiHome } from 'react-icons/bi'
import MenuBarLink from '../../../components/menuBarLink/MenuBarLink'
import { RxAvatar } from 'react-icons/rx'
import useScrollDown from '../../../hooks/useScrollDown'
import './BottomMenuBar.css'

const BottomMenuBar = () => {
    const {isShown} = useScrollDown();

return (
    <div className={`bottom-menu-bar__small ${!isShown && 'hidden'} `}>
        <div className='bottom-menu-bar__small__links'>
            <MenuBarLink 
                to='/' 
                linkClassName='bottom-menu-bar__small__links__link' 
                iconSize={32} icon={BiHome} linkTitle='Home' 
                linkTitleClassName='bottom-menu-bar__small__links__link__title'
            />
            <MenuBarLink 
                to='/rewards' 
                linkClassName='bottom-menu-bar__small__links__link' 
                iconSize={32} icon={BiGift} 
                linkTitle='Rewards' 
                linkTitleClassName='bottom-menu-bar__small__links__link__title'
            />
            <MenuBarLink 
                to='/profile' 
                linkClassName='bottom-menu-bar__small__links__link' 
                iconSize={32} icon={RxAvatar} 
                linkTitle='Profile' 
                linkTitleClassName='bottom-menu-bar__small__links__link__title'
            />
        </div>
    </div>
  )
}

export default BottomMenuBar
