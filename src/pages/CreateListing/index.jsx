import React from "react";
import MainContainer from "../../layouts/MainContainer";
import { Typography, Box, Paper } from "@mui/material";
import CreateSpotForm from "./Components/CreateSpotForm";

const CreateListing = () => {
  return (
    <MainContainer>
      <Box mt={5}>
        <Typography variant="h4" fontWeight={600} color="text.primary">
          List your property on Sniffspot!
        </Typography>

        <CreateSpotForm/>
      </Box>
    </MainContainer>
  )
}

export default CreateListing;