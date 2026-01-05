import { useForm, Controller } from "react-hook-form";
import { Input, Button, Form, Checkbox } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./Schema";
import styled from "styled-components";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log("Signup Data:", data);
    reset();
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
        <p style={{textAlign:'end'}}>Forgot Password?</p>
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
`;
