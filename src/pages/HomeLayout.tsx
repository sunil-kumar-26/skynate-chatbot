import { ConfigProvider, Layout } from "antd";
import styled, { ThemeProvider } from "styled-components";
import { getAntdLanguage } from "../i18n";
import useToggleTheme from "../hooks/useToggleTheme";
import { darkTheme, lightTheme } from "../theme/theme";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const { Content } = Layout;

const HomeLayout = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/auth/login" />;

  const { isDarkTheme, toggleTheme } = useToggleTheme();
  return (
    <ConfigProvider locale={getAntdLanguage()}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <AuthLayoutWrapper>
          <Layout className="layout">
            <Content className="content-container">
              <div className="sidebar">
                <SideBar toggle={toggleTheme} isDarkTheme={isDarkTheme} />
              </div>
              <Outlet  context={{isDarkTheme,toggleTheme}}/>
            </Content>
          </Layout>
        </AuthLayoutWrapper>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default HomeLayout;

const AuthLayoutWrapper = styled.div`
  .layout {
    background: ${(props) => props.theme.heroPageBackground};
  }
  .content-container {
    display: flex;
    // flex-wrap:wrap;
    flex-direction: row;
    height: 100%;
    min-height: 100vh;
    // background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.title};
  }
  .sidebar {
    display: flex;
  }
  @media (max-width: 768px) {
    .sidebar {
      display: none;
    }
  }
`;
