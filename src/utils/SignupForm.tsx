import { useForm, Controller } from "react-hook-form";
import { Input, Button, Form, Checkbox, message } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./Schema";
import styled from "styled-components";
import { useState } from "react";
import authServices from "../modules/auth/authServices";
import { useNavigate } from "react-router-dom";
import messages from "../view/message/messages";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const nevigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = async (formData: object) => {
    setIsLoading(true);
    try {
      const resData = await authServices.signupService(formData);
      if (resData.data.token) {
        localStorage.setItem("token", resData.data.token);
      }
      setIsLoading(false);
      message.success("user created successfully");
      nevigate("/auth/login");
    } catch (err) {
      console.error("Check error", err);
      messages(err);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <SignupWrapper>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="User Name"
          className="custom-label"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Enter user name" />
            )}
          />
        </Form.Item>

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
              <Input.Password
                {...field}
                placeholder="Password"
                autoComplete="new-password"
              />
            )}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.terms ? "error" : ""}
          help={errors.terms?.message}
        >
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                className="terms"
              >
                I agree to the Terms & Conditions
              </Checkbox>
            )}
          />
        </Form.Item>

        <Button
          type="primary"
          size="small"
          style={{ width: "100%" }}
          htmlType="submit"
          loading={isLoading}
        >
          Create Now
        </Button>
      </Form>
    </SignupWrapper>
  );
};

export default SignupForm;

export const SignupWrapper = styled.div`
  .custom-label .ant-form-item-label > label {
    color: ${(props) => props.theme.title};
  }
  .terms {
    color: ${(props) => props.theme.title} !important;
  }
`;
