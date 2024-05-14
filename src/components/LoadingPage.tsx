import { Bars } from "react-loader-spinner";

export const LoadingPage = () => {
  return (
    <div className="w-full h-[75vh] flex justify-center items-center">
      <Bars
        height="80"
        width="80"
        color="#001d54"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
