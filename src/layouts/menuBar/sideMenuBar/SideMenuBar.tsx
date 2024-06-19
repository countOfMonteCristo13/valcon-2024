import { useEffect, useState } from 'react';
import MenuBarLink from '../../../components/menuBarLink/MenuBarLink';
import logo from '../../../assets/propsLogo1.png'
import { LAPTOP_WIDTH_SIZE } from '../../../utils/constants';
import { LuArrowRight, LuGift, LuHome, LuLogOut, LuUserCircle2 } from 'react-icons/lu';
import { logoImageStyle, logoTitleStyle, showLogoTitle, sideMenuBarActiveLinkStyle, sideMenuBarLinkStyle, sideMenuBarStyle } from './SideMenuBarStyle.css';
import { flexCenter, flexColumn, gap0_5 } from '../../../styles/index.css';

const SideMenuBar = () => {

    const [isMenuBarExpanded, setIsMenuBarExpanded] = useState<boolean>(window.innerWidth >= LAPTOP_WIDTH_SIZE);
    const [showToggleExpandButton, setShowToggleExpandButton] = useState<boolean>(window.innerWidth < LAPTOP_WIDTH_SIZE);


    useEffect(() => {

        const handleResize = () => {
            if(window.innerWidth >= LAPTOP_WIDTH_SIZE){
                setIsMenuBarExpanded(true);
                setShowToggleExpandButton(false);
            }else{
                setIsMenuBarExpanded(false);
                setShowToggleExpandButton(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${sideMenuBarStyle}`}>
            <div className={`${flexCenter} ${gap0_5}`}>
                <img className={logoImageStyle} src={logo} alt="logo" />
                <h2 className={`${logoTitleStyle} ${isMenuBarExpanded && showLogoTitle}`}>Props</h2>
            </div>
            <div className={`${flexColumn} ${gap0_5}`}>
                <MenuBarLink 
                    to='/' 
                    linkClassName={sideMenuBarLinkStyle}
                    activeLinkClassName={sideMenuBarActiveLinkStyle}
                    iconSize={32} icon={LuHome} 
                    {...(isMenuBarExpanded && { linkTitle: 'Home' })}
                />
                <MenuBarLink 
                    to='/rewards' 
                    linkClassName={sideMenuBarLinkStyle}
                    activeLinkClassName={sideMenuBarActiveLinkStyle}
                    iconSize={32} icon={LuGift} 
                    {...(isMenuBarExpanded && { linkTitle: 'Rewards' })}
                />
                <MenuBarLink 
                    to='/profile' 
                    linkClassName={sideMenuBarLinkStyle}
                    activeLinkClassName={sideMenuBarActiveLinkStyle}
                    iconSize={32} icon={LuUserCircle2} 
                    {...(isMenuBarExpanded && { linkTitle: 'Profile' })}
                />
            </div>
            <div className='side-menu-bar__logout'>
                {
                    showToggleExpandButton && 
                        <div onClick={() => setIsMenuBarExpanded(!isMenuBarExpanded)}>
                            <LuArrowRight size={32}/>
                        </div>
                }
                <MenuBarLink 
                    to='/logout' 
                    linkClassName={sideMenuBarLinkStyle} 
                    iconSize={32} icon={LuLogOut} 
                    {...(isMenuBarExpanded && { linkTitle: 'Logout' })}
                />
            </div>
        </div>
    )
}

export default SideMenuBar
