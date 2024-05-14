import axios from "axios";
import { API } from "../constant";

const instance = axios.create({
  baseURL: API,
  timeout: 36000,
});

export default instance;
