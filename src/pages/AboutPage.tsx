import styled from "styled-components";
import { Col, Segmented } from "antd";
import { Facebook, Github, Instagram, Linkedin } from "../utils/Icon";
import {
  GithubCard,
  InstagramCard,
  LinkedinCard,
} from "../components/SegmentCards";

import { SegmentData } from "../data/segmentData";
import { useState } from "react";
import { Typography } from "../theme/AppTypography";

export const AboutPage = () => {
  const [Mode, setMode] = useState("GithubCard");
  const Components: Record<string, React.ReactNode> = {
    GithubCard: <GithubCard />,
    InstagramCard: <InstagramCard />,
    LinkedinCard: <LinkedinCard />,
  };
  return (
    <AboutWrapper>
      <Typography variant="h1Bold" className={"typo-1"}>
        Hello,i'm the founder of skynate AI
      </Typography>
      <Col lg={18}>
        <Typography
          variant="h4Regular"
          style={{ padding: "0px 12px" }}
          className={"typo-2"}
        >
          Skynate AI is a modern web application designed to simplify complex
          tasks through intelligent, user-focused solutions. The goal of Skynate
          AI is to help individuals and businesses work smarter by leveraging
          the power of AI in a practical, accessible way.
        </Typography>
      </Col>
      <div className="social-container">
        <a href="">
          <Github />
        </a>
        <a href="">
          <Instagram />
        </a>
        <a href="">
          <Linkedin />
        </a>
        <a href="">
          <Facebook />
        </a>
      </div>
      <div style={{ display: "flex", justifyItems: "center" }}>
        <Segmented value={Mode} options={SegmentData} onChange={setMode} />
      </div>
      {SegmentData && Components[Mode]}
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .typo-1 {
    padding: 0px 12px;
    text-align: center;
    color: ${(props) => props.theme.title};
  }
  .typo-2 {
    color: ${(props) => props.theme.text};
  }

  .social-container {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    padding-left: 3px;
    justify-content: start;
    align-items: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      transition:
        transform 0.25s ease,
        filter 0.25s ease;
      will-change: transform;

      svg {
        width: 32px;
        height: 32px;
        transition: transform 0.25s ease;
      }

      &:hover {
        transform: scale(1.15);
        filter: brightness(1.1);
      }

      &:active {
        transform: scale(1.05);
      }
    }
  }
  .ant-segmented {
    display: flex;
    flex-wrap: wrap;
  }

  .ant-segmented-group {
    display: flex;
    flex-wrap: wrap;
  }

  .ant-segmented-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .ant-segmented-item-icon {
    display: flex;
    align-items: center;
  }

  .ant-segmented-item-label {
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 1024px) {
    .social-container {
      // width: 80%;
      justify-content: center;
    }
  }
`;
