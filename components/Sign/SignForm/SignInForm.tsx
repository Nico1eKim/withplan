import { postLogin } from "@/api/auth";
import Input from "@/components/Sign/SignInput/Input";
import PasswordInput from "@/components/Sign/SignInput/PasswordInput";
import Button from "@/components/common/Buttons/Button";
import { EMAIL_RULES, PLACEHOLDER, SIGNIN_PASSWORD_RULES } from "@/constants/InputConstant";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const SignInForm = () => {
  const { control, handleSubmit, setError } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
  });

  const router = useRouter();
  return (
    <StyledForm
      onSubmit={handleSubmit(async (data) => {
        const res = await postLogin({ email: data.email, password: data.password });
        if (res !== null) {
          localStorage.setItem("accessToken", res.accessToken);
          router.push("/mydashboard");
          return;
        }
        setError("email", { message: "이메일을 확인해주세요." });
        setError("password", { message: "비밀번호를 확인해주세요." });
      })}
    >
      <Controller
        control={control}
        name="email"
        rules={EMAIL_RULES}
        render={({ field, fieldState }) => (
          <Input label="이메일" {...field} placeholder={PLACEHOLDER.email} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={SIGNIN_PASSWORD_RULES}
        render={({ field, fieldState }) => (
          <PasswordInput label="비밀번호" {...field} placeholder={PLACEHOLDER.password} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
        )}
      />
      <ButtonWrapper>
        <Button type="login">로그인</Button>
      </ButtonWrapper>
    </StyledForm>
  );
};

export default SignInForm;

const StyledForm = styled.form`
  width: 52rem;

  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;
const ButtonWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2.4rem;
`;
