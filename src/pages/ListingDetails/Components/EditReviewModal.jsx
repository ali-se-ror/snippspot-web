import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import { TextField } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useEditReviewMutation } from 'store/services/serverApi';
import { useGetReviewByIdQuery } from 'store/services/serverApi';

const schema = yup.object({
  desc: yup.string().required("Review Description is required"),
}).required();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  pt: 2,
  borderRadius: "12px"
};

export default function EditReviewModal({ open, setOpen, reviewId }) {
  const { id } = useParams();
  const { data, isFetching } = useGetReviewByIdQuery({ id: id, reviewId: reviewId }, { refetchOnMountOrArgChange: true });
  const [ratingValue, setRatingValue] = React.useState(0);

  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      desc: ""
    }
  });

  React.useEffect(() => {
    if(data){
      setRatingValue(data?.review?.rating);
      setValue('desc', data?.review?.description);
    }
  }, [isFetching]);

  const handleClose = () => setOpen(false);
  const [editReview] = useEditReviewMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("description", data.desc);
    formData.append("rating", ratingValue);
    formData.append("spot_id", id);

    editReview({ id: id, reviewId: reviewId, payload: formData })
      .unwrap()
      .then(() => {
        handleClose()
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color="text.primaryGreen">
            Edit your review:
          </Typography>
          <Box mt={2}>
            <Box mb={2}>
              <Rating
                name="simple-controlled"
                value={ratingValue}
                onChange={(event, newValue) => {
                  setRatingValue(newValue);
                }}
              />
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    // label="Review"
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
                // disabled={isLoading}
                >
                  Update Review
                </Button>
              </Box>
            </form>

          </Box>
        </Box>
      </Modal>
    </div>
  );
}