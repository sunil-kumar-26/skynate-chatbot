import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import Header from "../components/Header";
import { HeroPage } from "./HeroPage";
import FeaturePage from "./FeaturePage";

const { Content, Footer } = Layout;
interface LayoutPageProps {
  themeSettings: { toggleTheme: any; isDarkTheme: boolean };
}

const LayoutPage: React.FC<LayoutPageProps> = ({ themeSettings }) => {
  return (
    <LayoutPageWrapper>
      <Layout className="layout">
        <Header themeSettings={themeSettings} />
        <Content className="content-container">
          <HeroPage />
          <FeaturePage/>
        </Content>
        <Footer style={{ textAlign: "center", border: "1px solid black" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </LayoutPageWrapper>
  );
};

export default LayoutPage;

const LayoutPageWrapper = styled.div`
  .layout {
    background: ${(props) => props.theme.heroPageBackground};z
  }
  .content-container {
    padding: 10px;
    padding-bottom:0px;
    padding-left: 0px;
    padding-right: 0px;
    height: 100%;
    min-height: 100vh;
    margin-top: 70px;
    // background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.title};
  }
`;
