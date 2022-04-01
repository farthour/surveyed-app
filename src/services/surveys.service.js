export default function AuthService(apiClient) {
  this.apiClient = apiClient;

  this.getUserSurveys = function () {
    return this.apiClient.get("surveys");
  };

  this.dummy = function () {
    return this.apiClient.post("surveys/dummy");
  };
}
