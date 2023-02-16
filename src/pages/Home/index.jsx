import React from "react";
import HomeLayout from "layouts/HomeLayout";
import { Typography, Box, Container, Paper, Grid, Stack, Button } from "@mui/material";
import Locations from "./Components/Locations";
import ResponsiveHeader from 'components/Header';
import Hero from "components/Hero";
import DescSect from "./Components/DescSect";
import FAQSect from "./Components/FAQSect";
import PerksSect from "./Components/PerksSect";
import TopSpots from "./Components/TopSpots";

const Home = () => {
  return (
    <>
      <ResponsiveHeader/>
      <Hero/>
      <Container maxWidth="lg">
        <Typography mt={10} variant="h4" fontWeight={600}>
            Check out Sniffspot dog parks in nearby cities
        </Typography>
        <Box mt={3}>
            <Locations />
        </Box>

        <TopSpots/>
        <PerksSect/>
      </Container>
      
      <DescSect/>
      <FAQSect/>
    </>
  )
}

export default Home;