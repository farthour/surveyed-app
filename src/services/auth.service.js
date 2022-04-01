export default function AuthService(apiClient) {
  this.apiClient = apiClient;

  this.forgotPasswordAPI = function (email) {
    return this.apiClient.post("auth/forgot-password", { email });
  };

  this.sendEmailVerification = function (isRegistration) {
    return this.apiClient.post(
      `auth/send-email-verification?isRegistration=${isRegistration}`
    );
  };

  this.verifyEmail = function (token) {
    return this.apiClient.post(`auth/verify-email?token=${token}`);
  };

  this.refreshTokens = function () {
    return this.apiClient.post("/auth/refresh-tokens");
  };
  this.logout = function () {
    return this.apiClient.post("/auth/logout");
  };
}
