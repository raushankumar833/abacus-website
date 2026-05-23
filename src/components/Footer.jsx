import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Button,
  Grid,
  alpha,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import logo from "../assets/logo.png";

const Footer = () => {
  // Brand Colors from Pro Kidz image
  const colors = {
    orange: '#FF6B35',
    orangeLight: '#FF8A5C',
    orangeDark: '#E55A2B',
    yellow: '#FFD700',
    yellowLight: '#FFE44D',
    yellowDark: '#FFC107',
    pink: '#FF69B4',
    pinkLight: '#FFB6C1',
    pinkDark: '#FF1493',
    darkBlue: '#1A2A4F',
    lightGray: '#F8F9FA',
  };

  const handleBookDemo = () => {
    alert("Free demo class booked! Our team will reach out shortly.");
  };

  const quickLinks = ["About Us", "Our Courses", "Success Stories", "Blog", "Become a Trainer"];

  return (
    <Box
      sx={{
        bgcolor: colors.darkBlue,
        color: 'white',
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Row 1 - Main Footer Content */}
        <Grid container spacing={3} alignItems="flex-start">
          {/* Column 1 - Brand Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
              <Box
                component="img"
                src={logo}
                alt="ProKidz Logo"
                sx={{
                  height: 45,
                  bgcolor: "white",
                  borderRadius: 2,
                  p: 0.8,
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                PRO KIDZ
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ mb: 1.5, opacity: 0.8, fontSize: '0.8rem' }}>
              Empowering Young Minds for a Bright Future!
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 600, mb: 1 }}>
              Follow Us:
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small" sx={{ color: 'white', bgcolor: alpha('#fff', 0.1), p: 0.7, '&:hover': { bgcolor: colors.orange } }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', bgcolor: alpha('#fff', 0.1), p: 0.7, '&:hover': { bgcolor: colors.pink } }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', bgcolor: alpha('#fff', 0.1), p: 0.7, '&:hover': { bgcolor: colors.yellow, color: colors.darkBlue } }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', bgcolor: alpha('#fff', 0.1), p: 0.7, '&:hover': { bgcolor: colors.orange } }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', bgcolor: alpha('#fff', 0.1), p: 0.7, '&:hover': { bgcolor: '#FF0000' } }}>
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2 - Contact Information */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: colors.yellow, fontSize: '1rem', mb: 1.5 }}>
              CONTACT US
            </Typography>
            <Stack spacing={0.8}>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.75rem' }}>
                <LocalPhoneIcon fontSize="small" sx={{ color: colors.orange }} /> +91 12345 67890
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.75rem' }}>
                <EmailIcon fontSize="small" sx={{ color: colors.pink }} /> info@prokidz.com
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.75rem' }}>
                <EmailIcon fontSize="small" sx={{ color: colors.pink }} /> support@prokidz.com
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.75rem' }}>
                <LocationOnIcon fontSize="small" sx={{ color: colors.yellow }} /> 123, Education Street, Learning City, India
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, color: colors.yellowLight, fontSize: '0.75rem' }}>
                www.prokidz.com
              </Typography>
            </Stack>
          </Grid>

          {/* Column 3 - Quick Links & CTA */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: colors.pink, fontSize: '1rem', mb: 1.5 }}>
              QUICK LINKS
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 2 }}>
              {quickLinks.map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    fontSize: '0.75rem',
                    transition: "0.3s",
                    opacity: 0.8,
                    "&:hover": {
                      color: colors.orange,
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: colors.yellow, fontSize: '1rem', mb: 1 }}>
              CONTACT US TODAY!
            </Typography>
            <Button 
              variant="contained" 
              size="small"
              onClick={handleBookDemo}
              sx={{ 
                bgcolor: colors.orange, 
                mt: 0.5,
                py: 0.5,
                px: 2,
                fontSize: '0.75rem',
                fontWeight: 600,
                '&:hover': { bgcolor: colors.orangeDark },
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>

        {/* Row 2 - Divider */}
        <Divider sx={{ my: 2.5, bgcolor: alpha('#fff', 0.15) }} />

        {/* Row 3 - Copyright */}
        <Typography align="center" variant="body2" sx={{ opacity: 0.6, fontSize: '0.7rem' }}>
          © 2026 Pro Kidz. All rights reserved. | Empowering Young Minds for a Bright Future!
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;