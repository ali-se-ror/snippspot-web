import * as React from 'react';
import { Typography, Box, Paper, Grid, TextField, Button, Stack } from "@mui/material";
import Modal from '@mui/material/Modal';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useGetSpotByIdQuery } from "store/services/serverApi";
import { useEditSpotMutation } from 'store/services/serverApi';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px"
};

const schema = yup.object({
  title: yup.string().required("Title is required"),
  desc: yup.string().required("Description is required"),
  price: yup
    .number().min(1)
    .transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value)
    .required("Price is required")
}).required();

export default function EditSpotModal({ open, setOpen, id }) {
  const { data, isFetching } = useGetSpotByIdQuery({ id: id }, { refetchOnMountOrArgChange: true });
  const [editSpot, { isLoading, isError, isSuccess }] = useEditSpotMutation();

  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  React.useEffect(() => {
    setValue('title', data?.spot?.title);
    setValue('desc', data?.spot?.description);
    setValue('price', data?.spot?.price);
  }, [isFetching]);

  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    const formData = new FormData;
    formData.append("title", data.title);
    formData.append("description", data.desc);
    formData.append("price", data.price);
    editSpot({ id: id, payload: formData });
  };

  if (isError) {
    console.log("Err");
  };

  if(isSuccess){
    handleClose();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" fontWeight={600}>
            Edit Spot Information
          </Typography>
          <Box mt={3}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container>
                <Grid item xs={12} >
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

                      </Grid>
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
                        Edit Spot
                      </Button>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}