import { useState } from "react";
import { toast } from "react-toastify";
import { FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button } from "../CowryButton";
import { Input } from "../CowryInput";
import { setToken } from "../../helpers";
import { API } from "../../constant";
import { DASHBOARD, LOGIN } from "../../routes";
import { SignUpValidation } from "../../validations/auth";

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success(`Welcome to My Cowry BRT app ${data.user.username}!`);

        navigate(DASHBOARD, { replace: true });
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const CreateAccountFormik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      brt_card_number: "",
      password: "",
      username: "",
      phone_number: "",
    },
    validationSchema: SignUpValidation,
    onSubmit: (values) => {
      onFinish(values);
    },
  });

  return (
    <FormikProvider value={CreateAccountFormik}>
      <form onSubmit={CreateAccountFormik.handleSubmit}>
        <div className="grid gap-6 w-full pb-10">
          <div className="flex flex-col gap-3 md:flex-row items-center w-full">
            <Input
              type={"text"}
              label={"First Name"}
              leftIcon="octicon:person-24"
              onChange={CreateAccountFormik.handleChange}
              name="firstname"
              error={CreateAccountFormik.errors.firstname}
              showError={CreateAccountFormik.touched.firstname}
              onBlur={CreateAccountFormik.handleBlur}
            />
            <Input
              type={"text"}
              label={"Last Name"}
              leftIcon="octicon:person-24"
              onChange={CreateAccountFormik.handleChange}
              name="lastname"
              error={CreateAccountFormik.errors.lastname}
              showError={CreateAccountFormik.touched.lastname}
              onBlur={CreateAccountFormik.handleBlur}
            />
          </div>
          <Input
            type={"text"}
            label={"Username"}
            leftIcon="octicon:person-24"
            onChange={CreateAccountFormik.handleChange}
            name="username"
            error={CreateAccountFormik.errors.username}
            showError={CreateAccountFormik.touched.username}
            onBlur={CreateAccountFormik.handleBlur}
          />
          <Input
            type={"email"}
            label={"Email Address"}
            leftIcon="fontisto:email"
            onChange={CreateAccountFormik.handleChange}
            name="email"
            error={CreateAccountFormik.errors.email}
            showError={CreateAccountFormik.touched.email}
            onBlur={CreateAccountFormik.handleBlur}
          />
          <Input
            type={"text"}
            label={"BRT Card Number"}
            leftIcon="octicon:person-24"
            onChange={CreateAccountFormik.handleChange}
            name="brt_card_number"
            error={CreateAccountFormik.errors.brt_card_number}
            showError={CreateAccountFormik.touched.brt_card_number}
            onBlur={CreateAccountFormik.handleBlur}
          />
          <Input
            type={"text"}
            label={"Phone Number"}
            leftIcon="octicon:person-24"
            onChange={CreateAccountFormik.handleChange}
            name="phone_number"
            error={CreateAccountFormik.errors.phone_number}
            showError={CreateAccountFormik.touched.phone_number}
            onBlur={CreateAccountFormik.handleBlur}
          />
          <Input
            type={"password"}
            label={"Password"}
            leftIcon="gravity-ui:lock"
            onChange={CreateAccountFormik.handleChange}
            name="password"
            rightIcon="mdi:hide"
            error={CreateAccountFormik.errors.password}
            showError={CreateAccountFormik.touched.password}
            onBlur={CreateAccountFormik.handleBlur}
          />
          <Button
            variant={"primary"}
            name={"Create Account"}
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
            name={"Sign up with Google"}
            icon="logos:google-icon"
          />
          <Button
            variant={"secondary"}
            name={"Sign up with Facebook"}
            icon="logos:facebook"
          /> */}
          <span className="font-teachers">
            Already have an account?{"    "}
            <a href={LOGIN} className="underline">
              Log In
            </a>
          </span>
        </div>
      </form>
    </FormikProvider>
  );
};
