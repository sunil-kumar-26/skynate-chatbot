import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import authServices from "../modules/auth/authServices";
import styled, { keyframes } from "styled-components";
import { Spin } from "antd";

type StatusType = "loading" | "success" | "error";

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState<StatusType>("loading");
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const token = searchParams.get("token");
    const id = searchParams.get("id");

    if (!token || !id) {
      setStatus("error");
      setMessage("Invalid or broken verification link.");
      return;
    }

    const verify = async () => {
      try {
        await authServices.verifyEmailService({ token, id });
        setStatus("success");
        setMessage("Email verified successfully");

        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      } catch {
        setStatus("error");
        setMessage("Verification failed or link expired.");
      }
    };

    verify();
  }, []);

  return (
    <PageWrapper>
      <Card>
        {status === "loading" && <Spin spinning={true} />}
        {status === "success" && <Icon success>✓</Icon>}
        {status === "error" && <Icon>✕</Icon>}

        <Title className="title">{message}</Title>

        {status === "success" && <SubText>Redirecting you to login…</SubText>}

        {status === "error" && (
          <ActionButton onClick={() => navigate("/auth/login")}>
            Go to Login
          </ActionButton>
        )}
      </Card>
    </PageWrapper>
  );
};

export default VerifyEmailPage;

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.heroPageBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Card = styled.div`
  background: ${(props) => props.theme.body};
  border-radius: 16px;
  padding: 2.5rem 3rem;
  text-align: center;
  width: 360px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h2`
  margin-top: 1.2rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.title};
`;

const SubText = styled.p`
  margin-top: 0.6rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.subtitle};
`;

const ActionButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  background: #4f46e5;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #4338ca;
  }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top-color: #6366f1;
  border-radius: 50%;
  margin: 0 auto;
  animation: ${spin} 1s linear infinite;
`;

const Icon = styled.div<{ success?: boolean }>`
  width: 48px;
  height: 48px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  background: ${({ success }) => (success ? "#22c55e" : "#ef4444")};
`;
