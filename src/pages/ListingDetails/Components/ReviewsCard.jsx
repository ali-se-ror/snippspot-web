import React from "react";
import { Typography, Box, Stack, IconButton } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import dayjs from "dayjs";
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { selectUser, selectToken } from "store/features/auth.slice";
import { useSelector } from "react-redux";

const ReviewCard = ({ review, handleModal }) => {
  const {description, rating, date, user, id} = review;
  const currentUser = useSelector(selectUser);
  const token = useSelector(selectToken);

  return (
    <Stack direction='row' spacing={2} mb={2}>
      <Avatar
        sx={{ width: 50, height: 50, bgcolor: "text.primaryGreen", textTransform: "capitalize" }}
      >
        {user?.email?.slice(0, 1) || "A"}
      </Avatar>

      <Box>
        <Rating name="read-only" value={rating} readOnly />
        <Typography variant="body1" mb={1}>{description}</Typography>
        <Stack direction="row" color="text.secondary" spacing={1} alignItems="center">
          <Stack direction="row" spacing={1}>
            <CalendarMonthRoundedIcon sx={{ fontSize: "18px" }} />
            <Typography sx={{ fontSize: "14px" }}>{dayjs(date).format("MMM DD, YYYY")}</Typography>
          </Stack>
          {(token && (currentUser?.email === user?.email)) ? (
            <IconButton size="small" color="primaryGreen" onClick={() => handleModal(id)}>
              <BorderColorRoundedIcon fontSize="inherit" />
              <Typography ml={1}>Edit</Typography>
            </IconButton>
          ) : ""}

        </Stack>
      </Box>
    </Stack>
  )
}

export default ReviewCard;