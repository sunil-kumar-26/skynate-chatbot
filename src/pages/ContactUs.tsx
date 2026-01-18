import { Button, Col, Row, Modal, Input, Form } from "antd";
import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import { Address, Call, Email } from "../utils/Icon";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalSchema } from "../utils/Schema";
import { IoIosSend } from "react-icons/io";

export const ContactUs = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const { ref: textRef1, isVisible: textVisible1 } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: btnRef, isVisible: btnVisible2 } =
    useScrollAnimation<HTMLButtonElement>();
  const { ref: colRef, isVisible: colVisible3 } =
    useScrollAnimation<HTMLDivElement>();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(modalSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log("Signup Data:", data);
    reset();
    setOpenModal(false);
  };

  return (
    <ContactWrapper>
      <Row className="row-1">
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
        <Col
          lg={15}
          xs={24}
          ref={colRef}
          className={`col-2 ${colVisible3 ? "bounce-in-bck " : ""}`}
        >
          <Typography variant="h4Semibold" className={"typo-4"}>
            Please provide you email so that we can reach you
          </Typography>
          <div
            style={{
              width: "37%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              className={`mail-btn ${btnVisible2 ? "shake-bottom" : ""}`}
              ref={btnRef}
              onClick={() => handleOpenModal()}
            >
              Contact via mail <IoIosSend />
            </Button>
          </div>
        </Col>
      </Row>
      {openModal && (
        <Modal
          title={"Submit detail"}
          open={openModal}
          footer={false}
          onCancel={handleCloseModal}
        >
          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            <Form.Item
              label="Email"
              className="custom-label"
              validateStatus={errors.email ? "error" : ""}
              help={errors.email?.message}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Enter email" />
                )}
              />
            </Form.Item>

            <Button
              type="primary"
              size="small"
              style={{ width: "40%", display: "flex", justifySelf: "flex-end" }}
              htmlType="submit"
              // onClick={handleCloseModal}
            >
              Send Now
            </Button>
          </Form>
        </Modal>
      )}
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

  .row-1 {
    display: flex;
    gap: 25px;
  }

  .mail-btn {
    display: flex;
    flex-wrap: wrap;
    background-color: ${(props) => props.theme.button};
    color: ${(props) => props.theme.buttonTitle};
    font-size: 18px;
    font-weight: 600;
    line-height: auto;
    border-radius: 40px;
    transition: color 2s linear;
  }
  .mail-btn:hover {
    transform: scale(1.1);
    color: ${(props) => props.theme.buttonHoverText} !important;
    border: 1px solid ${(props) => props.theme.buttonHoverText} !important ;
  }

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

  .col-2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
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

  .typo-4 {
    color: ${(props) => props.theme.title};
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

  .bounce-in-bck {
    -webkit-animation: bounce-in-bck 1.1s both;
    animation: bounce-in-bck 1.1s 2s both;
  }

  @-webkit-keyframes bounce-in-bck {
    0% {
      -webkit-transform: scale(7);
      transform: scale(7);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: scale(1.24);
      transform: scale(1.24);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    89% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: scale(1.04);
      transform: scale(1.04);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }

  @keyframes bounce-in-bck {
    0% {
      -webkit-transform: scale(7);
      transform: scale(7);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: scale(1.24);
      transform: scale(1.24);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    89% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: scale(1.04);
      transform: scale(1.04);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
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

  .shake-bottom {
    -webkit-animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      1s 2 both;
    animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) 4s 5
      both;
  }
  @-webkit-keyframes shake-bottom {
    0%,
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
    10% {
      -webkit-transform: rotate(2deg);
      transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
      -webkit-transform: rotate(-4deg);
      transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
      -webkit-transform: rotate(4deg);
      transform: rotate(4deg);
    }
    80% {
      -webkit-transform: rotate(-2deg);
      transform: rotate(-2deg);
    }
    90% {
      -webkit-transform: rotate(2deg);
      transform: rotate(2deg);
    }
  }
  @keyframes shake-bottom {
    0%,
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
    10% {
      -webkit-transform: rotate(2deg);
      transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
      -webkit-transform: rotate(-4deg);
      transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
      -webkit-transform: rotate(4deg);
      transform: rotate(4deg);
    }
    80% {
      -webkit-transform: rotate(-2deg);
      transform: rotate(-2deg);
    }
    90% {
      -webkit-transform: rotate(2deg);
      transform: rotate(2deg);
    }
  }
`;
