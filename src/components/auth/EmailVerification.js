import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { EMAIL_VERIFICATION_STATUS } from "../../utils/constants";
import useAuth from "../../hooks/useAuth";
import AuthService from "../../services/auth.service";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function EmailVerification() {
  const [emailVerificationStatus, setEmailVerificationStatus] = useState("");

  const router = useRouter();
  const { user, setUser, isAuthenticated } = useAuth();
  const privateApiClient = useAxiosPrivate();
  const authService = new AuthService(privateApiClient)

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        if (router.isReady && router.query.token) {
          const token = router.query.token.toString();
          const res = await authService.verifyEmail(token);
          if (res.data?.user?.isEmailVerified) {
            setEmailVerificationStatus(EMAIL_VERIFICATION_STATUS.SUCCESS);
          }
        }
      } catch (err) {
        console.error(err);
        setEmailVerificationStatus(EMAIL_VERIFICATION_STATUS.FAIL);
      }
    };

    if (!user || !user.isEmailVerified) {
      confirmEmail();
    } else if (user?.isEmailVerified)
      setEmailVerificationStatus(EMAIL_VERIFICATION_STATUS.SUCCESS);
    else setEmailVerificationStatus(EMAIL_VERIFICATION_STATUS.FAIL);

    if (router.isReady && router.query.flash) {
      setFlashMessage(router.query.flash.toString());
    }
  }, [router.asPath, user]);

  const getVerificationAlert = () => {
    if (emailVerificationStatus === EMAIL_VERIFICATION_STATUS.SUCCESS)
      return <Alert severity="success">Your email is verified</Alert>;
    else if (emailVerificationStatus === EMAIL_VERIFICATION_STATUS.FAIL)
      return <Alert severity="error">Your email cannot be verified</Alert>;
    else return "";
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {getVerificationAlert()}
      </Box>
    </Container>
  );
}
