// components/Navbar.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.png';

// Colors matching Home page theme
const colors = {
  orange: '#FF6B35',
  darkOrange: '#E85D2C',
  green: '#4CAF50',
  blue: '#2196F3',
  yellow: '#FFC107',
  white: '#FFFFFF',
  black: '#2D2D2D',
  gray: '#757575',
  lightGray: '#F8F9FA',
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 900px)');

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Courses', path: '/courses' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile Drawer
  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: colors.white }}>
      {/* Drawer Header with Close Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Logo in Drawer */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Box component="img" src={logo} alt="ProKidz Logo" sx={{ height: 80, objectFit: 'contain' }} />
      </Box>

      {/* Menu Items */}
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              justifyContent: 'center',
              textAlign: 'center',
              py: 1.5,
              mx: 2,
              mb: 1,
              borderRadius: 3,
              transition: '0.3s',
              '&:hover': {
                bgcolor: alpha(colors.orange, 0.1),
                transform: 'translateX(5px)',
              },
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: '1rem',
                color: colors.black,
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* CTA Button in Drawer */}
      <Box sx={{ p: 2, mt: 2 }}>
        <Button
          component={RouterLink}
          to="/enroll"
          fullWidth
          variant="contained"
          onClick={handleDrawerToggle}
          sx={{
            bgcolor: colors.orange,
            color: colors.white,
            py: 1.5,
            borderRadius: 3,
            fontWeight: 700,
            '&:hover': {
              bgcolor: colors.darkOrange,
            },
          }}
        >
          Enroll Now
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: colors.white,
          borderBottom: `1px solid ${alpha(colors.gray, 0.1)}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Box component="img" src={logo} alt="ProKidz Logo" sx={{ height: { xs: 45, md: 55 }, objectFit: 'contain' }} />
            </RouterLink>

            {/* Desktop Menu */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color: colors.black,
                      fontWeight: 600,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: '0.3s',
                      '&:hover': {
                        color: colors.orange,
                        bgcolor: alpha(colors.orange, 0.05),
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/enroll"
                  sx={{
                    bgcolor: colors.orange,
                    color: colors.white,
                    borderRadius: 3,
                    px: 3,
                    py: 1,
                    ml: 2,
                    fontWeight: 700,
                    '&:hover': {
                      bgcolor: colors.darkOrange,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Enroll Now
                </Button>
              </Box>
            ) : (
              <IconButton onClick={handleDrawerToggle} sx={{ color: colors.orange }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;