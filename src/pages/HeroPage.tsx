import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import { i18n } from "../i18n";
import { MdArrowOutward } from "react-icons/md";
import { Button } from "antd";

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
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.body};
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 12px;
  flex-direction: column;
  align-items: center;

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
`;
