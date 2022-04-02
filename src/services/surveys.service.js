export default function SurveysService(apiClient) {
  this.apiClient = apiClient;

  this.getUserSurveys = function () {
    return this.apiClient.get("surveys");
  };

  this.createNewSurvey = function (payload) {
    return this.apiClient.post("surveys/create", payload)
  }

  this.dummy = function () {
    return this.apiClient.post("surveys/dummy");
  };
}
