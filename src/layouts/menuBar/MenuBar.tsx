import BottomMenuBar from './bottomMenuBar/BottomMenuBar';
import SideMenuBar from './sideMenuBar/SideMenuBar';
import { zIndex950 } from '../../styles/index.css';

const MenuBar = () => {

  return (
    <nav className={zIndex950}>
        <BottomMenuBar/>
        <SideMenuBar/>
    </nav>
  )
}

export default MenuBar
