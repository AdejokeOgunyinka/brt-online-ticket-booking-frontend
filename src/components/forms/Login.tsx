import { Button } from "../Button";
import { Input } from "../Input";

export const Login = () => {
  return (
    <div className="grid gap-6 w-full pb-10">
      <Input type={"email"} label={"Email Address"} leftIcon="fontisto:email" />
      <Input type={"password"} label={"Password"} leftIcon="gravity-ui:lock" />
      <Button variant={"primary"} name={"Create Account"} />
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
    </div>
  );
};
