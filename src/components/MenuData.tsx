import  { FaHome } from "react-icons/fa";
import { LuContactRound } from "react-icons/lu";
import { MdFeaturedPlayList } from "react-icons/md";
import { About } from "../utils/Icon";
import { i18n } from "../i18n";
type MenuItem={
   label: string,
    key: string,
    icon: React.ReactNode,
}

export const Items: MenuItem[] = [
  {
    label: i18n('navigation.home'),
    key: "home",
    icon:<FaHome /> ,
  },
  {
    label: i18n('navigation.aboutUs'),
    key: "about",
    icon: <About/>,
  },
  {
    label: i18n('navigation.features'),
    key: "feature",
    icon: <MdFeaturedPlayList />,
  },
   {
    label: i18n('navigation.contactUs'),
    key: "contact",
    icon:<LuContactRound />,
  },
];
