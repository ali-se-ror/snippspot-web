import React from "react";
import { Typography, Box, Container, Paper, Grid, Stack, Button } from "@mui/material";

const parks =[
  {title:100, desc:"Total dog parks" },
  {title:15, desc:"Dog water parks" },
  {title:68, desc:"Fully fenced dog parks" },
  {title:12, desc:"Dog hiking trails" },
  {title:13, desc:"Dog fields" },
  {title:11, desc:"Dog agility parks" },
]

const PerksSect = () => {
  return (
    <Box py={10}>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Why rent a private dog park in Vancouver, Washington?
      </Typography>
      <Grid container rowSpacing={2} >
        {
          parks.map((park, index) => {
            return <Grid item xs={12} sm={4} md={2} key={index}>
              <Typography variant="h3" fontSize={42} fontWeight={700} color="text.primaryGreen">
                {park.title}
              </Typography>
              <Typography variant="body2" fontWeight={500} color="#323232">
                {park.desc}
              </Typography>
            </Grid>
          })
        }

      </Grid>
    </Box>
  )
}

export default PerksSect;