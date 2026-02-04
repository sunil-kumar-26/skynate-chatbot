import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import SignupForm from "../utils/SignupForm";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <SignupWrapper>
      <div className="signup-container">
        <img
          src="/auth-images/Refokus.jpg"
          alt="register"
          className="register"
        />
        <div className="form-container">
          <Typography variant="h2Semibold" className="typography">
            Create an Account
          </Typography>
          <Typography variant="h5Regular" className="typography">
            Already have an account? <Link to={"/auth/login"} className="forgot-link">
            Login in
          </Link>
          </Typography>
          <SignupForm />
        </div>
      </div>
    </SignupWrapper>
  );
};

export default SignupPage;

export const SignupWrapper = styled.div`
  color: ${(props) => props.theme.title};
  background: url("/auth-images/purple.jpg");
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  display: flex !important;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .signup-container {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.title};
    border-radius: 12px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    flex-direction: row;
    align-content: center;
    width: 82%;
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
