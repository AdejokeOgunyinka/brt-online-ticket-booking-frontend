import { FormikProvider, useFormik } from "formik";
import { Button } from "../CowryButton";
import { Input } from "../CowryInput";
import { CREATE_ACCOUNT } from "../../routes";
import { LoginValidation } from "../../validations/auth";
import { useLogin } from "../../services/api/mutations/auth";

export const Login = () => {
  const { mutate: onFinish, isLoading } = useLogin();

  const LoginFormik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      onFinish(values);
    },
  });

  return (
    <FormikProvider value={LoginFormik}>
      <form onSubmit={LoginFormik.handleSubmit}>
        <div className="grid gap-6 w-full pb-10">
          <Input
            type={"email"}
            label={"Email Address"}
            leftIcon="fontisto:email"
            name="identifier"
            onChange={LoginFormik.handleChange}
            error={LoginFormik.errors.identifier}
            showError={LoginFormik.touched.identifier}
            onBlur={LoginFormik.handleBlur}
          />
          <Input
            type={"password"}
            label={"Password"}
            leftIcon="gravity-ui:lock"
            name="password"
            onChange={LoginFormik.handleChange}
            rightIcon="mdi:hide"
            error={LoginFormik.errors.password}
            showError={LoginFormik.touched.password}
            onBlur={LoginFormik.handleBlur}
          />
          <Button
            variant={"primary"}
            name={"Log In"}
            isLoading={isLoading}
            type="submit"
          />
          {/* <div className="relative w-full border border-greyBorder border-l-transparent border-r-transparent border-b-transparent flex justify-center items-center">
            <p className="w-20 absolute bg-white -top-3 text-blackText font-medium">
              or
            </p>
          </div>
          <Button
            variant={"secondary"}
            name={"Log in with Google"}
            icon="logos:google-icon"
          />
          <Button
            variant={"secondary"}
            name={"Log in with Facebook"}
            icon="logos:facebook"
          /> */}
          <span className="font-teachers">
            Don't yet have an account?{"    "}
            <a href={CREATE_ACCOUNT} className="underline">
              Create Account
            </a>
          </span>
        </div>
      </form>
    </FormikProvider>
  );
};
