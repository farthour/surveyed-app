import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";

import { newSurvey as newSurveyValidation } from "../../utils/validations/surveys";
import SurveysService from "../../services/surveys.service";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function CreateSurvey() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValidating, isSubmitting },
  } = useForm();

  const router = useRouter();

  const [formError, setFormError] = useState("");

  const apiClient = useAxiosPrivate();

  const surveyService = new SurveysService(apiClient);

  const onSubmit = async (data) => {
    try {
      const response = await surveyService.createNewSurvey(data);

      router.push(`/surveys/${response.data.id}`);
    } catch (err) {
      console.log(err);
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
          <AssessmentIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create New Survey
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid item xs={12}>
            {!!formError && <Alert severity="error">{formError}</Alert>}
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                autoFocus
                placeholder="Title"
                label="Title"
                {...register("title", newSurveyValidation.title)}
              />
              <p>{errors.title?.message}</p>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Description"
                label="Description"
                {...register("description")}
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={isSubmitting || isValidating}
          >
            Create
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
}

export default CreateSurvey;
