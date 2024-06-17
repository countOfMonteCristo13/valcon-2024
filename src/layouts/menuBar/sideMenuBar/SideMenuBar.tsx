import { useEffect, useState } from 'react';
import MenuBarLink from '../../../components/menuBarLink/MenuBarLink';
import logo from '../../../assets/propsLogo1.png'
import { LAPTOP_WIDTH_SIZE } from '../../../utils/constants';
import { LuArrowRight, LuGift, LuHome, LuLogOut, LuUserCircle2 } from 'react-icons/lu';
import './SideMenuBar.css'

const SideMenuBar = () => {

    const [isMenuBarExpanded, setIsMenuBarExpanded] = useState<boolean>(window.innerWidth > LAPTOP_WIDTH_SIZE);
    const [showToggleExpandButton, setShowToggleExpandButton] = useState<boolean>(window.innerWidth < LAPTOP_WIDTH_SIZE);


    useEffect(() => {

        const handleResize = () => {
            if(window.innerWidth > LAPTOP_WIDTH_SIZE){
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
        <div className={`side-menu-bar ${isMenuBarExpanded && 'side-menu-bar-expanded'}`}>
            <div className='side-menu-bar__logo'>
                <img className='side-menu-bar__logo__image' src={logo} alt="logo" />
                <h2 className={`side-menu-bar__logo__title ${isMenuBarExpanded && 'show'}`}>Props</h2>
            </div>
            <div className='side-menu-bar__links'>
                <MenuBarLink 
                    to='/' 
                    linkClassName='side-menu-bar__links__link' 
                    iconSize={32} icon={LuHome} 
                    linkTitleClassName='side-menu-bar__links__link__title' 
                    {...(isMenuBarExpanded && { linkTitle: 'Home' })}
                />
                <MenuBarLink 
                    to='/rewards' 
                    linkClassName='side-menu-bar__links__link' 
                    iconSize={32} icon={LuGift} 
                    linkTitleClassName='side-menu-bar__links__link__title'
                    {...(isMenuBarExpanded && { linkTitle: 'Rewards' })}
                />
                <MenuBarLink 
                    to='/profile' 
                    linkClassName='side-menu-bar__links__link' 
                    iconSize={32} icon={LuUserCircle2} 
                    {...(isMenuBarExpanded && { linkTitle: 'Profile' })}
                    linkTitleClassName='side-menu-bar__links__link__title' 
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
                    linkClassName='side-menu-bar__links__link' 
                    iconSize={32} icon={LuLogOut} 
                    {...(isMenuBarExpanded && { linkTitle: 'Logout' })}
                    linkTitleClassName='side-menu-bar__links__link__title' 
                />
            </div>
        </div>
    )
}

export default SideMenuBar
