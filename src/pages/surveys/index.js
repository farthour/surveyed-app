import PageLayout from "../../components/layouts/PageLayout";
import SurveySteps from "../../components/surveys/SurveySteps";

function Surveys() {
  return (
    <PageLayout>
      <SurveySteps />
    </PageLayout>
  );
}

Surveys.needAuthentication = true;

export default Surveys;
