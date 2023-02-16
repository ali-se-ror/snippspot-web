import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { useTheme } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectToken } from "store/features/auth.slice";
import { logoutAsync } from "store/features/auth.slice";
import { useDispatch } from "react-redux";

const pages = ['Home'];

function ResponsiveHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = () => {
    dispatch(logoutAsync());
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: "0 0 16px rgb(0 0 0 / 15%)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetsIcon color="primaryGreen" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: theme.palette.primaryGreen.main,
              textDecoration: 'none',
            }}
          >
            SNIFFSPOT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Link>Home</Link>
          </Box>
          <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SNIFFSPOT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant='text'
              to="/" component={Link}
              color="primaryGreen" sx={{
                textDecoration: "underline"
              }}>
              Home
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {token ? (
              <Stack direction="row" spacing={1}>
                <Button
                  onClick={logoutHandler}
                  color='primaryGreen'
                  variant="outlined"
                  disableElevation>Logout</Button>
                <Button
                  onClick={() => navigate("/host_spots")}
                  color='primaryGreen'
                  variant="contained"
                  disableElevation>Host</Button>
              </Stack>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                color='primaryGreen'
                variant="contained"
                disableElevation>Login</Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveHeader;