import React from "react";
import { Typography, Box, Stack, } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import dayjs from "dayjs";

const ReviewCard = ({ description, rating, date }) => {
  return (
    <Stack direction='row' spacing={2} mb={2}>
      <Avatar
        sx={{ width: 50, height: 50, bgcolor: "text.primaryGreen" }}
      >
        {description?.slice(0, 1)}
      </Avatar>

      <Box>
        <Rating name="read-only" value={rating} readOnly />
        <Typography variant="body1" mb={1}>{description}</Typography>
        <Stack direction="row" color="text.secondary" spacing={1}>
          <CalendarMonthRoundedIcon sx={{ fontSize: "18px" }} />
          <Typography sx={{ fontSize: "14px" }}>{dayjs(date).format("MMM DD, YYYY")}</Typography>
        </Stack>
      </Box>
    </Stack>
  )
}

export default ReviewCard;