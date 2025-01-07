import { NavLink } from "react-router";
import { HomeSvg, ProfileSvg, TraineeSvg, TrainerSvg } from "../Icons/IconsSvg";

export default function AppNav() {
  return (
    <nav className="flex w-full justify-between py-2  px-6 h-16 bg-slate-100 ">
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="w-6 flex flex-col items-center justify-between"
        >
          {link.icon}
          <span>{link.text}</span>
        </NavLink>
      ))}
    </nav>
  );
}

const NAV_LINKS: { to: string; icon: JSX.Element; text: string }[] = [
  {
    text: "Home",
    to: "/",
    icon: <HomeSvg />,
  },
  {
    text: "Trainee",
    to: "/trainee",
    icon: <TraineeSvg />,
  },
  {
    text: "Profile",
    to: "/profile",
    icon: <ProfileSvg />,
  },
  {
    text: "Trainer",
    to: "/trainer",
    icon: <TrainerSvg />,
  },
];
