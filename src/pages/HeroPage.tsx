import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import { i18n } from "../i18n";
import { MdArrowOutward } from "react-icons/md";
import { Button, Row, Col, Card } from "antd";

export const HeroPage = () => {
  return (
    <HeroWrapper>
      <Typography variant="h1Bold" className="typographyH1">
        {i18n("heroSection.intoductionMessage")}
      </Typography>
      <Typography variant="h4Semibold" className="typographyH4">
        {i18n("heroSection.introductionDescription")}
      </Typography>
      <Button className="try-btn">
        {i18n("heroSection.button")}
        <MdArrowOutward />
      </Button>
      <Row justify={"space-around"} className="row-container1" wrap={true}>
        <Col md={12} xs={24} lg={12} className="col-1">
          <Typography variant="h2Semibold" className={"typographyH2"}>
            {i18n('heroSection.heading1')}
          </Typography>
          <Typography
            variant="h4LightRegular"
            className={"typographyH4Regular"}
          >
           {i18n('heroSection.headingDescrip1')}
          </Typography>
        </Col>
        <Col md={12} xs={24} lg={8} className="img-container">
          <img src="./public\auth-images\girlOnComputer.png" alt="skynate" />
        </Col>
      </Row>
      <Row justify={"space-around"} className="row-container2" wrap={true}>
        <Col md={12} xs={24} lg={10} className="col-1">
          <Typography variant="h2Semibold" className={"typographyH2"}>
          {i18n('heroSection.heading2')}
          </Typography>
          <Typography
            variant="h4LightRegular"
            className={"typographyH4Regular"}
          >
           {i18n('heroSection.headingDescrip2')}
          </Typography>
        </Col>
        <Col md={12} xs={24} lg={8} className="img-container">
          <img src="./public\auth-images\inputOutput.png" alt="skynate" />
        </Col>
      </Row>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
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
    text-align: start;
    color: ${(props) => props.theme.title};
  }

  .typographyH4Regular {
    text-align: start;
    color: ${(props) => props.theme.title};
  }

  @media (max-width: 768px) {
    .typographyH2 {
      text-align: center;
    }
    .typographyH4Regular {
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
