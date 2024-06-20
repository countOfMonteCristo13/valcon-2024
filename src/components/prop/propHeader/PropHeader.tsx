import { BiCoin } from 'react-icons/bi'
import { PropModel } from '../../../models/PropsData'
import { buildImageURL } from '../../../utils/imageBuilder'
import { flexAlignCenter, gap0_5} from '../../../styles/index.css';
import { propHeaderPointsStyle, propHeaderStyle } from './PropHeader.css';
import { propImageStyle } from '../Prop.css';
import { useTheme } from '../../../context/ThemeContext';

type PropHeaderProps = {
    prop: PropModel;
}

const PropHeader = ({prop}: PropHeaderProps) => {

  const {theme} = useTheme();

    return (
      <div className={`${flexAlignCenter} ${propHeaderStyle} ${gap0_5}`}>
        <div className={`${flexAlignCenter} ${gap0_5}`}>
          <img src={buildImageURL(theme,prop.toUser.profileImageReference)} alt="profile-image" className={propImageStyle} />
          <p>{prop.toUser.firstName} {prop.toUser.lastName}</p>
        </div>
        <div className={`${flexAlignCenter} ${propHeaderPointsStyle}`}>
          <h3>{prop.propPoints}</h3>
          <BiCoin size={24}/>
        </div>
      </div>
    )
}

export default PropHeader
