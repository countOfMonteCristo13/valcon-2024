import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

type MenuBarLinkProps = {
    to: string;
    linkClassName?:string;
    icon: IconType;
    iconSize?:number;
    linkTitle?: string;
    linkTitleClassName:string;
}

export const ACTIVE_COLOR = '#ffae00';

const isActiveLink = (isActive:boolean) => {
    return {
        color: isActive ? ACTIVE_COLOR : '',
    }
}

const MenuBarLink = ({to, linkClassName,icon:IconComponent,iconSize=24,linkTitle,linkTitleClassName}: MenuBarLinkProps) => {
  return (
    <NavLink to={to} className={linkClassName} style={({isActive}) => isActiveLink(isActive)}>
        <IconComponent size={iconSize}/>
        {
          linkTitle &&
        <h3 className={`${linkTitleClassName}`}>{linkTitle}</h3>
        }
    </NavLink>
  )
}

export default MenuBarLink
