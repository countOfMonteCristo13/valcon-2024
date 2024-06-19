import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

type MenuBarLinkProps = {
  to: string;
  linkClassName?: string;
  activeLinkClassName?: string;
  icon: IconType;
  iconSize?: number;
  linkTitle?: string;
  linkTitleClassName?: string;
}

const MenuBarLink = ({ to, linkClassName, icon: IconComponent, iconSize = 24, linkTitle, linkTitleClassName, activeLinkClassName }: MenuBarLinkProps) => {
  return (
    <NavLink to={to} className={({ isActive }) =>
      [
        linkClassName,
        isActive ? activeLinkClassName : "",
      ].join(" ")}
    >
      <IconComponent size={iconSize} />
      {
        linkTitle &&
        <p className={`${linkTitleClassName}`}>{linkTitle}</p>
      }
    </NavLink>
  )
}

export default MenuBarLink
