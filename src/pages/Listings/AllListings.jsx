import React from "react";
import MainContainer from "../../layouts/MainContainer";
import SpotCard from "./Components/SpotCard";
import { Box, Typography, Grid, Stack, Button } from "@mui/material";
import { useGetSpotsQuery } from "store/services/serverApi";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const AllSpots = () => {
  const [events, setEvents] = React.useState([]);
  const [isSorted, setIsSorted] = React.useState(true);
  const { data, isSuccess } = useGetSpotsQuery(1, { refetchOnMountOrArgChange: true });

  React.useEffect(() => {
    setEvents(data?.spots);
  }, [isSuccess]);

  const sortData = () => {
    let temp = [...events];
    temp.sort(function (a, b) {
      return isSorted ? a.price - b.price : b.price - a.price;
    });
    setEvents([...temp]);
    setIsSorted(!isSorted);
  };

  return (
    <MainContainer>
      <Box mt={5}>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" fontWeight={600} mb={1}>
            Explore All Spots
          </Typography>

          <Button
            variant="outlined"
            color="primaryGreen"
            size="small"
            onClick={sortData}
          >
            {isSorted ? <ArrowUpwardRoundedIcon /> : <ArrowDownwardRoundedIcon />} Sort by Price
          </Button>
        </Stack>

        <Box mt={5}>
          <Grid container spacing={4}>
            {events?.map((item, index) => (
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