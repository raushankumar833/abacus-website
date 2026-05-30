import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
  Chip,
  Avatar,
  alpha,
  Stack,
} from "@mui/material";

import { motion } from "framer-motion";

import RoomIcon from "@mui/icons-material/Room";
import CallIcon from "@mui/icons-material/Call";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import StarIcon from "@mui/icons-material/Star";
import testimonialImage from "../assets/9.png";
import heroBackground from "../assets/34.png";
import contactIllustration from "../assets/35.png";

const Contact = () => {
  const colors = {
    orange: "#ff6b35",
    orangeDark: "#e85a2a",
    yellow: "#ffc107",
    pink: "#ff4f9a",
    green: "#25D366",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSnackbar({
      open: true,
      message: "Message sent successfully!",
      severity: "success",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <RoomIcon sx={{ fontSize: 34 }} />,
      title: "Visit Us",
      details: [
        "123, Abacus Tower",
        "Educational District",
        "Mumbai - 400001",
        "Maharashtra, India",
      ],
      color: colors.orange,
    },
    {
      icon: <CallIcon sx={{ fontSize: 34 }} />,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 98765 43211",
        "Mon-Sat: 9AM - 7PM",
      ],
      color: colors.yellow,
    },
    {
      icon: <EmailOutlinedIcon sx={{ fontSize: 34 }} />,
      title: "Email Us",
      details: [
        "info@prokidz.com",
        "support@prokidz.com",
        "careers@prokidz.com",
      ],
      color: colors.pink,
    },
    {
      icon: <TimelapseIcon sx={{ fontSize: 34 }} />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9AM - 8PM",
        "Saturday: 10AM - 5PM",
        "Sunday: Closed",
      ],
      color: colors.orange,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#fffaf7" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 250, md: 420 },
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: { xs: "0 0 30px 30px", md: "0 0 60px 60px" },
          overflow: "hidden",
        }}
      />

      {/* MAIN SECTION */}
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 8 } }}>
        {/* FORM AND IMAGE - SINGLE ROW USING FLEXBOX */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            mb: 7,
            alignItems: "stretch",
          }}
        >
          {/* LEFT SIDE - FORM */}
          <Box sx={{ flex: { xs: "1 1 auto", md: "0 0 58.333333%" }, width: { xs: "100%", md: "auto" } }}>
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ height: "100%" }}
            >
              <Card
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: "30px",
                  boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap:2,
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                  <Avatar
                    sx={{
                      bgcolor: colors.orange,
                      width: 65,
                      height: 65,
                    }}
                  >
                    <SupportAgentIcon sx={{ fontSize: 34 }} />
                  </Avatar>

                  <Box>
                    <Chip
                      label="Send Message"
                      sx={{
                        bgcolor: alpha(colors.orange, 0.12),
                        color: colors.orange,
                        fontWeight: 700,
                        mb: 1,
                      }}
                    />

                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: "#151542",
                        
                        fontSize: {
                          xs: "1.8rem",
                          md: "2.5rem",
                        },
                      }}
                    >
                      We'd Love to Hear From You
                    </Typography>
                  </Box>
                </Stack>

                <form onSubmit={handleSubmit} style={{ flex: 1 }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3 }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3 }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Box>

                    <TextField
                      fullWidth
                      multiline
                      rows={6}
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.8,
                        borderRadius: "14px",
                        fontSize: "1rem",
                        fontWeight: 700,
                        bgcolor: colors.orange,
                        boxShadow: "none",
                        "&:hover": {
                          bgcolor: colors.orangeDark,
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </form>
              </Card>
            </motion.div>
          </Box>

          {/* RIGHT SIDE - IMAGE */}
          <Box sx={{ flex: { xs: "1 1 auto", md: "0 0 41.666667%" }, width: { xs: "100%", md: "auto" } }}>
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ height: "100%" }}
            >
              <Card
                sx={{
                  borderRadius: "30px",
                  overflow: "hidden",
                  height: "100%",
                  minHeight: { xs: 350, md: "auto" },
                  boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                }}
              >
                <Box
                  component="img"
                  src={contactIllustration}
                  alt="contact"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Card>
            </motion.div>
          </Box>
        </Box>

        {/* CONTACT INFO CARDS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            mb: 4,
          }}
        >
          {contactInfo.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 12px)", lg: "1 1 calc(25% - 18px)" },
                minWidth: { xs: "100%", sm: "calc(50% - 12px)", lg: "calc(25% - 18px)" },
              }}
            >
              <Card
                sx={{
                  p: 2,
                  borderRadius: "24px",
                  textAlign: "center",
                  height: "100%",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                  borderTop: `5px solid ${item.color}`,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: alpha(item.color, 0.15),
                    color: item.color,
                    width: 75,
                    height: 75,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Avatar>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: item.color,
                  }}
                >
                  {item.title}
                </Typography>

                {item.details.map((detail, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{
                      color: "#555",
                      mb: 1,
                    }}
                  >
                    {detail}
                  </Typography>
                ))}
              </Card>
            </Box>
          ))}
        </Box>

        {/* SUPPORT SECTION */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            mt: 3,
          }}
        >
          {/* WHATSAPP */}
         <Box sx={{ flex: 1 }}>
  <Card
    sx={{
      p: 4,
      borderRadius: "24px",
      textAlign: "center",
      bgcolor: "#f4fff7",
      height: "100%",
    }}
  >
    <Avatar
      sx={{
        bgcolor: colors.green,
        width: 85,
        height: 85,
        mx: "auto",
        mb: 2,
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 45 }} />
    </Avatar>

    <Typography
      variant="h4"
      sx={{
        fontWeight: 800,
        color: "#1d8f46",
        mb: 1,
      }}
    >
      24/7 Support Available
    </Typography>

    <Typography color="text.secondary" mb={3}>
      Chat with our support team anytime on WhatsApp
    </Typography>

    <Button
      variant="contained"
      startIcon={<WhatsAppIcon />}
      onClick={() => {
        const phoneNumber = "91999999999"; 
        const message = "Hello, I need support regarding ProKidz";
        
       
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (isMobile) {
         
          window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        } else {
        
          window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
        }
      }}
      sx={{
        bgcolor: colors.green,
        px: 5,
        py: 1.5,
        borderRadius: "12px",
        "&:hover": {
          bgcolor: "#128C7E",
        },
      }}
    >
      WhatsApp Us
    </Button>
  </Card>
