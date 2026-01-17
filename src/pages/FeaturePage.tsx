import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import { Col, Row } from "antd";
import { i18n } from "../i18n";
import { FaSteamSymbol } from "react-icons/fa6";
import { FaWordpressSimple } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FeaturePage = () => {
  const { ref: textRef1, isVisible: visible1 } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: textRef2, isVisible: visible2 } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: textRef3, isVisible: visible3 } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: textRef4, isVisible: visible4 } =
    useScrollAnimation<HTMLDivElement>();

  const { ref: imgRef1, isVisible: imgvisible1 } =
    useScrollAnimation<HTMLImageElement>();
  const { ref: imgRef2, isVisible: imgvisible2 } =
    useScrollAnimation<HTMLImageElement>();
  const { ref: imgRef3, isVisible: imgvisible3 } =
    useScrollAnimation<HTMLImageElement>();
  return (
    <FeatureWrapper>
      <div
        className={`feature col-1 scroll-animate ${visible1 ? "animate" : ""}`}
        ref={textRef1}
      >
        <Typography variant="h1Special" className={"feature-headline"}>
          {i18n("featureSection.mainHeading")}
        </Typography>
        <Typography variant="h4Regular" className={"feature-subheadline"}>
          Skynate provides the simplest and quickest solutions, without
          involving difficult interaction with free of use
        </Typography>
      </div>

      <Row className="cards-container">
        <Col lg={5} sm={10} xs={22} className="blue-card">
          <Typography
            variant="h1Bold"
            style={{ textAlign: "center", color: "#5298f9" }}
          >
            <MdMoneyOff /> Free
          </Typography>
          <p style={{ textAlign: "center" }}>You can use it for free</p>
        </Col>
        <Col lg={5} sm={10} xs={22} className="greenContainer">
          <Typography
            variant="h1Bold"
            style={{ textAlign: "center", color: " #428fa8ff" }}
          >
            <FaWordpressSimple /> Simple
          </Typography>
          <p style={{ textAlign: "center" }}>You can use it for free</p>
        </Col>
        <Col lg={5} sm={10} xs={22} className="orangeContainer">
          <Typography
            variant="h1Bold"
            style={{ textAlign: "center", color: " #8A5DF6" }}
          >
            <FaSteamSymbol /> Quick
          </Typography>
          <p style={{ textAlign: "center" }}>You can use it for free</p>
        </Col>
        <Col lg={5} sm={10} xs={22} className="purpleContainer">
          <Typography
            variant="h1Bold"
            style={{ textAlign: "center", color: "#b46ad9" }}
            color="link"
          >
            <FaUserFriends /> Friendly
          </Typography>
          <p style={{ textAlign: "center" }}>You can use it for free</p>
        </Col>
      </Row>

      <Row justify={"space-around"} className="row1">
        <Col
          xs={24}
          md={12}
          lg={8}
          ref={textRef2}
          className={`col-1 scroll-animate ${visible2 ? "animate" : ""}`}
        >
          <Typography variant="h3Semibold" className={"row1typography1"}>
            {i18n("featureSection.easyToUse.heading")}
          </Typography>
          <Typography variant="h4LightRegular" className={"row1typography2"}>
            <div> {i18n("featureSection.easyToUse.summary1")}</div>
            <div>{i18n("featureSection.easyToUse.summary2")}</div>
            <div>{i18n("featureSection.easyToUse.summary3")}</div>
            <div>{i18n("featureSection.easyToUse.summary4")}</div>
          </Typography>
        </Col>
        <Col lg={10} className="img-container">
          <img
            ref={imgRef1}
            src="./auth-images/easeUse.png"
            alt="Easy use"
            className={`img1 col-1 scroll-animate ${imgvisible1 ? "animate" : ""}`}
          />
        </Col>
      </Row>
      <Row justify={"space-around"} className="row2">
        <Col lg={10} className="img-container">
          <img
            src="./auth-images/openSource.png"
            alt="Easy use"
            ref={imgRef2}
            className={`img2 col-1 scroll-animate ${imgvisible2 ? "animate" : ""}`}
          />
        </Col>
        <Col
          xs={24}
          md={12}
          lg={10}
          ref={textRef3}
          className={`col-2 scroll-animate ${visible3 ? "animate" : ""}`}
        >
          <Typography variant="h3Semibold" className={"row2typography1"}>
            {i18n("featureSection.noAccount.heading")}
          </Typography>
          <Typography variant="h4LightRegular" className={"row2typography2"}>
            <div> {i18n("featureSection.noAccount.summary1")}</div>
            <div>{i18n("featureSection.noAccount.summary2")}</div>
            <div>{i18n("featureSection.noAccount.summary3")}</div>
            <div>{i18n("featureSection.noAccount.summary4")}</div>
          </Typography>
        </Col>
      </Row>
      <Row justify={"space-around"} className="row3">
        <Col
          xs={24}
          md={12}
          lg={8}
          ref={textRef4}
          className={`col-3 scroll-animate ${visible4 ? "animate" : ""}`}
        >
          <Typography variant="h3Semibold" className={"row3typography1"}>
            {i18n("featureSection.openSource.heading")}
          </Typography>
          <Typography variant="h4LightRegular" className={"row3typography2"}>
            <div> {i18n("featureSection.openSource.summary1")}</div>
            <div>{i18n("featureSection.openSource.summary2")}</div>
            <div>{i18n("featureSection.openSource.summary3")}</div>
          </Typography>
        </Col>
        <Col lg={10} className="img-container">
          <img
            src="./auth-images/noAccount.png"
            alt="Easy use"
            ref={imgRef3}
            className={`img3 col-1 scroll-animate ${imgvisible3 ? "animate" : ""}`}
          />
        </Col>
      </Row>
    </FeatureWrapper>
  );
};

