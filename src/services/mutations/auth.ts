import { ICreateAccount, ILogin } from "../../types";
import instance from "../instance";
import { CREATE_ACCOUNT, LOGIN } from "../routes/auth";

export const login = async (payload: ILogin) => {
  return await instance.post(LOGIN, payload);
};

export const create_account = async (payload: ICreateAccount) => {
  return await instance.post(CREATE_ACCOUNT, payload);
};
