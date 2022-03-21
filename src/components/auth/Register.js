import { useState } from "react";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { registerFormInitialValues } from "../../utils/initialValues";
import { Modal } from "@mui/material";
import SimpleModal from "../SimpleModal";

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

export default function Register() {
  const [formData, setFormData] = useState(registerFormInitialValues);
  const [showTnCModal, setShowTnCModal] = useState(false);

  const handleChange = ({ target }) =>
    setFormData({
      ...formData,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
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
              <FormControlLabel
                control={
                  <Checkbox
                    name="acceptedTerms"
                    value="acceptedTerms"
                    color="primary"
                    value={formData.acceptedTerms}
                    onChange={handleChange}
                  />
                }
                label={
                  <>
                    Accept our{" "}
                    <Link href="#terms-conditions">
                      <a onClick={() => setShowTnCModal(true)}>
                        Terms and Conditions
                      </a>
                    </Link>
                  </>
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                <a> Already have an account? Sign in</a>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}

      <SimpleModal
        open={showTnCModal}
        title="Terms and Conditions"
        onClose={() => setShowTnCModal(false)}
      >
        <Box sx={{ height: "40rem" }}>
          <Typography variant="body1">
            These are terms and conditions.
          </Typography>
          <Button onClick={() => setShowTnCModal(false)}>Close</Button>
        </Box>
      </SimpleModal>
    </Container>
  );
}
