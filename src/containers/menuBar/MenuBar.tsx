import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { BiGift } from 'react-icons/bi';
import { RxAvatar } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import useScrollDown from '../../hooks/useScrollDown';
import logo from '../../assets/propsLogo1.png'
import './MenuBar.css'


const MenuBar = () => {
    const [isMenuBarExpanded, setIsMenuBarExpanded] = useState<boolean>(false);
    const {isShown} = useScrollDown();

    const isActiveLink = (isActive:boolean) => {
        return {
            color: isActive ? '#ffae00' : ''
        }
    }

  return (
    <nav className={`menu-bar__wrapper ${isMenuBarExpanded && 'menu-bar-expanded'}`}>

        <div className={`menu-bar__small ${!isShown && 'hidden'} `}>
            <div className='menu-bar__small__links'>
                <NavLink to={'/'} className='menu-bar__small__links__link' style={({isActive}) => isActiveLink(isActive)}>
                    <BiHome size={32}/>
                    <h3 className='menu-bar__small__links__link__title'>Home</h3>
                </NavLink>
                <NavLink to={'/rewards'} className='menu-bar__small__links__link' style={({isActive}) => isActiveLink(isActive)}>
                    <BiGift size={32}/>
                    <h3 className='menu-bar__small__links__link__title' >Rewards</h3>
                </NavLink>
                <NavLink to={'/profile'} className='menu-bar__small__links__link' style={({isActive}) => isActiveLink(isActive)}>
                    <RxAvatar size={32}/>
                    <h3 className='menu-bar__small__links__link__title'>Profile</h3>
                </NavLink>
            </div>
        </div>


        <div className={`menu-bar ${isMenuBarExpanded && 'menu-bar-expanded'}`}>
            <div className='menu-bar__logo'>
                <img className='menu-bar__logo__image' src={logo} alt="logo" />
                <h2 className={`menu-bar__logo__title ${isMenuBarExpanded && 'show'}`}>Props</h2>
            </div>
            <div className='menu-bar__links'>
                <NavLink to={'/'} className={`menu-bar__links__link`} style={({isActive}) => isActiveLink(isActive)}>
                    <BiHome size={32}/>
                    <h3 className={`menu-bar__links__link__title ${isMenuBarExpanded && 'show'}`}>Home</h3>
                </NavLink>
                <NavLink to={'/rewards'} className='menu-bar__links__link' style={({isActive}) => isActiveLink(isActive)}>
                    <BiGift size={32}/>
                    <h3 className={`menu-bar__links__link__title ${isMenuBarExpanded && 'show'}`}>Rewards</h3>
                </NavLink>
            </div>
            <div className='menu-bar__profile'>
                <div  onClick={() => setIsMenuBarExpanded(!isMenuBarExpanded)}>
                    <FaArrowRight size={32}/>
                </div>
                <NavLink to={'/profile'} className='menu-bar__links__link' style={({isActive}) => isActiveLink(isActive)}>
                    <RxAvatar size={32}/>
                    <h3 className={`menu-bar__links__link__title ${isMenuBarExpanded && 'show'}`}>Profile</h3>
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default MenuBar
