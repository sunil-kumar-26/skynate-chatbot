import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import LayoutWrapper from "./pages/LayoutWrapper";
import useToggleTheme from "./hooks/useToggleTheme";
import LayoutPage from "./pages/LayoutPage";
import { ConfigProvider } from "antd";
import { getAntdLanguage } from "./i18n";
// import ScrollRestoration from "./utils/ScrollRestoration";

function App() {
  const { isDarkTheme, toggleTheme } = useToggleTheme();
  return (
    <>
      <ConfigProvider locale={getAntdLanguage()}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <LayoutWrapper>
            <LayoutPage themeSettings={{ toggleTheme, isDarkTheme }} />
            {/* <ScrollRestoration /> */}
          </LayoutWrapper>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
