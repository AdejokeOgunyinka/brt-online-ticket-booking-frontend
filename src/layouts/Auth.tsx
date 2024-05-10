import AuthImg from "../assets/AuthImg2.jpg";
import CowryLogo from "../assets/cowry.jpeg";
import { IAuthLayout } from "../types";

export const AuthLayout: React.FC<IAuthLayout> = ({
  header,
  description,
  children,
}) => {
  return (
    <div className="w-full h-[100vh] border-[5px] border-blackText flex p-10 gap-10">
      <div className="lg:basis-1/2 hidden lg:inline-flex">
        <img
          src={AuthImg}
          className="h-full w-full object-cover rounded-lg border border-blackText"
          alt="auth"
        />
      </div>
      <div className="w-full lg:basis-1/2 flex flex-col items-center gap-10">
        <img src={CowryLogo} alt="cowry" className="h-20 w-20" />
        <div className="grid gap-5 w-full px-2 md:px-20 text-center overflow-y-scroll">
          <h1 className="text-2xl text-blackText">{header}</h1>
          <p className="text-sm text-greyText">{description}</p>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};
