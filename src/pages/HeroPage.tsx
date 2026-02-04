import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import { i18n } from "../i18n";
import { MdArrowOutward } from "react-icons/md";
import { Button, Row, Col } from "antd";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";

export const HeroPage = () => {
  const { ref: imgRef1, isVisible: imgVisible1 } =
    useScrollAnimation<HTMLImageElement>();
  const { ref: imgRef2, isVisible: imgVisible2 } =
    useScrollAnimation<HTMLImageElement>();
  const { ref: textRef1, isVisible: textVisible1 } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: textRef2, isVisible: textVisible2 } =
    useScrollAnimation<HTMLDivElement>();
  return (
    <HeroWrapper>
      <Typography variant="h1Special" className="typographyH1">
        {i18n("heroSection.intoductionMessage")}
      </Typography>
      <Typography variant="h4Semibold" className="typographyH4">
        {i18n("heroSection.introductionDescription")}
      </Typography>
      <Button className="try-btn">
        <Link to={"/chat"}>{i18n("heroSection.button")}</Link>
        <MdArrowOutward />
      </Button>
      <Row justify={"space-around"} className="row-container1" wrap={true}>
        <Col
          ref={textRef1}
          md={12}
          xs={24}
          lg={12}
          className={`col-1 scroll-animate ${textVisible1 ? "animate" : ""}`}
        >
          <Typography variant="h2Semibold" className={"typographyH2"}>
            {i18n("heroSection.heading1")}
          </Typography>
          <Typography
            variant="h4LightRegular"
            className={"typographyH4Regular"}
          >
            {i18n("heroSection.headingDescrip1")}
          </Typography>
        </Col>
        <Col md={12} xs={24} lg={8} className="img-container">
          <img
            src="./auth-images/girlOnComputer.png"
            alt="skynate"
            ref={imgRef1}
            className={`scroll-animate ${imgVisible1 ? "animate" : ""}`}
          />
        </Col>
      </Row>
      <Row justify={"space-around"} className="row-container2" wrap={true}>
        <Col
          md={12}
          xs={24}
          ref={textRef2}
          lg={10}
          className={`col-1 scroll-animate ${textVisible2 ? "animate" : ""}`}
        >
          <Typography variant="h2Semibold" className={"typographyH2"}>
            {i18n("heroSection.heading2")}
          </Typography>
          <Typography
            variant="h4LightRegular"
            className={"typographyH4Regular"}
          >
            {i18n("heroSection.headingDescrip2")}
          </Typography>
        </Col>
        <Col md={12} xs={24} lg={8} className="img-container">
          <img
            src="./auth-images/inputOutput.png"
            alt="skynate"
            ref={imgRef2}
            className={`scroll-animate ${imgVisible2 ? "animate" : ""}`}
          />
        </Col>
      </Row>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
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

  width: 100%;
  padding-top: 38px;
  padding-bottom: 18px;
  background: ${(props) => props.theme.heroPageBackground};
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 12px;
  flex-direction: column;
  align-items: center;

  .row-container1 {
    display: flex;
    gap: 18px;
    margin-top: 30px;
  }
  .row-container2 {
    display: flex;
    gap: 18px;
    margin-top: 30px;
    flex-direction: row-reverse;
  }

  .col-1 {
    text-align: start;
    display: flex;
    gap: 30px;
    flex-direction: column;
  }

  .typographyH1 {
    color: ${(props) => props.theme.title};
    text-align: center;
  }
  .typographyH4 {
    color: ${(props) => props.theme.text};
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .try-btn {
    display: flex;
    flex-wrap: wrap;
    background-color: ${(props) => props.theme.button};
    color: ${(props) => props.theme.buttonTitle};
    font-size: 18px;
    font-weight: 600;
    line-height: auto;
    border-radius: 40px;
    transition: transform color 0.4s linear;
  }
  .try-btn:hover {
    transform: scale(1.1);
    color: ${(props) => props.theme.buttonHoverText} !important;
    border: 1px solid ${(props) => props.theme.buttonHoverText} !important ;
  }

  .typographyH2 {
    color: ${(props) => props.theme.title};
    padding: 0px 12px;
  }

  .typographyH4Regular {
    color: ${(props) => props.theme.text};
    padding: 0px 12px;
  }

  @media (max-width: 768px) {
    .typographyH2 {
      text-align: center;
    }
  }

  img {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    border-radius: 5%;
  }
  .img-container {
    display: flex;
    justify-content: center;
  }
`;
