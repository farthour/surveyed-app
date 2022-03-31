import Container from "@mui/material/Container";
import AddButtonBig from "../AddButtonBig";

import AuthService from "../../services/auth.service";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function Admin() {
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
    </Container>
  );
}

export default Admin;
