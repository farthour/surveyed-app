import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import apiClient from "../utils/axios";

const defaultValues = {
  user: null,
  setUser: () => null,
  accessToken: "",
  register: () => null,
  login: () => null,
  resetPassword: () => null,
  logout: () => null,
  isLoading: false,
  setIsLoading: () => null,
  isAuthenticated: false,
};

const AuthContext = createContext(defaultValues);

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = !!user;

  useEffect(() => {
    refreshTokens();
  }, []);

  const refreshTokens = async () => {
    try {
      const response = await apiClient.post("/auth/refresh-tokens");
      const { user, accessToken } = response.data;

      if (user && accessToken) {
        setAccessToken(accessToken);
        setUser(user);
        const bearer = `Bearer ${accessToken}`;
        apiClient.defaults.headers.Authorization = bearer;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const register = async (payload) => {
    const response = await apiClient.post("/auth/register", payload);
    const { user, accessToken } = response.data;

    if (user && accessToken) {
      setAccessToken(accessToken);
      setUser(user);
    }
  };

  const login = async (credentials) => {
    const response = await apiClient.post("/auth/login", credentials);
    const { user, accessToken } = response.data;

    if (user && accessToken) {
      setAccessToken(accessToken);
      setUser(user);
      apiClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
      router.push("/surveys");
    }
  };

	const resetPassword = async (password, token) => {
		const response = await apiClient.post(
			`auth/reset-password?token=${token}`,
			{
				password,
			}
		);
		const { user, accessToken } = response.data;

		if (user && accessToken) {
			setAccessToken(accessToken);
			setUser(user);
			router.push("/");
		}
	};

  const logout = async () => {
    await apiClient.post("/auth/logout");
    setAccessToken("");
    setUser(null);
    router.push("/login");
  };

  const value = {
    user,
    setUser,
    accessToken,
    register,
    login,
    resetPassword,
    logout,
    isLoading,
    setIsLoading,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
