import PageLayout from "../../components/layouts/PageLayout";
import SurveyList from "../../components/surveys/SurveyList";

function Surveys() {
  return (
    <PageLayout>
      <SurveyList />
    </PageLayout>
  );
}

Surveys.needAuthentication = true;

export default Surveys;
