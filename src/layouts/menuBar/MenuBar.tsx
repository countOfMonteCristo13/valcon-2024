import BottomMenuBar from './bottomMenuBar/BottomMenuBar';
import SideMenuBar from './sideMenuBar/SideMenuBar';
import './MenuBar.css'

const MenuBar = () => {

  return (
    <nav className='menu-bar'>
        <BottomMenuBar/>
        <SideMenuBar/>
    </nav>
  )
}

export default MenuBar
