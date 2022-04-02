import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { useQueryClient, useQuery } from "react-query";

import AddButtonBig from "../AddButtonBig";
import SurveyListItem from "./SurveyListItem";
import FullPageLoader from "../FullPageLoader";

import SurveysService from "../../services/surveys.service";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function SurveyList() {
  const apiClient = useAxiosPrivate();
  const surveysService = new SurveysService(apiClient);

  // Access the client
  const queryClient = useQueryClient();
  // Queries
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    "getSurveys",
    () => surveysService.getUserSurveys()
  );

  const createComponent = () => {
    if (isError) return <Alert severity="error">{error.message}</Alert>;
    if (isSuccess)
      return (
        <>
          {data.data.surveys.map((v) => (
            <SurveyListItem
              key={v.id}
              id={v.id}
              title={v.title}
              description={v.description}
              className="w-80 h-32"
            />
          ))}
        </>
      );
  };

  if (isLoading) return <FullPageLoader />;

  return (
    <Container className="flex flex-wrap justify-initial">
      <AddButtonBig
        className="h-32"
        href="/surveys/new"
      />
      {createComponent()}
    </Container>
  );
}

export default SurveyList;
