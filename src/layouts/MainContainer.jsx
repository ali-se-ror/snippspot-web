import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResponsiveHeader from 'components/Header';

const MainContainer = ({ children }) => {
  return (
    <React.Fragment>
        <ResponsiveHeader/>
        <Container maxWidth="lg">
          <Box sx={{ mt: "1rem", mb: "4rem" }}>
            {children}
          </Box>
        </Container>
    </React.Fragment>
  );
}

export default MainContainer;