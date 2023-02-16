import React from "react";
import MainContainer from "../../layouts/MainContainer";
import { Typography, Box, Stack, Grid, Divider, Paper } from "@mui/material";
import { useGetSpotByIdQuery } from "store/services/serverApi";
import { useParams } from "react-router-dom";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import Reviews from "./Components/ReviewsSect";
import BookBox from "./Components/BookBox";

const ListingDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSpotByIdQuery({id: id}, {refetchOnMountOrArgChange: true});

  return (
    <MainContainer>
      <Box mt={5}>
        <Typography variant="h4" fontWeight={600} color="text.primary">
          {data?.spot?.title}
        </Typography>

        <Stack direction="row" mt={1} spacing={1} color="text.primaryGreen">
          <FmdGoodOutlinedIcon />
          <Typography>{data?.spot?.location}</Typography>
        </Stack>

        <Stack direction="row" mt={1} spacing={1} color="text.primary" alignItems={"center"}>
          <StarRoundedIcon sx={{ color: "#f2c94c" }} />
          <Typography fontWeight={600}>{data?.spot?.average_rating}</Typography>
          <CircleRoundedIcon sx={{ fontSize: "6px", color: "text.secondary", opacity: "0.5" }} />
          <Typography
            fontWeight={500}
            color="text.secondary" sx={{ textDecoration: "underline dotted", textUnderlineOffset: "3px" }}>
            {data?.spot?.reviews_count} Reviews
          </Typography>
        </Stack>

        <Box>
          <Grid container spacing={4} sx={{position: "relative"}}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={10}>
                  <Box mt={2}>
                    <Box
                      component="img"
                      src={data?.spot?.spot_images[0]}
                      sx={{
                        borderRadius: "12px",
                        width: "100%",
                        height: "430px",
                        objectFit: "cover"
                      }}
                    ></Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={2}>
                  <Box mt={2}>
                    {data?.spot?.spot_images?.map((img, index) => (
                      <Box
                        component="img"
                        src={img}
                        sx={{
                          borderRadius: "12px",
                          width: "100%",
                          height: "110px",
                          objectFit: "cover"
                        }}
                      ></Box>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box mt={2} mb={2}>
                    <Typography variant="h5" fontWeight={600}>Description:</Typography>
                    <Typography variant="body2">{data?.spot?.description}</Typography>
                  </Box>

                  <Divider />

                  <Box mt={2} mb={2}>
                    <Reviews average={data?.spot?.average_rating} count={data?.spot?.reviews_count}/>
                  </Box>

                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
                <BookBox/>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </MainContainer>
  )
}

export default ListingDetails;