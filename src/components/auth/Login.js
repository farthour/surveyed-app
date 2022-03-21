import { useState } from "react";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { loginFormInitialValues } from "../../utils/initialValues";

import { useAuth } from "../../contexts/AuthContext";
import { Alert } from "@mui/material";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function Login() {
  const [formData, setFormData] = useState(loginFormInitialValues);
  const [formError, setFormError] = useState("");
  const { login, user, isLoading, setIsLoading } = useAuth();

  const handleChange = ({ target }) =>
    setFormData({
      ...formData,
      [target.name]: target.value,
    });

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      console.log(formData);

      await login(formData);
    } catch (err) {
      console.error(err?.response?.data);
      setFormError(err?.response?.data?.err);
    } finally {
      setIsLoading(false);
    }
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {formError && <Alert severity="error">{formError}</Alert>}
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                autoFocus
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Link href="/forgot-password">
                <a>Forgot Password</a>
              </Link>
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={isLoading}
          >
            Login
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                <a>Don't have an account? Register</a>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Container>
  );
}
