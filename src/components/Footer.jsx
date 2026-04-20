import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #fff3e0, #ffe0b2)", // ✅ light gradient
        color: "#5d4037",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        
        {/* 🔥 Flex Layout with Fixed Width */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          
          {/* Box 1 */}
          <Box
            sx={{
              width: 300,
              p: 3,
              borderRadius: 3,
              bgcolor: "#ffffffcc",
              backdropFilter: "blur(6px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box
                component="img"
                src={logo}
                alt="ProKidz Logo"
                sx={{
                  height: 60,
                  bgcolor: "white",
                  borderRadius: 2,
                  p: 1,
                }}
              />
            </Box>

            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              Empowering young minds with mathematical excellence through
              proven abacus techniques. Join Pro Kidz and unlock your child's
              potential.
            </Typography>
          </Box>

          {/* Box 2 */}
          <Box
            sx={{
              width: 300,
              p: 3,
              borderRadius: 3,
              bgcolor: "#ffffffcc",
              backdropFilter: "blur(6px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Quick Links
            </Typography>

            {[
              "About Us",
              "Our Courses",
              "Success Stories",
              "Blog",
              "Become a Trainer",
            ].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#fb8c00",
                    transform: "translateX(5px)",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Box 3 */}
          <Box
            sx={{
              width: 300,
              p: 3,
              borderRadius: 3,
              bgcolor: "#ffffffcc",
              backdropFilter: "blur(6px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Contact
            </Typography>

            <Typography variant="body2">
              Email: info@prokidz.com
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
              Phone: +91 98765 43210
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              {[FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon].map(
                (Icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      bgcolor: "#ffe0b2",
                      color: "#fb8c00",
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "#ffcc80",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                )
              )}
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 4, bgcolor: "#ffcc80" }} />

        {/* Bottom Text */}
        <Typography align="center" variant="body2">
          © 2026 Pro Kidz Abacus Academy. All rights reserved. | Designed with ❤️ for young minds
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;