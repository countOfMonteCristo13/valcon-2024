import { useEffect, useState } from 'react';
import MenuBarLink from '../../../components/menuBarLink/MenuBarLink';
import { BiGift, BiHome } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import logo from '../../../assets/propsLogo1.png'
import './SideMenuBar.css'

const SideMenuBar = () => {

    const [isMenuBarExpanded, setIsMenuBarExpanded] = useState<boolean>(false);
    const [showToggleExpandButton, setShowToggleExpandButton] = useState<boolean>(false);

    useEffect(() => {
        if(window.innerWidth > 1025){
            setIsMenuBarExpanded(true);
            setShowToggleExpandButton(false);
        }
        const handleResize = () => {
            if(window.innerWidth > 1025){
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
                    iconSize={32} icon={BiHome} 
                    linkTitleClassName='side-menu-bar__links__link__title' 
                    {...(isMenuBarExpanded && { linkTitle: 'Home' })}
                />
                <MenuBarLink 
                    to='/rewards' 
                    linkClassName='side-menu-bar__links__link' 
                    iconSize={32} icon={BiGift} 
                    linkTitleClassName='side-menu-bar__links__link__title'
                    {...(isMenuBarExpanded && { linkTitle: 'Rewards' })}
                />
            </div>
            <div className='side-menu-bar__profile'>
                {
                    showToggleExpandButton && 
                        <div onClick={() => setIsMenuBarExpanded(!isMenuBarExpanded)}>
                            <FaArrowRight size={32}/>
                        </div>
                }
                <MenuBarLink 
                    to='/profile' 
                    linkClassName='side-menu-bar__links__link' 
                    iconSize={32} icon={RxAvatar} 
                    {...(isMenuBarExpanded && { linkTitle: 'Profile' })}
                    linkTitleClassName='side-menu-bar__links__link__title' 
                />
            </div>
        </div>
    )
}

export default SideMenuBar
