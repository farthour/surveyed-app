import Container from "@mui/material/Container";
import SurveyStepsItem from "./SurveyStepsItem";
import AddButtonBig from "../AddButtonBig";

function SurveySteps() {
  return (
    <Container className="flex flex-wrap justify-initial">
      <AddButtonBig href="/#" />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => (
        <SurveyStepsItem key={i} className="w-80 h-48" />
      ))}
    </Container>
  );
}

export default SurveySteps;
