import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import { Card } from "antd";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Form} from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../utils/Schema";

const ForgotPasswordPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log("Signup Data:", data);
    reset();
  };
  return (
    <ForgotWrapper>
      <Card>
        <Typography className="typographyh2" variant="h2Semibold">
          Forgot Password ?
        </Typography>
        <Typography className="typographyh1" variant="h5Regular">
          Please enter your registerd email to reset password
        </Typography>
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
                <Input {...field} placeholder="Enter your email" />
              )}
            />
          </Form.Item>

          <Button
            type="primary"
            size="small"
            style={{ width: "100%" }}
            htmlType="submit"
          >
            Send Reset Link
          </Button>
        </Form>
        <p>Remember your password?Login</p>
      </Card>
    </ForgotWrapper>
  );
};

export default ForgotPasswordPage;

export const ForgotWrapper = styled.div`
  color: ${(props) => props.theme.title};
  background: url("auth-images/ReallyDark.jpg");
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
    color: ${(props) => props.theme.subtitle};
  }

  .custom-label .ant-form-item-label > label {
    color: ${(props) => props.theme.title};
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
`;
