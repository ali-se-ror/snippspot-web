import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';

const Hero = () => {
  return (
    <Paper
      sx={{
        borderRadius: 0,
        backgroundColor: "#e9fbe3",
        textAlign: "center",
        padding: 12
      }} elevation={0}>
      <Container maxWidth="md">
        <Typography variant='h4' fontWeight={600} color="text.primary" mb={2}>
          Rent safe and private dog parks hosted by locals in Washington
        </Typography>
        <Typography variant='h6' color="text.secondary">
          Sniffspot's private dog parks are the best way to exercise your dog. We have the best variety and the best priced dog parks anywhere!
        </Typography>

        <Box mt={3}>
          <Button
            LinkComponent={Link}
            to="/spots"
            type="submit"
            variant="contained"
            color="primaryGreen"
            disableElevation
            size='large'
          >

            Explore All Spots
          </Button>
        </Box>
      </Container>
    </Paper>
  )
}

export default Hero;