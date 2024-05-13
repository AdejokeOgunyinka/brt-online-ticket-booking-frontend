import { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { API, BEARER } from "../constant";
import { getToken } from "../helpers";
import { toast } from "react-toastify";

const AuthProvider = ({ children }: any) => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();

  const fetchLoggedInUser = async (token: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/users/me`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });
      const data = await response.json();

      setUserData(data);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message, {
        position: "top-right",
        closeOnClick: true,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUser = (user: any) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider
      value={{ user: userData, setUser: handleUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
