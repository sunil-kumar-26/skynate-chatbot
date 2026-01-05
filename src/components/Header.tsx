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
        <Space vertical>
          <Switch
            checkedChildren="dark"
            unCheckedChildren="ligth"
            defaultChecked
            onClick={themeSettings.toggleTheme}
            checked={themeSettings.isDarkTheme ? true : false}
          />
        </Space>
        <LanguageSelector />
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
    align-content: center;
    align-items:center;
    color: white;
    position: fixed;
    width: 100%;
  }
`;
