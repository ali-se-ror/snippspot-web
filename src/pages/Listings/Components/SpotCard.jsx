import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Stack, Box, Typography, Button } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { useNavigate } from 'react-router-dom';

const SpotCard = (props) => {
  const { id, title, description, price, image, location, avg, count } = props;
  const navigate = useNavigate();

  return (
    <Card 
      onClick={() => navigate(`/listing/${id}`)}
      sx={{ width: "100%", borderRadius: "8px", cursor: "pointer" }} 
      elevation={0} variant="outlined">
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="Park Spot"
      />
      
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            width: "100%",
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
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
        {/* <Stack direction="row" color="text.primaryGreen" alignItems="center" spacing={1}>
          <FmdGoodOutlinedIcon sx={{fontSize: "20px"}}/>
          <Typography color="text.primaryGreen" sx={{lineHeight: 1}}>{location}</Typography>
        </Stack> */}
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
        </Stack>
      </CardContent>
    </Card>
  );
}

export default SpotCard;