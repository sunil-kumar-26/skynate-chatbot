import { Button, Col, Row } from "antd";
import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import { Github, Instagram, Linkedin } from "../utils/Icon";

const GithubCard = () => {
  return (
    <CardsWrapper>
      <Row>
        <Col lg={24} className="col-1">
          <div className="biodata-card">
            <div className="head-conatiner">
              <Github />
              <Typography variant="h2Bold" className={"title"}>
                GitHub
              </Typography>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", padding: "6px" }}>
              Follow on Github, to stay updated for new projects
            </div>

            <Button href="https://github.com/sunil-kumar-26">Follow</Button>
          </div>
          <div className="img-container">
            <img
              src="/auth-images/github.png"
              alt="github"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </div>
        </Col>
      </Row>
    </CardsWrapper>
  );
};

const InstagramCard = () => {
  return (
    <CardsWrapper>
      <Row>
        <Col lg={24} className="col-1">
          <div className="biodata-card">
            <div className="head-conatiner">
              <Instagram />
              <Typography variant="h2Bold" className={"title"}>
                Instagram
              </Typography>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", padding: "6px" }}>
              Follow on Instagram for latest information
            </div>

            <Button href="https://www.instagram.com/suniel_singh_84000/">
              Follow
            </Button>
          </div>
          <div className="img-container">
            <img
              src="/auth-images/insta.png"
              alt="github"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </div>
        </Col>
      </Row>
    </CardsWrapper>
  );
};

const LinkedinCard = () => {
  return (
    <CardsWrapper>
      <Row>
        <Col lg={24} className="col-1">
          <div className="biodata-card">
            <div className="head-conatiner">
              <Linkedin />
              <Typography variant="h1Bold" className={"title"}>
                Linkedin
              </Typography>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", padding: "6px" }}>
              Connect in Linkedin to stay updated for new updates
            </div>

            <Button href="https://www.linkedin.com/in/sunil-kumar-53996a36a/">
              Follow
            </Button>
          </div>
          <div className="img-container">
            <img
              src="/auth-images/linked.png"
              alt="github"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </div>
        </Col>
      </Row>
    </CardsWrapper>
  );
};

export { GithubCard, InstagramCard, LinkedinCard };

const CardsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  .col-1 {
    background: linear-gradient(
      135deg,
      #0b0b0b 0%,
      #111111 35%,
      #1a1a1a 55%,
      #2a2a2a 75%,
      #3a3a3a 100%
    );
    color: white;
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0px 40px 50px 2px ${(props) => props.theme.shadow};
  }

  .data-container {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }

  .biodata-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 12px;
    width: 30%;
    padding: 74px 32px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    border-top-left-radius: 0px;
  }

  .head-conatiner {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 6px;
  }

  .title {
    color: #f6f9f6;
  }

  .img-container {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    .biodata-card {
      width: 100%;
      padding: 12px;
    }

    .col-1 {
      flex-direction: column-reverse;
      box-shadow: 0px 0px 50px 2px ${(props) => props.theme.shadow};
    }

    .img-container {
      width: 100%;
    }
  }
`;
