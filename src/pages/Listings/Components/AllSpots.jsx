import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import SpotCard from "./SpotCard";
import { useGetSpotsByLocQuery } from "store/services/serverApi";
import { useParams } from "react-router-dom";

const AllSpots = () => {
  const { id } = useParams();
  const { data } = useGetSpotsByLocQuery({id: id}, {refetchOnMountOrArgChange: true});

  if (data?.spots_by_location?.length === 0) {
    return (
      <Paper elevation={0}>
        <Typography variant="h5" fontWeight={600} textAlign="center" p={4} color="text.primaryGreen">
          No Spots Found
        </Typography>
      </Paper>
    )
  };

  return (
    <Box mt={5}>
      <Typography variant="h4" fontWeight={600}>
        Popular Park Spots in <Typography variant="h4" fontWeight={600} color="text.primaryGreen" component="span">{id}</Typography>
      </Typography>

      <Box mt={5}>
        <Grid container spacing={4}>
          {data?.spots_by_location?.map((item, index) => (
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
  )
}

export default AllSpots;