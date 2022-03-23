import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

// import apiClient from "../utils/axios";
import { apiClient } from "../utils/axios";

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
  createUserSession: () => null
};

export const AuthContext = createContext(defaultValues);

function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = !!user;

  // const apiClient = apiClientPrivate();

  useEffect(() => {
    refreshTokens();
  }, []);

  const createUserSession = (user, accessToken, redirectUrl) => {
    user && setUser(user);
    if (accessToken) {
      setAccessToken(accessToken);
      const bearer = `Bearer ${accessToken}`;
      apiClient.defaults.headers.Authorization = bearer;
    }
    console.log("createUserSession = ", accessToken);
    redirectUrl && router.push(redirectUrl);
  };

  const clearUserSession = () => {
    setAccessToken("");
    setUser(null);
    setIsLoading(false);
  };

  const refreshTokens = async () => {
    try {
      const response = await apiClient.post("/auth/refresh-tokens");
      const { user, accessToken } = response.data;

      if (user && accessToken) {
        createUserSession(user, accessToken);

        // setAccessToken(accessToken);
        // setUser(user);
        // const bearer = `Bearer ${accessToken}`;
        // apiClient.defaults.headers.Authorization = bearer;
      }
    } catch (err) {
      console.error("refresh token error = ", err);
      // router.push('/login')
    }
  };

  const register = async (payload) => {
    const response = await apiClient.post("/auth/register", payload);
    const { user, accessToken } = response.data;

    if (user && accessToken) {
      createUserSession(user, accessToken, "/surveys");
      // setAccessToken(accessToken);
      // setUser(user);
      // apiClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
      // router.push("/surveys");
    }
  };

  const login = async (credentials) => {
    const response = await apiClient.post("/auth/login", credentials);
    const { user, accessToken } = response.data;

    if (user && accessToken) {
      createUserSession(user, accessToken, "/surveys");
      // setAccessToken(accessToken);
      // setUser(user);
      // apiClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
      // router.push("/surveys");
    }
  };

  const resetPassword = async (password, token) => {
    const response = await apiClient.post(
      `auth/reset-password?token=${token}`,
      {
        password,
      }
    );
    // const { user, accessToken } = response.data;

    // if (user && accessToken) {
    // 	setAccessToken(accessToken);
    // 	setUser(user);
    router.push("/login?flash=Password reset successfull. Please Login.");
    // }
  };

  const logout = async () => {
    await apiClient.post("/auth/logout");
    clearUserSession();
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
    createUserSession
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
