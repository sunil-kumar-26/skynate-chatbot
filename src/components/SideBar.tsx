import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { SideBarBottomItems, SideBarTopItems } from "../data/sidebarPropsData";

type SideBarProps = {
  toggle: () => void;
  isDarkTheme: boolean;
};

const SideBar: React.FC<SideBarProps> = ({
  toggle,
  isDarkTheme,
}: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const nevigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleLogOut = (key: string | object) => {
    if (key === "home") {
      nevigate("/");
    }
    if (key === "setting") {
    }
    if (key === "theme") {
      toggle();
    }
    if (key === "logout") {
      localStorage.removeItem("token");
      nevigate("/");
    }
  };

  return (
    <SideBarWrapper>
      <div className="top-menu-container">
        <div onClick={toggleCollapsed} className="toggleBtn">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <Menu
          mode="inline"
          theme={isDarkTheme ? "dark" : "light"}
          inlineCollapsed={collapsed}
          items={SideBarTopItems}
          onClick={(value) => handleLogOut(value.key)}
          className="menu"
        />
      </div>

      <Menu
        mode="inline"
        theme={isDarkTheme ? "dark" : "light"}
        inlineCollapsed={collapsed}
        items={SideBarBottomItems}
        onClick={(value) => handleLogOut(value.key)}
        className="menu"
      />
    </SideBarWrapper>
  );
};

export default SideBar;

const SideBarWrapper = styled.div`
  background: ${(props) => props.theme.chatgptSidebar};
  display: flex;
  flex-direction: column;
  text-align: flex-start;
  justify-content: space-between;

  .toggleBtn {
    text-align: center;
    cursor: pointer;
    padding: 16px 0px;
    // border-bottom:1px solid ${(props) => props.theme.chatgptHeaderBorder};
    background: ${(props) => props.theme.chatgptSidebar} !important;
  }
  .menu {
    background: ${(props) => props.theme.chatgptSidebar};
  }
  .ant-menu-title-content {
    padding-right: 46px;
  }

  .top-menu-container {
    display: flex;
    flex-direction: column;
    text-align: flex-start;
    padding-top: 6px;
  }
`;
