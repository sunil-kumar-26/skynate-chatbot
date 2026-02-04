import styled from "styled-components";
import { Logo } from "../utils/Icon";
import { Button, Space } from "antd";
import { IoSunnyOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import LanguageSelector from "../utils/LanguageSelector";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

type Theme = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

type AuthHeaderProps = {
  theme: Theme;
};
const AuthHeader = ({ theme }: AuthHeaderProps) => {
  return (
    <HeaderWrapper>
      <div className="header">
        <Logo />
        <div className="settings-container">
          <Space>
            <Link to={"/"}>
              <Button>
                <FaHome />
              </Button>
            </Link>
            {theme.isDarkTheme ? (
              <LuSunMoon
                onClick={theme.toggleTheme}
                className="dark-container"
              />
            ) : (
              <IoSunnyOutline
                onClick={theme.toggleTheme}
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

export default AuthHeader;
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
    color: white;
    position: fixed;
    width: 100%;
    height: 10%;
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
`;
