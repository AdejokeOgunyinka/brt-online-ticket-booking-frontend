import { AUTH_TOKEN } from "./constant";
import { instance } from "./services/instance";

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token: string) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const clearStorage = () => {
  instance.defaults.headers.common["Authorization"] = "";
  localStorage.clear();
};
