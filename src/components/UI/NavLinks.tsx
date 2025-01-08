import { TNavLink } from "../../types/app.type";
import { NavLink } from "react-router";

interface Props {
  navStyle: string;
  itemStyle: string;
  navLinks: TNavLink[];
}
export default function NavLinks({ navStyle, navLinks, itemStyle }: Props) {
  return (
    <nav className={navStyle}>
      {navLinks.map((link) => (
        <NavLink key={link.to} to={link.to} className={itemStyle}>
          {link.icon}
          <span>{link.text}</span>
        </NavLink>
      ))}
    </nav>
  );
}
