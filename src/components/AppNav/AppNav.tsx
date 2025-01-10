import {
  HomeSvg,
  ProfileSvg,
  TraineeSvg,
  TrainerSvg,
} from "../UI/Icons/IconsSvg";
import NavLinks from "../UI/NavLinks";

export default function AppNav() {
  return (
    <NavLinks
      navStyle=" flex w-full justify-between py-2 px-6 h-16 bg-slate-100"
      itemStyle="w-6 flex flex-col items-center justify-between"
      navLinks={NAV_LINKS}
    />
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
