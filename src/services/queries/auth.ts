import { instance } from "../instance";
import { GET_PROFILE } from "../routes/auth";

export const getProfile = async () => {
  const res = await instance.get(GET_PROFILE);
  return res.data;
};
