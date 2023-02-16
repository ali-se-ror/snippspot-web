import React from "react";
import { Typography, Box, Stack, Paper, TextField, Button } from "@mui/material";
import Rating from '@mui/material/Rating';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useCreateReviewMutation } from "store/services/serverApi";

const schema = yup.object({
  desc: yup.string().required("Review Description is required"),
}).required();

const ReviewForm = ({ average, count }) => {
  const [value, setValue] = React.useState(0);
  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const { id } = useParams();
  const [createReview, { isError, isSuccess, error, isLoading }] = useCreateReviewMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("description", data.desc);
    formData.append("rating", value);
    formData.append("spot_id", id);

    createReview({ id: id, payload: formData })
      .unwrap()
      .then(() => {
        setValue(0);
        reset({desc: ""});
      });
  };

  if (isError) {
    console.log("Err", error);
  };

  return (
    <Paper elevation={0} variant="outlined" sx={{ p: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography mb={1} variant="body1" fontWeight={600} color="text.primaryGreen" sx={{ textDecoration: "underline" }}>
          Add New Review
        </Typography>

        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />

        <Controller
          name="desc"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              multiline
              fullWidth
              maxRows={2}
              rows={2}
              error={errors.desc}
              label="Review"
              variant="filled"
              size="small"
              helperText={errors?.desc?.message}
            />
          )}
        />

        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primaryGreen"
            size="small"
            disableElevation
            disabled={isLoading}
          >
            Add Review
          </Button>
        </Box>
      </form>
    </Paper>
  )
}

export default ReviewForm;