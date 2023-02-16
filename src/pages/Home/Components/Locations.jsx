import React from "react";
import { Grid, Typography } from "@mui/material";
import LocationCard from "./LocationCard";
import { useGetLocationsQuery } from "store/services/serverApi";

const Locations = () => {
  const { data } = useGetLocationsQuery(1, { refetchOnFocus: true, refetchOnMountOrArgChange: true });

  return (
    <>
      {(!data || data?.locations?.length === 0) && (
        <Typography color="error" variant="h6" textAlign="center">No Locations Found</Typography>
      )}

      <Grid container spacing={2}>
        {data?.locations?.map((location, index) => (
          <Grid item xs={12} md={3} key={index}>
            <LocationCard location={location} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Locations;