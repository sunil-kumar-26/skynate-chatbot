import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import { Col, Row } from "antd";
import { i18n } from "../i18n";

const FeaturePage = () => {
  return (
    <FeatureWrapper>
      <Typography variant="h1Bold" className={"feature-headline"}>
        {i18n('featureSection.mainHeading')}
      </Typography>
      <Row justify={"space-around"} className="row1">
        <Col xs={24} md={12} lg={8} className="col-1">
          <Typography variant="h3Semibold" className={"row1typography1"}>
            {i18n('featureSection.easyToUse.heading')}
          </Typography>
          <Typography variant="h4LightRegular" className={"row1typography2"}>
            <div> {i18n('featureSection.easyToUse.summary1')}</div>
            <div>{i18n('featureSection.easyToUse.summary2')}</div>
            <div>{i18n('featureSection.easyToUse.summary3')}</div>
            <div>{i18n('featureSection.easyToUse.summary4')}</div>
          </Typography>
        </Col>
        <Col lg={10} className="img-container">
          <img
            src="./auth-images/easeUse.png"
            alt="Easy use"
            className="img1"
          />
        </Col>
      </Row>
      <Row justify={"space-around"} className="row2">
        <Col lg={10} className="img-container">
          <img
            src="./auth-images/openSource.png"
            alt="Easy use"
            className="img2"
          />
        </Col>
        <Col xs={24} md={12} lg={10} className="col-2">
          <Typography variant="h3Semibold" className={"row2typography1"}>
             {i18n('featureSection.noAccount.heading')}
          </Typography>
          <Typography variant="h4LightRegular" className={"row2typography2"}>
           <div> {i18n('featureSection.noAccount.summary1')}</div>
            <div>{i18n('featureSection.noAccount.summary2')}</div>
            <div>{i18n('featureSection.noAccount.summary3')}</div>
            <div>{i18n('featureSection.noAccount.summary4')}</div>
          </Typography>
        </Col>
      </Row>
      <Row justify={"space-around"} className="row3">
        <Col xs={24} md={12} lg={8} className="col-3">
          <Typography variant="h3Semibold" className={"row3typography1"}>
             {i18n('featureSection.openSource.heading')}
          </Typography>
          <Typography variant="h4LightRegular" className={"row3typography2"}>
            <div> {i18n('featureSection.openSource.summary1')}</div>
            <div>{i18n('featureSection.openSource.summary2')}</div>
            <div>{i18n('featureSection.openSource.summary3')}</div>
          </Typography>
        </Col>
        <Col lg={10} className="img-container">
          <img
            src="./auth-images/noAccount.png"
            alt="Easy use"
            className="img3"
          />
        </Col>
      </Row>
    </FeatureWrapper>
  );
};

export default FeaturePage;

const FeatureWrapper = styled.div`
  // background:${(props) => props.theme.body};
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 70px;

  .feature-headline {
    text-align: center;
    color: ${(props) => props.theme.title};
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
    color: ${(props) => props.theme.title};
  }

  .row1typography2 {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: start;
    color: ${(props) => props.theme.title};
  }
  .row2typography1 {
    text-align: start;
    color: ${(props) => props.theme.title};
  }
  .row2typography2 {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: start;
    color: ${(props) => props.theme.title};
  }
  .row3typography1 {
    text-align: start;
    color: ${(props) => props.theme.title};
  }
  .row3typography2 {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: start;
    color: ${(props) => props.theme.title};
  }

  .img1 {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    border-radius: 5%;
  }
  .img2 {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    border-radius: 5%;
  }
  .img3 {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    border-radius: 5%;
  }
  @media (max-width: 768px) {
    .row1typography1 {
      text-align: center;
    }

    .row1typography2 {
      align-items: center;
       text-align:center;
    }
    .row2typography1 {
      text-align: center;
    }

    .row2typography2 {
      align-items: center;
       text-align:center;
    }
    .row3typography1 {
      text-align: center;
    }

    .row3typography2 {
      align-items: center;
      text-align:center;
    }
    .row2 {
      display: flex;
      flex-direction: column-reverse;
      gap: 18px;
    }
  }
`;
