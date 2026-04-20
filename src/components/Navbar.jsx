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
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

// 👉 import your logo image
import logo from '../assets/logo.png'; // adjust path if needed

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  // 👉 Drawer (Mobile Menu)
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        width: 260,
        py: 2,
      }}
    >
      {/* Logo */}
      <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          src={logo}
          alt="ProKidz Logo"
          sx={{
            height: 100,
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Menu Items */}
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={RouterLink}
            to={item.path}
            sx={{
              justifyContent: 'center',
              borderRadius: 2,
              mx: 2,
              my: 1,
              '&:hover': {
                bgcolor: '#ffe0b2',
              },
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: 600,
                textAlign: 'center',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            
            {/* Logo */}
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <Box
                component="img"
                src={logo}
                alt="ProKidz Logo"
                sx={{
                  height: { xs: 40, md: 50 },
                  objectFit: 'contain',
                  cursor: 'pointer',
                }}
              />
            </RouterLink>

            {/* Desktop Menu */}
            {isMobile ? (
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}

                {/* CTA Button */}
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '20px',
                    px: 3,
                    fontWeight: 700,
                  }}
                >
                  Enroll Now
                </Button>
              </Box>
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