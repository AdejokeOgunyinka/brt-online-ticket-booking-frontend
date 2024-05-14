import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { create_account, login } from "../../mutations/auth";
import { DASHBOARD } from "../../../routes";
import { IErrorResponse } from "../../../types";
import { instance } from "../../instance";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      const data = res.data;

      // set the token
      instance.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;
      localStorage.setItem("token", data.jwt);

      // set the user
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success(`Welcome back, ${data.user.username}!`);

      setTimeout(() => {
        navigate(DASHBOARD);
      }, 1000);
    },
    onError: (error: IErrorResponse) => {
      toast.error(error?.response.data.message);
    },
  });
};

export const useCreateAccount = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: create_account,
    onSuccess: (res) => {
      const data = res.data;

      // set the token
      instance.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;
      localStorage.setItem("token", data.jwt);

      // set the user
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success(`Welcome to My Cowry BRT app, ${data.user.username}!`);

      setTimeout(() => {
        navigate(DASHBOARD);
      }, 1000);
    },
    onError: (error: IErrorResponse) => {
      toast.error(error?.response.data.message);
    },
  });
};
