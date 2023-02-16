import React from "react";
import { Typography, Box, Stack, Button, } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import ReviewCard from "./ReviewsCard";
import ReviewForm from "./ReviewsForm";
import { useGetReviewsQuery } from "store/services/serverApi";
import { useParams } from "react-router-dom";
import { selectToken } from "store/features/auth.slice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EditReviewModal from "./EditReviewModal";

const Reviews = ({ average, count }) => {
  const [reviews, setReviews] = React.useState([]);
  const [reviewId, setReviewId] = React.useState(1);
  const [openModal, setOpenModal] = React.useState(false);
  const { id } = useParams();
  const { data, isSuccess, isFetching } = useGetReviewsQuery({ id: id }, { refetchOnFocus: true, refetchOnMountOrArgChange: true });
  const token = useSelector(selectToken);

  React.useEffect(() => {
    if (data) {
      setReviews([...data?.reviews]);
    }
  }, [isFetching]);

  const handleModal = (id) => {
    setReviewId(id);
    setOpenModal(true);
  };

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
          {token ? (
            <ReviewForm />
          ) : (
            <Button variant="outlined" color="primaryGreen" LinkComponent={Link} to="/login">
              Login to add review
            </Button>
          )}
        </Box>

        <Box mt={4}>
          {reviews?.map((item, index) => (
            <ReviewCard
              key={index}
              review={item}
              handleModal={handleModal}
            />
          ))}
        </Box>

        <EditReviewModal 
          open={openModal}
          setOpen={setOpenModal}
          reviewId={reviewId}
        />
      </Box>
    </>
  )
}

export default Reviews;