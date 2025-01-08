import { Outlet } from "react-router";
import NavLinks from "../components/UI/NavLinks";

export default function TrainerIndex() {
  return (
    <div className="p-4 h-full w-full ">
      <NavLinks
        navStyle="flex w-full justify-around h-12 items-center"
        itemStyle="px-3 border items-center flex h-full rounded bg-black text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300"
        navLinks={NAV_LINKS}
      />
      <Outlet />
    </div>
  );
}

const NAV_LINKS = [
  {
    to: "trainees",
    text: "Trainees",
  },
  {
    to: "trainees/edit",
    text: "Create",
  },
];
