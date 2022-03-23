import PageLayout from "../../components/layouts/PageLayout";
import SurveySteps from "../../components/surveys/SurveySteps";

function ShowSurvey() {
  return (
    <PageLayout>
      <SurveySteps />
    </PageLayout>
  );
}

ShowSurvey.needAuthentication = true;

export default ShowSurvey;
