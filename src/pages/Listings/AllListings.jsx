import React from "react";
import MainContainer from "../../layouts/MainContainer";
import SpotCard from "./Components/SpotCard";
import { Box, Typography, Grid } from "@mui/material";
import { useGetSpotsQuery } from "store/services/serverApi";

const AllSpots = () => {
  const { data } = useGetSpotsQuery(1, { refetchOnMountOrArgChange: true });

  return (
    <MainContainer>
      <Box mt={5}>
        <Typography variant="h4" fontWeight={600}>
          Explore All Spots
        </Typography>

        <Box mt={5}>
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
      </Box>
    </MainContainer>
  )
}

export default AllSpots;