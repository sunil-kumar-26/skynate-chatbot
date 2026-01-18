import styled from "styled-components";
import { Logo } from "../utils/Icon";
import Menu from "./Menu";
import { Space } from "antd";
import { IoSunnyOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import LanguageSelector from "../utils/LanguageSelector";

type HeaderProps = { themeSettings: any };
const Header = ({ themeSettings }: HeaderProps) => {
  console.log("theme", themeSettings.isDarkTheme);
  return (
    <HeaderWrapper>
      <div className="header">
        <Logo />
        <Menu />
        <div className="settings-container">
          <Space>
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
    transition: padding 0.3s linear, color 0.3s linear;
  }
  .light-container {
    color: #f6f9f6;
    height:30%;
    background: #6e6a6a;
    font-size: 32px;
    padding: 4px;
    cursor: pointer;
    border-radius: 10%;
    transform: rotate(0deg);
    transition: padding 0.3s linear, color 0.3s linear;
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
    padding-right:0.5rem;
    align-items: center;
  }
`;
