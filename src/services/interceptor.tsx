import instance from "./instance";
import { IInterceptor } from "../types";

const Interceptor: React.FC<IInterceptor> = ({ component }) => {
  const token = localStorage.getItem("appToken");
  instance.interceptors.request.use((config) => {
    if (token)
      Object.assign(config.headers, {
        Authorization: `Bearer ${token}`,
      });

    return config;
  });

  return component;
};

export default Interceptor;
