import MenuBarLink from '../../../components/menuBarLink/MenuBarLink'
import useScrollDown from '../../../hooks/useScrollDown'
import { LuGift, LuHome, LuLogOut, LuUserCircle2 } from 'react-icons/lu'
import './BottomMenuBar.css'

const BottomMenuBar = () => {
    const {isShown} = useScrollDown();

return (
    <div className={`bottom-menu-bar__small ${!isShown && 'hidden'} `}>
        <div className='bottom-menu-bar__small__links'>
            <MenuBarLink 
                to='/' 
                linkClassName='bottom-menu-bar__small__links__link' 
                iconSize={32} icon={LuHome} linkTitle='Home' 
                linkTitleClassName='bottom-menu-bar__small__links__link__title'
            />
            <MenuBarLink 
                to='/rewards' 
                linkClassName='bottom-menu-bar__small__links__link' 
                iconSize={32} icon={LuGift} 
                linkTitle='Rewards' 
                linkTitleClassName='bottom-menu-bar__small__links__link__title'
            />
            <MenuBarLink 
                to='/profile' 
                linkClassName='bottom-menu-bar__small__links__link' 
                iconSize={32} icon={LuUserCircle2} 
                linkTitle='Profile' 
                linkTitleClassName='bottom-menu-bar__small__links__link__title'
            />
            <MenuBarLink 
                to='/logout' 
                linkClassName='bottom-menu-bar__small__links__link' 
                iconSize={32} icon={LuLogOut} 
                linkTitle='Logout' 
                linkTitleClassName='bottom-menu-bar__small__links__link__title'
            />
        </div>
    </div>
  )
}

export default BottomMenuBar
