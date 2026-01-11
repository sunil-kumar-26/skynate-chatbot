import styled from "styled-components";
import { Logo } from "../utils/Icon";
import Menu from "./Menu";
import { Space, Switch } from "antd";
import LanguageSelector from "../utils/LanguageSelector";

type HeaderProps = { themeSettings: any };
const Header = ({ themeSettings }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <div className="header">
        <Logo />
        <div className="settings-container">
          <Space vertical>
            <Switch
              checkedChildren="dark"
              unCheckedChildren="light"
              defaultChecked
              onClick={themeSettings.toggleTheme}
              checked={themeSettings.isDarkTheme ? true : false}
            />
          </Space>
          <LanguageSelector />
        </div>
        <Menu />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
const HeaderWrapper = styled.div`
  .header {
    background-color: black;
    display: flex !important ;
    justify-content: space-between;
    padding: 5px;
    gap: 12px;
    align-content: center;
    color: white;
    position: fixed;
    width: 100%;
    z-index:10;
  }
  .settings-container {
    display: flex;
    height: 50px;
    flex-wrap: wrap;
    width: 40%;
    justify-content: space-around;
    align-items: center;
  }
`;
