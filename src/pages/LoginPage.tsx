import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import LoginForm from "../utils/LoginForm";
import { Link } from "react-router-dom";
import { i18n } from "../i18n";

const LoginPage = () => {
  return (
    <LoginWrapper>
      <div className="login-container">
        <img
          src="/auth-images/Vecteezy.jpg"
          alt="register"
          className="register"
        />
        <div className="form-container">
          <Typography variant="h2Semibold" className="typography">
            {i18n('login.mainHeading')}
          </Typography>
          <Typography variant="h5Regular" className="typography">
            {i18n('login.noAccount')}
            <Link to={"/auth/signup"} className="forgot-link">
             {i18n('login.createAccount')}
            </Link>
          </Typography>
          <LoginForm />
        </div>
      </div>
    </LoginWrapper>
  );
};

export default LoginPage;

export const LoginWrapper = styled.div`
  color: ${(props) => props.theme.title};
  background: url("/auth-images/Mockups.jpg");
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  display: flex !important;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .login-container {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.title};
    border-radius: 12px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    flex-direction: row;
    align-content: center;
    width: 85%;
    padding: 8px 2px 8px 2px;
  }
  .register {
    border-radius: 10px;
    width: 45%;
  }
  .form-container {
    width: 53%;
    display: flex;
    flex-wrap: wrap;
    color: ${(props) => props.theme.title};
    justify-content: center;
    flex-direction: column;
    align-content: center;
    gap: 10px;
    padding: 18px 0px;
  }
  @media (max-width: 430px) {
    .register {
      display: none;
    }
    .form-container {
      width: 100%;
    }
  }
  .typography {
    color: ${(props) => props.theme.title};
  }
`;
