import styled from "styled-components";
import { Logo } from "../utils/Icon";
// import Menu from "./Menu";
import { Button, Drawer, Space } from "antd";
import { IoSunnyOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import LanguageSelector from "../utils/LanguageSelector";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

type HeaderProps = { themeSettings: any };
const Header = ({ themeSettings }: HeaderProps) => {
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState<boolean>(false);
  const handleDrawer = () => setOpen(!open);
  return (
    <HeaderWrapper>
      <div className="header">
        <Logo />
        {/* <Menu /> */}
        <div className="settings-container">
          <Space>
            <Link to={"/auth/login"}>
              {!token && <Button className="login"> Login in</Button>}
            </Link>
            <Link to={"/auth/signup"}>
              {!token && <Button className="signup">Sign up </Button>}
            </Link>
            {themeSettings?.isDarkTheme ? (
              <LuSunMoon
                onClick={themeSettings.toggleTheme}
                className="dark-container"
              />
            ) : (
              <IoSunnyOutline
                onClick={themeSettings.toggleTheme}
                className="light-container"
              />
            )}
            <LanguageSelector />
          </Space>
        </div>
        <Button
          className="drawer-btn"
          onClick={() => {
            handleDrawer();
          }}
        >
          <MenuUnfoldOutlined />
        </Button>
        {
          <Drawer
            size={200}
            open={open}
            placement="top"
            closable={{ "aria-label": "Close Button" }}
            onClose={handleDrawer}
          >
            <Space>
              <Link to={"/auth/login"}>
                <Button className="login"> Login in</Button>
              </Link>
              <Link to={"/auth/signup"}>
                <Button className="signup">Sign up </Button>
              </Link>
              {
                <Button onClick={() => themeSettings.toggleTheme()}>
                  {themeSettings.isDarkTheme ? (
                    <LuSunMoon className="dark-container" />
                  ) : (
                    <IoSunnyOutline className="light-container" />
                  )}
                </Button>
              }
              <LanguageSelector />
            </Space>
          </Drawer>
        }
      </div>
    </HeaderWrapper>
  );
};

export default Header;
const HeaderWrapper = styled.div`
  .dark-container {
    color: #f6f9f6;
    font-size: 32px;
    background: #6e6a6a;
    padding: 4px;
    border-radius: 10%;
    cursor: pointer;
    transition:
      padding 0.3s linear,
      color 0.3s linear;
  }
  .light-container {
    color: #f6f9f6;
    height: 30%;
    background: #6e6a6a;
    font-size: 32px;
    padding: 4px;
    cursor: pointer;
    border-radius: 10%;
    transform: rotate(0deg);
    transition:
      padding 0.3s linear,
      color 0.3s linear;
  }

  .light-container:hover {
    padding: 6px;
  }
  .dark-container:hover {
    padding: 6px;
  }
  .header {
    display: flex !important ;
    justify-content: space-between;
    padding: 5px;
    gap: 12px;
    align-content: center;
    align-items: center;
    color: white;
    position: fixed;
    width: 100%;
    z-index: 10;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .settings-container {
    display: flex;
    height: 50px;
    flex-wrap: wrap;
    width: 40%;
    justify-content: end;
    padding-right: 0.5rem;
    align-items: center;
  }
  .login {
    background: ${(props) => props.theme.gradientText};
    padding: 6px;
    -webkit-background-clip: text;
    border: 1px solid #4096ff;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    transition: transform 0.2s linear;
  }

  .login:hover {
    transform: scale(1.1);
    border: 1px solid #4096ff !important;
  }

  .signup {
    margin-right: 12px;
    background: ${(props) => props.theme.body};
    padding: 6px;
    border: 1px solid ${(props) => props.theme.title};
    font-weight: 500;
    color: ${(props) => props.theme.title} !important;
    transition:
      background 0.2s linear,
      border 0.2s linear,
      color 0.2s linear;
  }

  .signup:hover {
    border: 1px solid${(props) => props.theme.title}!important;
    background: ${(props) => props.theme.title} !important;
    color: ${(props) => props.theme.body} !important;
  }
  .drawer-btn {
    display: none;
  }

  @media (max-width: 425px) {
    .settings-container {
      display: none;
    }
    .drawer-btn {
      display: flex;
    }
  }
`;
