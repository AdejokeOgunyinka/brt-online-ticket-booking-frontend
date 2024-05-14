import { useQuery } from "react-query";
import { getProfile } from "../../queries/auth";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["get-profile"],
    queryFn: getProfile,
  });
};
