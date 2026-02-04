import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import { Card } from "antd";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Form } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../utils/Schema";
import authServices from "../modules/auth/authServices";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const token = searchParams.get("token");
  const id = searchParams.get("id");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: "onBlur",
  });

  useEffect(() => {
    if (!token || !id) {
      navigate("/auth/forgotPassword");
    }
  }, [token, id]);

  const onSubmit = async (data: { password: string }) => {
    try {
      setIsLoading(true);
      await authServices.resetPasswordService({
        token,
        id,
        password: data.password,
      });
      reset();
    } catch (err) {
      console.error("Reset password error", err);
      navigate("/auth/forgotPassword");
    } finally {
      setIsLoading(false);
      navigate("/auth/login");
    }
  };

  return (
    <ForgotWrapper>
      <Card>
        <Typography className="typographyh2" variant="h2Semibold">
          Enter New Password
        </Typography>

        <Typography className="typographyh1" variant="h5Regular">
          Please enter new password and click save button
        </Typography>

        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item
            label="New Password"
            validateStatus={errors.password ? "error" : ""}
            help={errors.password?.message}
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password {...field} placeholder="Enter your password" />
              )}
            />
          </Form.Item>

          <Button type="primary" block htmlType="submit" loading={isLoading}>
            Save Password
          </Button>
        </Form>
      </Card>
    </ForgotWrapper>
  );
};
export default ResetPasswordPage;

export const ForgotWrapper = styled.div`
  color: ${(props) => props.theme.text};
  background: url("/auth-images/ReallyDark.jpg");
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  display: flex !important;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .typographyh2 {
    color: ${(props) => props.theme.text};
  }
  .typographyh1 {
    color: ${(props) => props.theme.text};
  }

  .custom-label .ant-form-item-label > label {
    color: ${(props) => props.theme.text};
    font-size: 14px;
    font-weight: 500;
    line-height: auto;
  }
  .ant-card-body {
    // width: 40%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-content: center;
  }
  .remember-text {
    color: ${(props) => props.theme.text};
  }
  .login-text {
    text-decoration: none;
    color: #4b91dd;
  }

  .login-text:hover {
    text-decoration: underline;
    color: #0d4888;
  }
`;
