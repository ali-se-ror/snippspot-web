import React from "react";
import { Typography, Box, Grid, Paper, Stack, Button } from "@mui/material";
import SpotCard from "./SpotCard";
import { useGetSpotsByLocQuery } from "store/services/serverApi";
import { useParams } from "react-router-dom";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const AllSpots = () => {
  const { id } = useParams();
  const [events, setEvents] = React.useState([]);
  const [isSorted, setIsSorted] = React.useState(true);
  const { data, isSuccess } = useGetSpotsByLocQuery({ id: id }, { refetchOnMountOrArgChange: true });

  React.useEffect(() => {
    setEvents(data?.spots_by_location);
  }, [isSuccess]);

  if (events?.length === 0) {
    return (
      <Paper elevation={0}>
        <Typography variant="h5" fontWeight={600} textAlign="center" p={4} color="text.primaryGreen">
          No Spots Found
        </Typography>
      </Paper>
    )
  };

  const sortData = () => {
    let temp = [...events];
    temp.sort(function (a, b) {
      return isSorted ? a.price - b.price : b.price - a.price;
    });
    setEvents([...temp]);
    setIsSorted(!isSorted);
  };

  return (
    <Box mt={5}>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" fontWeight={600}>
          Popular Park Spots in <Typography variant="h4" fontWeight={600} color="text.primaryGreen" component="span">{id}</Typography>
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
  )
}

export default AllSpots;