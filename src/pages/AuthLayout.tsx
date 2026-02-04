import { ConfigProvider, Layout } from "antd";
import styled, { ThemeProvider } from "styled-components";
import AuthHeader from "../components/AuthHeader";
import { getAntdLanguage } from "../i18n";
import useToggleTheme from "../hooks/useToggleTheme";
import { darkTheme, lightTheme } from "../theme/theme";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const AuthLayout = () => {
  const { isDarkTheme, toggleTheme } = useToggleTheme();
  return (
    <ConfigProvider locale={getAntdLanguage()}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <AuthLayoutWrapper>
          <Layout className="layout">
            <AuthHeader theme={{ toggleTheme, isDarkTheme }} />
            <Content className="content-container">
              <Outlet />
            </Content>
          </Layout>
        </AuthLayoutWrapper>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default AuthLayout;

const AuthLayoutWrapper = styled.div`
  .layout {
    background: ${(props) => props.theme.heroPageBackground};
  }
  .content-container {
    // padding: 10px;
    // padding-bottom:0px;
    // padding-left: 0px;
    // padding-right: 0px;
    height: 100%;
    min-height: 100vh;
    margin-top: 60px;
    // background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.title};
  }
`;
