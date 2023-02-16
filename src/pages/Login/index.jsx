import React from "react";
import { Paper, Typography, Stack, TextField, Button, Container, Alert, Box, Grid } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useLoginUserMutation } from "../../store/services/serverApi";
import { toast } from "react-toastify";

const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const onSubmit = (data) => {
    const formData = new FormData;

    formData.append("email", data.email);
    formData.append("password", data.password);
    
    loginUser(formData)
      .unwrap()
      .catch((error) => {
        toast.error(error.data.error);
      });
  };


  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={12}>
          <Paper elevation={0} variant="outlined" color="primaryGreen"
            sx={{ p: 4, pb: 7, pt: 3, minWidth: {sm: "100%", md: "500px"} }}>
            <Typography
              textAlign="center"
              variant="h5" fontWeight={600}
              color="#3aa648"
            >
              Login
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} sx={{ mt: 3 }}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: { value: true, message: "Required" } }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={errors.email}
                      label="Email"
                      variant="filled"
                      size="small"
                      helperText={errors?.email?.message}
                    />
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  rules={{ required: { value: true, message: "Required" }, minLength: { value: 6, message: "Minimum length is 6" } }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={errors.password}
                      label="Password"
                      variant="filled"
                      size="small"
                      type="password"
                      helperText={errors?.password?.message}
                    />
                  )}
                />

                <Button
                  disabled={isLoading}
                  type="submit"
                  variant="contained"
                  color="primaryGreen"
                  elevation={0}
                >

                  Continue
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid>

      </Grid>

    </Container>
  )
};

export default Login;