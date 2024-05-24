import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { updateProfile } from "../../mutations/profile";
import { IErrorResponse } from "../../../types";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (res) => {
      const data = res.data;
      // set the user
      localStorage.setItem("user", JSON.stringify(data.user));
      queryClient.invalidateQueries(["get-profile"]);
      toast.success(`Profile has been successfully updated!`);
    },
    onError: (error: IErrorResponse) => {
      toast.error(error?.response.data.message);
    },
  });
};
