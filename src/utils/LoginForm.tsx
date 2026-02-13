import { useForm, Controller } from "react-hook-form";
import { Input, Button, Form } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./Schema";
import styled from "styled-components";
import { Link } from "react-router-dom";
import authServices from "../modules/auth/authServices";
import {  useState } from "react";
import messages from "../view/message/messages";
import { useNavigate } from "react-router-dom";
import { Google } from "./Icon";
import { i18n } from "../i18n";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: object) => {
    try {
      setIsLoading(true);
      const resData = await authServices.loginService(data);
      if (resData.data.token) {
        localStorage.setItem("token", resData.data.token);
      }
      messages(resData);
      setIsLoading(false);
      reset();
      navigate("/chat");
    } catch (err) {
      console.error("Error", err);
      setIsLoading(false);
      messages(err);
    }
  };

  const googleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE}/auth/google`;
  };

  return (
    <LoginWrapper>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label={i18n('login.email')}
          className="custom-label"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder={i18n('login.inputEmail')} />
            )}
          />
        </Form.Item>

        <Form.Item
          label={i18n('login.password')}
          className="custom-label"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} placeholder={i18n('login.inputEmail')} />
            )}
          />
        </Form.Item>
        <p className="forgot-text">
          <Link to={"/auth/forgotPassword"} className="forgot-link">
            {i18n('login.forgotPassword')}
          </Link>
        </p>
        <Button
          type="primary"
          size="middle"
          className="btn"
          htmlType="submit"
          loading={isLoading}
        >
         {i18n('login.login')}
        </Button>
        <Button className="google-btn" onClick={() => googleLogin()}>
          <Google />
          {i18n('login.loginWithGoogle')}
        </Button>
      </Form>
    </LoginWrapper>
  );
};

export default LoginForm;

export const LoginWrapper = styled.div`
  .custom-label .ant-form-item-label > label {
    color: ${(props) => props.theme.title};
  }
  .btn {
    width: 100%;
  }
  .forgot-text {
    text-align: end;
    color: ${(props) => props.theme.title};
  }

  .forgot-link {
    text-align: end;
    color: #4b91dd;
    text-decoration: none;
  }

  .forgot-link:hover {
    text-align: end;
    color: #0d4888;
    text-decoration: underline;
  }
  .google-btn {
    margin-top: 12px;
    display: flex;
    width: 100%;
  }
`;
