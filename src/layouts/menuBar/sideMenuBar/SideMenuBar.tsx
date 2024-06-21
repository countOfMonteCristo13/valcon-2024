import { useEffect, useState } from 'react';
import MenuBarLink from '../../../components/menuBarLink/MenuBarLink';
import logo from '../../../assets/propsLogo1.png'
import { LAPTOP_WIDTH_SIZE } from '../../../utils/constants';
import { LuArrowLeft, LuArrowRight, LuGift, LuHome, LuLogOut } from 'react-icons/lu';
import { logoImageStyle, logoTitleStyle, showLogoTitle, sideMenuBarActiveLinkStyle, sideMenuBarLinkStyle, sideMenuBarStyle, toggleExpansionButton } from './SideMenuBarStyle.css';
import { cursorPointer, flexCenter, flexColumn, fullWidth, gap0_5, gap1, textColor } from '../../../styles/index.css';

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
            <div className={`${flexColumn} ${gap1}`}>
                <div className={`${flexCenter} ${gap0_5}`}>
                    <img className={logoImageStyle} src={logo} alt="logo" />
                    <h2 className={`${logoTitleStyle} ${textColor} ${isMenuBarExpanded && showLogoTitle}`}>Props</h2>
                </div>
                {
                    showToggleExpandButton && (
                        isMenuBarExpanded ?
                        <div 
                            onClick={() => setIsMenuBarExpanded(!isMenuBarExpanded)} 
                            className={`${sideMenuBarLinkStyle} ${cursorPointer}`}
                        >
                            <LuArrowLeft size={32} className={toggleExpansionButton}/>
                            <p className={`${textColor}`}>Shrink</p>
                        </div>
                        :
                        <div 
                            onClick={() => setIsMenuBarExpanded(!isMenuBarExpanded)} 
                            className={`${sideMenuBarLinkStyle} ${cursorPointer}`}
                        >
                            <LuArrowRight size={32} className={toggleExpansionButton}/>
                        </div>
                    )
                }
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
            </div>
            <div className={fullWidth}>
                <MenuBarLink 
                    to='/login' 
                    linkClassName={sideMenuBarLinkStyle} 
                    iconSize={32} icon={LuLogOut} 
                    {...(isMenuBarExpanded && { linkTitle: 'Logout' })}
                />
            </div>
        </div>
    )
}

export default SideMenuBar
