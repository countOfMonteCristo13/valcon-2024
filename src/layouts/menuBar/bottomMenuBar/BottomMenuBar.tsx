import MenuBarLink from '../../../components/menuBarLink/MenuBarLink'
import useScrollDown from '../../../hooks/useScrollDown'
import { LuGift, LuHome, LuLogOut } from 'react-icons/lu'
import { bottomMenuBarActiveLinkStyle, bottomMenuBarLinkStyle, bottomMenuBarStyle, hideBottomMenuBar } from './BottomMenuBar.css'
import { flexAlignCenter, fullWidth, justifyAround } from '../../../styles/index.css'

const BottomMenuBar = () => {
    const {isShown} = useScrollDown();

return (
    <div className={`${bottomMenuBarStyle} ${!isShown && hideBottomMenuBar} `}>
        <div className={`${flexAlignCenter} ${justifyAround} ${fullWidth}`}>
            <MenuBarLink 
                to='/' 
                linkClassName={bottomMenuBarLinkStyle} 
                iconSize={32} icon={LuHome} linkTitle='Home'
                activeLinkClassName={bottomMenuBarActiveLinkStyle} 
            />
            <MenuBarLink 
                to='/rewards' 
                linkClassName={bottomMenuBarLinkStyle}
                activeLinkClassName={bottomMenuBarActiveLinkStyle}  
                iconSize={32} icon={LuGift} 
                linkTitle='Rewards' 
            />
            <MenuBarLink 
                to='/login' 
                linkClassName={bottomMenuBarLinkStyle}
                iconSize={32} icon={LuLogOut} 
                linkTitle='Logout'
            />
        </div>
    </div>
  )
}

export default BottomMenuBar
