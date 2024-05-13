import { useState } from "react";
import { FormikProvider, useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { Button } from "../CowryButton";
import { Input } from "../CowryInput";
import { setToken } from "../../helpers";
import { API } from "../../constant";
import { CREATE_ACCOUNT, DASHBOARD } from "../../routes";

export const Login = () => {
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      const value = {
        identifier: values.email,
        password: values.password,
      };
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        toast.success(`Welcome back ${data.user.username}!`);

        navigate(DASHBOARD, { replace: true });
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const LoginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
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
            name="email"
            onChange={LoginFormik.handleChange}
          />
          <Input
            type={"password"}
            label={"Password"}
            leftIcon="gravity-ui:lock"
            name="password"
            onChange={LoginFormik.handleChange}
          />
          <Button
            variant={"primary"}
            name={"Log In"}
            isLoading={isLoading}
            type="submit"
          />
          <div className="relative w-full border border-greyBorder border-l-transparent border-r-transparent border-b-transparent flex justify-center items-center">
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
          />
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
