import { FormikProvider, useFormik } from "formik";
import { Button } from "../CowryButton";
import { Input } from "../CowryInput";
import { LOGIN } from "../../routes";
import { SignUpValidation } from "../../validations/auth";
import { useCreateAccount } from "../../services/api/mutations/auth";

export const SignUp = () => {
  const { mutate: onFinish, isLoading } = useCreateAccount();

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
