import React from "react";
import { Typography, Box, Stack, } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import ReviewCard from "./ReviewsCard";
import ReviewForm from "./ReviewsForm";
import { useGetReviewsQuery } from "store/services/serverApi";
import { useParams } from "react-router-dom";

const Reviews = ({ average, count }) => {
  const { id } = useParams();
  const { data } = useGetReviewsQuery({id: id});

  return (
    <>
      <Box>
        <Stack direction="row" mt={1} spacing={1} color="text.primary" alignItems={"center"}>
          <StarRoundedIcon sx={{ color: "#f2c94c", fontSize: "2rem" }} />
          <Typography variant="h5" fontWeight={600}>{average}</Typography>
          <CircleRoundedIcon sx={{ fontSize: "6px", color: "text.secondary", opacity: "0.5" }} />
          <Typography
            fontWeight={500}
            variant="h5"
            color="text.secondary" sx={{ textDecoration: "underline dotted", textUnderlineOffset: "3px" }}>
            {count} Reviews
          </Typography>
        </Stack>
        <Box mt={4}>
          <ReviewForm />
        </Box>
        <Box mt={4}>
          {data?.review?.map((item, index) => (
            <ReviewCard
              description={item.description}
              rating={item.rating}
              date={item.created_at}
            />
          ))}
        </Box>
      </Box>
    </>
  )
}

export default Reviews;