export default FeaturePage;

const FeatureWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 70px;
  align-items: center;

  .cards-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
  }
  .purpleContainer {
    color: #b46ad9;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px;
    border-radius: 12px;
    // box-shadow: 0 5px 20px #b46ad9;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition:
      box-shadow 0.5s ease,
      transform 0.5s ease;
  }
  .purpleContainer:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    transform: translateY(-12px);
  }

  .greenContainer {
    color: #428fa8ff;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px;
    border-radius: 12px;
    flex-wrap: wrap;
    // box-shadow: 0 5px 20px #428fa8;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition:
      box-shadow 0.5s ease,
      transform 0.5s ease;
  }

  .greenContainer:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    transform: translateY(-12px);
  }

  .orangeContainer {
    color: #8a5df6;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.15);
    // box-shadow: 0 5px 20px #8a5df6;
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition:
      box-shadow 0.5s ease,
      transform 0.5s ease;
  }

  .orangeContainer:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    transform: translateY(-12px);
  }

  .blue-card {
    color: #5298f9;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px;
    border-radius: 12px;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.15);
    // box-shadow: 0 5px 20px #5298f9;
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition:
      box-shadow 0.5s ease,
      transform 0.5s ease;
  }
  .blue-card:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    transform: translateY(-12px);
  }

  .feature {
    display: flex;
    gap: 12px;
    flex-direction: column;
    text-align: center;
    height: 100%;
    min-height: 140px;
    justify-content: center;
    transition: transform 0.5s ease;
  }
  .feature:hover {
    transform: translateY(-12px);
  }

  .feature-subheadline {
    color: ${(props) => props.theme.text};
  }
  .feature-headline {
    background: ${(props) => props.theme.gradientText};
    padding: 6px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .img-container {
    display: flex;
    justify-content: center;
  }

  .row1 {
    display: flex;
    gap: 18px;
  }
  .row2 {
    display: flex;
    gap: 18px;
  }
  .row3 {
    display: flex;
    gap: 18px;
    padding-bottom: 40px;
  }
  .col-1 {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .col-2 {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .col-3 {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .row1typography1 {
    text-align: start;
    padding: 0px 12px;
    color: ${(props) => props.theme.title};
  }

  .row1typography2 {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0px 12px;
    color: ${(props) => props.theme.text};
  }
  .row2typography1 {
    text-align: start;
    padding: 0px 12px;
    color: ${(props) => props.theme.title};
  }
  .row2typography2 {
    display: flex;
    flex-direction: column;
    padding: 0px 12px;
    gap: 12px;
    color: ${(props) => props.theme.text};
  }
  .row3typography1 {
    text-align: start;
    padding: 0px 12px;
    color: ${(props) => props.theme.title};
  }
  .row3typography2 {
    display: flex;
    padding: 0px 12px;
    flex-direction: column;
    gap: 12px;
    color: ${(props) => props.theme.text};
  }

  .img1 {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    border-radius: 5%;
  }
  .img2 {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    border-radius: 5%;
  }
  .img3 {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    border-radius: 5%;
  }
  @media (max-width: 768px) {
    .row1typography1 {
      text-align: center;
    }

    .row2typography1 {
      text-align: center;
    }

    .row2typography2 {
    }
    .row3typography1 {
      text-align: center;
    }

    .row3typography2 {
    }
    .row2 {
      display: flex;
      flex-direction: column-reverse;
      gap: 18px;
    }
  }
  .scroll-animate {
    opacity: 0;
    filter: blur(12px);
    transform: translateY(40px);
  }

  .scroll-animate.animate {
    animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
  }

  @keyframes text-focus-in {
    0% {
      opacity: 0;
      filter: blur(12px);
      transform: translateY(40px) scale(0.95);
    }
    100% {
      opacity: 1;
      filter: blur(0);
      transform: translateY(0) scale(1);
    }
  }
`;
