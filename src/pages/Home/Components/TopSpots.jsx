import React from "react";
import { Typography, Box, Grid, } from "@mui/material";
import { useGetTopRatedSpotsQuery } from "store/services/serverApi";
import SpotCard from "pages/Listings/Components/SpotCard";

const TopSpots = () => {
  const { data } = useGetTopRatedSpotsQuery(1, { refetchOnMountOrArgChange: true });

  return (
    <Box py={10} pb={3}>
      <Typography variant="h4" color="text.primaryGreen" fontWeight={600} mb={3}>
        Our Top Rated Spots
      </Typography>
      <Grid container spacing={4}>
        {data?.spots?.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <SpotCard
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.spot_images[0] || ""}
              location={item.location}
              avg={item.average_rating}
              count={item.reviews_count}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default TopSpots;