import { apiClient } from "../utils/axios";
import useAuth from "./useAuth";

const useRefreshTokens = () => {
  const { createUserSession } = useAuth();

  const refreshTokens = async () => {
    const response = await apiClient.post("/auth/refresh-tokens");
    const { user, accessToken } = response?.data;

    if (response.status === 200) {
      createUserSession(user, accessToken);
      return { user, accessToken };
    }
  };
  return refreshTokens;
};

export default useRefreshTokens;
