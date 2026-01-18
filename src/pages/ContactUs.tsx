import { Col, Row } from "antd";
import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import { Address, Call, Email } from "../utils/Icon";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const ContactUs = () => {
  const { ref: textRef1, isVisible: textVisible1 } =
    useScrollAnimation<HTMLDivElement>();
  return (
    <ContactWrapper>
      <Row>
        <Col
          lg={15}
          offset={""}
          ref={textRef1}
          className={`col-1 scroll-animate ${textVisible1 ? "animate" : ""}`}
        >
          <Typography variant="h1Bold" className="typo-0">
            Contact US
          </Typography>
          <Typography variant="h4Regular" className="typo-01">
            You can reach us anytime via email or phone. You may also share your
            email with us, and our team will contact you shortly to assist you
            further.
          </Typography>

          <Typography variant="h5Regular" className="typo-1">
            <Email /> sunilworld1234ss@gmail.com |
          </Typography>
          <Typography variant="h5Regular" className="typo-1">
            <Call /> +91 8534853275
          </Typography>

          <Typography variant="h5Regular" className="typo-3">
            <Address />
            Ganesh nagar, new lawyers colony khnadari, Agra 282005 UP{" "}
          </Typography>
        </Col>
      </Row>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  margin-top: 60px;
  background-image: url("./auth-images/phone-girl.png");
  background-repeat: no-repeat;
  min-height: 500px;
  background-size: contain;
  background-position: center;
  padding: 12px;

  .col-1 {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition:
      box-shadow 0.5s ease,
      transform 0.5s ease;
    // box-shadow:2px  2px 100px 10px gray;
    border-radius: 6px;
  }

  .typo-0 {
    color: ${(props) => props.theme.title};
  }
  .typo-01 {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${(props) => props.theme.title};
    margin-bottom: 1rem !important;
  }

  .typo-1 {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${(props) => props.theme.title};
  }

  .typo-2 {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.title};
    gap: 6px;
  }

  .typo-3 {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.title};
    gap: 6px;
  }

  .typo-1 svg,
  .typo-2 svg,
  .typo-3 svg {
    animation: heartbeat 1.8s infinite;
    transform-origin: center;
  }

  .typo-1 svg {
    animation-delay: 0s;
  }

  .typo-2 svg {
    animation-delay: 0.3s;
  }

  .typo-3 svg {
    animation-delay: 0.6s;
  }

  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.15);
    }
    40% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.15);
    }
    80% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }

  .typo-1:hover svg,
  .typo-2:hover svg,
  .typo-3:hover svg {
    animation-play-state: paused;
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }
  .scroll-animate {
    opacity: 0;
    filter: blur(12px);
    transform: translateY(40px);
  }

  .scroll-animate.animate {
    animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
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
