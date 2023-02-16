import React from "react";
import { Typography, Box, Container, Paper, Grid, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const FAQSect = () => {
  return (
    <Paper elevation={0} sx={{ padding: "40px 16px 64px", backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography variant="h5" fontSize={32} fontWeight={600} my={2}>
          FAQ about our Vancouver dog parks
        </Typography>
        <Grid container rowSpacing={3} columnSpacing={6}>
          <Grid item md={6}>
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>Are dog parks good for dogs?</Typography>
              <Typography variant="body1" color={"#323232"}>It is important for dogs to have off leash exercise to sniff and run. But the free and open nature of public dog parks has drawbacks. There could be aggressive dogs, disease transmission and cleanliness issues. For this reason, many dog behaviorists discourage visiting public dog parks and recommend Sniffspot's private dog parks. With Sniffspot private dog parks dogs can get their exercise safely, without worrying about other dogs, people or disease transmission.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>Are dog parks safe?</Typography>
              <Typography variant="body1" color={"#323232"}>While public dog parks have a number of safety issues, such as aggressive dogs, disease transmission and general cleanliness, Sniffspot dog parks much safer than public dog parks. With Sniffspot all bookings are private for just you and dogs you bring with you and we require all dogs to be vaccinated (or have equivalent titers). All Sniffspot locations are vetted and reviewed by guests so you can find the perfect safe place for you and your dog.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>How do I know if a dog park works for my dog?</Typography>
              <Typography variant="body1" color={"#323232"}>You can filter Sniffspot dog parks by fencing and distractions. If your dog doesn't have good recall, you can visit one of our 68 fully fenced dog parks in the area. If your dog is reactive to other dogs, you can visit one of our 22 off leash areas where there are no dogs audible or visible nearby. You can also filter locations to avoid other domestic animals and people. We also recommend reading reviews and reaching out to the host with any questions.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>What is the best dog beach near Vancouver?</Typography>
              <Typography variant="body1" color={"#323232"}>The best Sniffspot dog beach near Vancouver is {" "}
                <Button variant='text' to="/" component={Link} color="primaryGreen" sx={{ padding: 0, display: "inline" }}>
                  Sauvie Island, Riverfront, Field, 40 Acres, Swimming, DaySite with fire-pit and swing on River
                </Button>. At Sniffspot beaches dogs can generally be off leash.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>Does Vancouver have any fully fenced dog parks?</Typography>
              <Typography variant="body1" color={"#323232"}>Sniffspot has 68 fully fenced dog parks in or near Vancouver. Browse all{" "}
                <Button variant='text' to="/" component={Link} color="primaryGreen" sx={{ padding: 0, display: "inline" }}>
                  fully enclosed options
                </Button>.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>Where are good dog hiking trails near Vancouver?</Typography>
              <Typography variant="body1" color={"#323232"}>The Vancouver area has 12 Sniffspot locations with private trails for you and your dog to     walk or hike. Dogs can generally be off leash on Sniffspot trails. The most popular trail is{" "}
                <Button variant='text' to="/" component={Link} color="primaryGreen" sx={{ padding: 0, display: "inline" }}>
                  Sapphire Point Private Dog Park In NW Portland
                </Button>.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>Are there dog agility courses for rent in Vancouver?</Typography>
              <Typography variant="body1" color={"#323232"}>Sniffspot has dog parks with agility equipment and/or dog obstacles in or near Vancouver.  The most popular agility option is {" "}
                <Button variant='text' to="/" component={Link} color="primaryGreen" sx={{ padding: 0, display: "inline" }}>
                  Field of dreams❤️
                </Button>.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>Where in Vancouver can I find a pool for dog swimming?</Typography>
              <Typography variant="body1" color={"#323232"}>Sniffspot has swimming options in the Vancouver area. The highest rated option is{" "}
                <Button variant='text' to="/" component={Link} color="primaryGreen" sx={{ padding: 0, display: "inline" }}>
                  Private Dog Park In NW Portland
                </Button>.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>Can I rent a field for my dog to run near Vancouver?</Typography>
              <Typography variant="body1" color={"#323232"}>There are 33 Sniffspot dog parks that offer fields in or near Vancouver where dogs can be off leash. The most popular field is{" "}
                <Button variant='text' to="/" component={Link} color="primaryGreen" sx={{ padding: 0, display: "inline" }}>
                  0.5 Acre Fully Fenced Private Dog Park In Portland
                </Button>.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default FAQSect;