</Box>

       
         {/* SOCIAL */}
<Box sx={{ }}>
  <Card
    sx={{
      p: 4,
      borderRadius: "24px",
      textAlign: "center",
      bgcolor: "#fff5fa",
      height: "100%",
   
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 800,
        color: colors.pink,
        mb: 1,
      }}
    >
      Connect With Us
    </Typography>

    <Typography color="text.secondary" mb={3}>
      Follow us on social media for updates and inspiration
    </Typography>

<Stack
  direction="row"
  spacing={3}
  justifyContent="center"
  alignItems="center"
  flexWrap="wrap"
  sx={{
    mt: 3,
    width: "100%",
    "& .MuiIconButton-root": {
      margin: "0 4px",
    }
  }}
>

  <IconButton
    onClick={() => window.open("https://wa.me/91999999999", "_blank")}
    sx={{
      bgcolor: "#25D366",
      color: "#fff",
      width: 56,
      height: 56,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        bgcolor: "#20b859",
      },
    }}
  >
    <WhatsAppIcon sx={{ fontSize: 28 }} />
  </IconButton>

  <IconButton
    onClick={() => window.open("https://facebook.com/yourpage", "_blank")}
    sx={{
      bgcolor: "#4267B2",
      color: "#fff",
      width: 56,
      height: 56,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        bgcolor: "#365899",
      },
    }}
  >
    <FacebookIcon sx={{ fontSize: 28 }} />
  </IconButton>

  <IconButton
    onClick={() => window.open("https://instagram.com/yourpage", "_blank")}
    sx={{
      bgcolor: "#E4405F",
      color: "#fff",
      width: 56,
      height: 56,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        bgcolor: "#c13516",
      },
    }}
  >
    <InstagramIcon sx={{ fontSize: 28 }} />
  </IconButton>

  <IconButton
    onClick={() => window.open("https://twitter.com/yourpage", "_blank")}
    sx={{
      bgcolor: "#1DA1F2",
      color: "#fff",
      width: 56,
      height: 56,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        bgcolor: "#0c85d0",
      },
    }}
  >
    <TwitterIcon sx={{ fontSize: 28 }} />
  </IconButton>

  <IconButton
    onClick={() => window.open("https://youtube.com/yourchannel", "_blank")}
    sx={{
      bgcolor: "#FF0000",
      color: "#fff",
      width: 56,
      height: 56,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        bgcolor: "#cc0000",
      },
    }}
  >
    <YouTubeIcon sx={{ fontSize: 28 }} />
  </IconButton>

  <IconButton
    onClick={() => window.open("https://linkedin.com/company/yourpage", "_blank")}
    sx={{
      bgcolor: "#0077B5",
      color: "#fff",
      width: 56,
      height: 56,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        bgcolor: "#005582",
      },
    }}
  >
    <LinkedInIcon sx={{ fontSize: 28 }} />
  </IconButton>
</Stack>
  </Card>
</Box>
        </Box>

        {/* TESTIMONIAL */}
       <Card
  sx={{
    mt: 2,
    p: { xs: 3, md: 3},
    borderRadius: "30px",
    bgcolor: "#fffdf8",
    boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: 4,
      alignItems: "center",
    }}
  >
    <Box sx={{ flex: { xs: "1 1 auto", md: "0 0 40%" }, textAlign: "center" }}>
      <img
        src={testimonialImage}
        alt="Riya Sharma"
        style={{
          width: "100%",
          height: 240,
         
          objectFit: "contain",
          margin: "0 auto",
         
          display: "block",
        }}
      />

    

     
    </Box>

    <Box sx={{ flex: { xs: "1 1 auto", md: "0 0 60%" } }}>
      <Typography
        variant="h6"
        sx={{
          lineHeight: 1.8,
          color: "#333",
          mb: 2,
        }}
      >
        "The teaching methodology at ProKidz is outstanding!
        My son's abacus skills have improved dramatically.
        The support team is always responsive and helpful."
      </Typography>

      <Stack direction="row" spacing={0.5}>
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            sx={{
              color: colors.yellow,
            }}
          />
        ))}
      </Stack>
    </Box>
  </Box>
</Card>
      </Container>

      {/* SNACKBAR */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() =>
          setSnackbar({
            ...snackbar,
            open: false,
          })
        }
      >
        <Alert severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;