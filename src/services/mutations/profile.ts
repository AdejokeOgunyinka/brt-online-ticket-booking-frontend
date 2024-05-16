import { instance } from "../instance";
import { IProfile } from "../../types";
import { PROFILE } from "../routes/auth";

export const updateProfile = async ({
  payload,
  userId,
}: {
  payload: IProfile;
  userId: string;
}) => {
  return await instance.put(`${PROFILE}/${userId}`, payload);
};
