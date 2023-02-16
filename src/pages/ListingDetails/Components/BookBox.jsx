import React from "react";
import { Typography, Box, Stack, Paper, Button } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useGetSpotByIdQuery } from "store/services/serverApi";
import { useParams } from "react-router-dom";

const BookBox = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSpotByIdQuery({id: id});
  console.log("D", data);

  return (
    <Paper
      sx={{ position: "sticky", top: 30, mt: 2, borderRadius: "8px", p: 2, boxShadow: "0 0 16px rgb(0 0 0 / 15%)" }}>

      <Typography fontWeight={600}>Book this spot!</Typography>
      <Stack direction="row" mt={2} alignItems="flex-end" justifyContent="space-between">
        <Typography variant="h5" fontWeight={600}>
          ${data?.spot?.price} <Typography component="span">per dog per hour</Typography>
        </Typography>
        <Stack direction="row">
          <StarRoundedIcon sx={{ color: "#f2c94c" }} />
          <Typography>{data?.spot?.average_rating} ({data?.spot?.reviews_count})</Typography>
        </Stack>
      </Stack>
      <Stack mt={2} spacing={2}>
        <Button
          type="submit"
          variant="contained"
          color="primaryGreen"
          size="large"
          disableElevation
          fullWidth
        >
          Book Now
        </Button>

        <Button
          type="submit"
          variant="outlined"
          color="primaryGreen"
          size="large"
          disableElevation
          fullWidth
        >
          Find Available Space
        </Button>
      </Stack>
    </Paper>
  )
}

export default BookBox;