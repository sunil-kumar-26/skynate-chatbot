import {
  HomeOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { FaRegUserCircle } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

type MenuItem = Required<MenuProps>["items"][number];

export const SideBarTopItems: MenuItem[] = [
  { key: "home", icon: <HomeOutlined />, label: "Home" },
  { key: "theme", icon: <VscColorMode />, label: "Theme" },
  { key: "user", icon: <FaRegUserCircle />, label: "User", disabled: true },
  { key: "setting", icon: <SettingOutlined />, label: "Setting",disabled:true },
];

export const SideBarBottomItems: MenuItem[] = [
  {
    key: "logout",
    icon: <LogoutOutlined />,
    label: "LogOut",
  },
];
