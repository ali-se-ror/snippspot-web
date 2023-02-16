import React from "react";
import { Typography, Box, Paper, Button, Grid } from "@mui/material";
import SpotListCard from "./SpotsListCard";
import { useGetUserSpotsQuery } from "store/services/serverApi";

const SpotsList = () => {
  const { data } = useGetUserSpotsQuery(1, { refetchOnMountOrArgChange: true, refetchOnFocus: true });

  return (
    <>
      <Grid container spacing={2} mt={2}>
        {data?.current_user_spots?.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <SpotListCard
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.spot_images[0] || ""}
              location={item.location}
              count={item.reviews_count}
              avg={item.average_rating}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default SpotsList;