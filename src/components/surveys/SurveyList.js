import Container from "@mui/material/Container";
import AddButtonBig from "../AddButtonBig";
import SurveyListItem from "./SurveyListItem";

import AuthService from "../../services/auth.service";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function SurveyList() {
  const apiClient = useAxiosPrivate();
  const authService = new AuthService(apiClient)

  const handleDummyReq = async () => {
    try {
      const response = await authService.dummy();

      console.log("dummy res=", response.data);
    } catch (err) {
      console.error("dummy err =", err);
    }
  };

  return (
    <Container className="flex flex-wrap justify-initial">
      <AddButtonBig className="h-32" onClick={handleDummyReq} />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => (
        <SurveyListItem key={i} className="w-80 h-32" />
      ))}
    </Container>
  );
}

export default SurveyList;
