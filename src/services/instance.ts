import axios from "axios";
import { API } from "../constant";

export const instance = axios.create({
  baseURL: API,
  timeout: 36000,
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("token");

if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
