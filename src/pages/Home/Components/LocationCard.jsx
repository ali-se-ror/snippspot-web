import React from "react";
import HomeLayout from "layouts/HomeLayout";
import { Paper, Typography, Stack } from "@mui/material";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { useNavigate } from "react-router-dom";


const LocationCard = ({ location }) => {
  const navigate = useNavigate();

  return (
    <Paper elevation={0} variant="outlined"
      sx={{ borderColor: "text.primaryGreen", padding: 3, cursor: "pointer" }}
      onClick={() => navigate(`/spots/${location}`)}
    >
      <Stack direction="row" color="text.primaryGreen" alignItems="center" spacing={1}>
        <FmdGoodOutlinedIcon />
        <Typography variant="h6" fontWeight={600}>{location}</Typography>
      </Stack>
    </Paper>
  )
}

export default LocationCard;