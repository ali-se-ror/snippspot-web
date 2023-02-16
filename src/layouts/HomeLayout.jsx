import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResponsiveHeader from 'components/Header';
import { Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeLayout = ({ children }) => {
  return (
    <React.Fragment>
      <ResponsiveHeader />
      <Paper
        sx={{
          borderRadius: 0,
          backgroundColor: "#e9fbe3",
          textAlign: "center",
          padding: 12
        }} elevation={0}>
        <Container maxWidth="md">
          <Typography variant='h4' fontWeight={600} color="text.primary" mb={2}>
            Rent safe and private dog parks hosted by locals in Washington
          </Typography>
          <Typography variant='h6' color="text.secondary">
            Sniffspot's private dog parks are the best way to exercise your dog. We have the best variety and the best priced dog parks anywhere!
          </Typography>

          <Box mt={3}>
            <Button
              LinkComponent={Link}
              to="/spots"
              type="submit"
              variant="contained"
              color="primaryGreen"
              disableElevation
              size='large'
            >

              Explore All Spots
            </Button>
          </Box>
        </Container>
      </Paper>
      <Container maxWidth="lg">
        <Box sx={{ mt: "1rem", mb: "4rem" }}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default HomeLayout;