import React from "react";
import { Typography, Box, Container, Paper, Grid, Stack, Button } from "@mui/material";
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';

const DescSect = () => {
  return (
    <Paper elevation={0} sx={{ padding: "80px 0 56px", backgroundColor: "#f1ffec", marginTop: "24px" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={600} mb={4}>
          How do Vancouver's private dog parks work?
        </Typography>
        <Grid container spacing={8}>
          <Grid item md={6}>
            <Stack direction="row" gap={2}>
              <EventRepeatIcon sx={{ color: "#323232" }} />
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>Private rentals by the hour</Typography>
                <Typography variant="body1" color={"#323232"}>Our hosts are locals that are renting their yards and private land to dog owners</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Stack direction="row" gap={2}>
              <PendingOutlinedIcon sx={{ color: "#323232" }} />
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>No other dogs during your visits</Typography>
                <Typography variant="body1" color={"#323232"}>Only you and your dogs are allowed to enter a spot during the time you've booked it</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Stack direction="row" gap={2}>
              <GppGoodOutlinedIcon sx={{ color: "#323232" }} />
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>Trust and safety first</Typography>
                <Typography variant="body1" color={"#323232"}>Spots are designed to be safe and both hosts and guests are reviewed after each visit</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Stack direction="row" gap={2}>
              <PetsOutlinedIcon sx={{ color: "#323232" }} />
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>Reactive dogs welcome</Typography>
                <Typography variant="body1" color={"#323232"}>Many of the spots we list are designed with sensitive dogs in mind</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Stack direction="row" gap={2}>
              <VerifiedIcon sx={{ color: "#" }} />
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>Monthly memberships</Typography>
                <Typography variant="body1" color={"#323232"}>Many of our dog parks have the option to access member-only benefits with a fixed monthly price</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default DescSect;