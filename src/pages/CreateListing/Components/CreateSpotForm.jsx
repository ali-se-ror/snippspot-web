import React, { useState } from "react";
import { Typography, Box, Paper, Grid, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Stack } from "@mui/system";
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import { toast } from "react-toastify";
import { useCreateSpotMutation } from "store/services/serverApi";
import { useNavigate } from "react-router-dom";
import { City } from 'country-state-city';
import Autocomplete from '@mui/material/Autocomplete';

const schema = yup.object({
  title: yup.string().required("Title is required"),
  desc: yup.string().required("Description is required"),
  price: yup
    .number().min(1)
    .transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value)
    .required("Price is required")
}).required();

const CreateSpotForm = () => {
  const [createSpot, { isError, error, isLoading, isSuccess }] = useCreateSpotMutation();
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const { control, register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      price: ""
    }
  });

  const cities = City.getCitiesOfState("US", "WA")
  const locations = cities.map((item) => {
    return {
      code: `${item.countryCode}${item.stateCode}`,
      label: item.name
    }
  });
  const [value, setValue] = useState(locations[0]);
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (data) => {
    if (images.length === 0) {
      toast.warn("Please select images to add");
      return;
    }

    const formData = new FormData;
    formData.append("title", data.title);
    formData.append("description", data.desc);
    formData.append("price", data.price);
    formData.append("location", inputValue);

    for (let i = 0; i < images.length; i++) {
      formData.append("spot_images[]", images[i])
    };

    createSpot(formData);
  };

  const imagesHandler = (event) => {
    const files = event.target.files;
    setImages([...files]);
  };

  if (isError) {
    console.log("Err", error);
  };

  if (isSuccess) {
    toast.success("Spot Created Successfully");
    navigate("/host_spots");
  }

  return (
    <Paper sx={{ p: 4, mt: 4, borderRadius: "6px" }} elevation={0} variant="outlined">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Box>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      error={errors.title}
                      label="Title"
                      variant="filled"
                      size="small"
                      helperText={errors?.title?.message}
                    />
                  )}
                />
              </Box>

              <Box>
                <Controller
                  name="desc"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      multiline
                      fullWidth
                      maxRows={4}
                      rows={3}
                      error={errors.desc}
                      label="Description"
                      variant="filled"
                      size="small"
                      helperText={errors?.desc?.message}
                    />
                  )}
                />
              </Box>

              <Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography variant="body1" fontWeight={600} mb={1} color="text.primaryGreen">Price dog/hour</Typography>
                      <Controller
                        name="price"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            error={errors.price}
                            label="Price"
                            variant="filled"
                            size="small"
                            type="number"
                            fullWidth
                            helperText={errors?.price?.message}
                          />
                        )}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography variant="body1" fontWeight={600} mb={1} color="text.primaryGreen">Select Spot Location</Typography>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        options={locations}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            variant="filled"
                            label="Location" />
                        )}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>

            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box>
              <Typography component="label" htmlFor="upload" color="text.primaryGreen">
                <Stack direction="row" spacing={1} sx={{
                  cursor: "pointer",
                  width: "100%",
                  border: "1px dashed #3aa648",
                  padding: "1px",
                  borderRadius: "6px",
                  justifyContent: "center",
                  width: "100%",
                  padding: 2,
                  minHeight: 100,
                  display: "flex",
                  alignItems: "center"
                }}>
                  <UploadRoundedIcon color="inherit" />
                  <Typography color="inherit">Select Images</Typography>
                </Stack>

              </Typography>
              <input
                id="upload"
                type="file"
                multiple
                accept="image/*"
                hidden
                {...register("file")}
                onChange={(event) => imagesHandler(event)}
              />
              {images && (
                <Typography mt={1} variant="body2" color="text.primaryGreen">
                  {images.length} Images Selected
                </Typography>
              )}
            </Box>
            <Box mt={1}>
              <Typography variant="body1" fontWeight={600}>
                Add Photos (Optional)
              </Typography>
              <Typography>
                4+ photos recommended. Include the space, fencing and parking area.
              </Typography>
            </Box>
            <Box mt={3}>
              <Button
                type="submit"
                variant="contained"
                color="primaryGreen"
                size="large"
                fontWeight={600}
                disableElevation
                disabled={isLoading}
              >
                Publish Spot
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default CreateSpotForm;