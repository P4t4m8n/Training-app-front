import { HamburgerSvg, SettingsSvg } from "../UI/Icons/IconsSvg";

export default function Header() {
  return (
    <header className="w-full h-16 p-4 pt-6 fill-black stroke-black flex justify-between items-center bg-slate-100">
      <button className=" ">
        <HamburgerSvg />
      </button>
      <button>
        <SettingsSvg />
      </button>
    </header>
  );
}
