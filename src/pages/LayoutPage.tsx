import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import Header from "../components/Header";
import { i18nHtml } from "../i18n";

const { Content, Footer } = Layout;
interface LayoutPageProps {
  themeSettings: { toggleTheme: any; isDarkTheme: boolean };
}

const LayoutPage: React.FC<LayoutPageProps> = ({ themeSettings }) => {
  return (
    <LayoutPageWrapper>
      <Layout>
        <Header themeSettings={themeSettings} />
        <Content className="content-container">
          {i18nHtml("messages.lorem")}
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
  .content-container {
    padding: 10px;
    height: 100%;
    min-height: 100vh;
    margin-top: 70px;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.title};
  }
`;
