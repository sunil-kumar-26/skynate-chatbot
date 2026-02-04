import { useForm, Controller } from "react-hook-form";
import { Input, Button, Form } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./Schema";
import styled from "styled-components";
import { Link } from "react-router-dom";
import authServices from "../modules/auth/authServices";
import { useState } from "react";
import messages from "../view/message/messages";
import { useNavigate } from "react-router-dom";

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

  return (
    <LoginWrapper>
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

        <Form.Item
          label="Password"
          className="custom-label"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Password" />
            )}
          />
        </Form.Item>
        <p className="forgot-text">
          <Link to={"/auth/forgotPassword"} className="forgot-link">
            Forgot Password ?
          </Link>
        </p>
        <Button
          type="primary"
          size="middle"
          className="btn"
          htmlType="submit"
          loading={isLoading}
        >
          Login Now
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
`;
