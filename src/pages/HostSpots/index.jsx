import React from "react";
import MainContainer from "layouts/MainContainer";
import { Typography, Box, Paper, Button } from "@mui/material";
import SpotsList from "./Components/SpotsList";
import { useNavigate } from "react-router-dom";

const HostSpots = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Box mt={5}>
        <Typography variant="h4" fontWeight={600} color="text.primary">
          Your properties on Sniffspot!
        </Typography>

        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primaryGreen"
            disableElevation
            onClick={() => navigate("/spot/create")}
          >
            Create New Spot
          </Button>
        </Box>

        <Box>
          <SpotsList/>
        </Box>
      </Box>
    </MainContainer>
  )
}

export default HostSpots;