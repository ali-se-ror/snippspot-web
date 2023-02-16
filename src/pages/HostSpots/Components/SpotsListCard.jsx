import React from "react";
import { Typography, Box, Paper, Button, Stack, IconButton } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EditSpotModal from "./EditModal";

const SpotListCard = (props) => {
  const { id, title, description, price, image, location, count, avg } = props;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Card
        // onClick={() => navigate(`/listing/${id}`)}
        sx={{ width: "100%", borderRadius: "8px", cursor: "pointer", display: "flex", p: 1, gap: "1rem" }}
        elevation={0} variant="outlined">

        <CardMedia
          sx={{ width: "100%", minWidth: "120px", maxWidth: "120px", height: "120px", borderRadius: "6px" }}
          image={image}
          title="Park Spot"
        />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ p: 0, "&:last-child": {p: 0} }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
                lineHeight: 1
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                width: "100%",
                height: "2.6rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}>
              {description}
            </Typography>
            <Stack direction="row" color="text.primaryGreen" alignItems="center" spacing={1}>
              <FmdGoodOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography color="text.primaryGreen" sx={{ lineHeight: 1 }}>{location}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
              <Typography mt={1} fontWeight={700}>
                ${price} <Typography variant='body2' color="text.main" component="span">dog / hour</Typography>
              </Typography>

              <Stack direction="row" alignItems="center" gap={1}>
                <StarRoundedIcon sx={{ color: "#f2c94c" }} />
                <Typography variant='body2' fontWeight={600}>
                  {avg} <Typography variant='body2' color="text.secondary" component="span">({count})</Typography>
                </Typography>
              </Stack>

              <Stack direction="row" gap={0} justifyContent="flex-end">
                <IconButton aria-label="edit" onClick={handleOpen} >
                  <BorderColorRoundedIcon
                    sx={{fontSize: "1.2rem", color: "text.primaryGreen"}}/>
                </IconButton>
                {/* <IconButton aria-label="delete" >
                  <DeleteIcon sx={{fontSize: "1.2rem", color: "text.primaryGreen"}}/>
                </IconButton> */}
              </Stack>
            </Stack>

          </CardContent>
        </Box>
      </Card>

      <EditSpotModal open={open} setOpen={setOpen} id={id}/>
    </>
  )
}

export default SpotListCard;