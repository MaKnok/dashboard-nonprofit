import Image from "next/image";
import Menu from "./Menu";
import SearchIcon from "./icons/searchIcon";
import ConfigIcon from "./icons/configIcon";
import UserIcon from "./icons/userIcon";
import { metadataInfo } from "@/lib/data";
import { colors } from "@/lib/data";

const institutionName: string = metadataInfo[0].institution;
const logoURL: string = `/logos/${institutionName}/logo.png`;
const color: any = colors[0];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-jhTopBar h-[136px]">
      {/* LOGO */}
      <Image src={logoURL} alt="logo" width={112} height={104} />

      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 py-2 md:px-3 md:py-2">
        <SearchIcon color={color.jhSecondary01} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[335px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* MENU */}
      <Menu />

      {/* CONFIG AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <ConfigIcon color={color.jhPrimary02} />
        <UserIcon color={color.jhPrimary01} />
      </div>
    </div>
  );
};

export default Navbar;
