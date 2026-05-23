// pages/Home.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  alpha,
  Stack,
  Paper,
  Rating,
  IconButton,
} from "@mui/material";
import { motion, useMotionValue, animate } from "framer-motion";
import SpeedIcon from "@mui/icons-material/Speed";
import MemoryIcon from "@mui/icons-material/Memory";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SchoolIcon from "@mui/icons-material/School";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CelebrationIcon from "@mui/icons-material/Celebration";
import BoltIcon from "@mui/icons-material/Bolt";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import homeImage from "../assets/home1.png";
import image from "../assets/8.png";
import img1 from '../assets/img1.png'; 
import img2 from '../assets/img2.png'; 
import img3 from '../assets/img3.png'; 
import img4 from '../assets/img4.png'; 
import img5 from '../assets/img5.png'; 
import img6 from '../assets/img6.png'; 


// Color Palette
const colors = {
  orange: "#FF6B35",
  darkOrange: "#E85D2C",
  lightOrange: "#FF8A5C",
  pastelOrange: "#FFF2EC",
  green: "#4CAF50",
  darkGreen: "#388E3C",
  lightGreen: "#66BB6A",
  pastelGreen: "#E8F5E9",
  blue: "#2196F3",
  darkBlue: "#1976D2",
  lightBlue: "#42A5F5",
  pastelBlue: "#E3F2FD",
  yellow: "#FFC107",
  white: "#FFFFFF",
  black: "#2D2D2D",
  gray: "#656565",
  lightGray: "#F8F9FA",
};

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const [roundedCount, setRoundedCount] = useState(0);

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut" });
    const unsubscribe = count.on("change", (latest) =>
      setRoundedCount(Math.round(latest)),
    );
    return () => {
      animation.stop();
      unsubscribe();
    };
  }, [count, value]);

  return (
    <span>
      {roundedCount}
      {suffix}
    </span>
  );
};

const Home = () => {
  // Data Arrays
  const features = [
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: "Fast Calculation",
      description:
        "Improve calculation speed by 5-10x with proven abacus techniques",
      color: colors.orange,
      bgColor: colors.pastelOrange,
    },
    {
      icon: <MemoryIcon sx={{ fontSize: 40 }} />,
      title: "Better Memory",
      description: "Enhance photographic memory and concentration power",
      color: colors.green,
      bgColor: colors.pastelGreen,
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 40 }} />,
      title: "Logical Thinking",
      description: "Develop analytical and problem-solving skills",
      color: colors.blue,
      bgColor: colors.pastelBlue,
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: "Certified Courses",
      description: "Internationally recognized certification",
      color: colors.orange,
      bgColor: colors.pastelOrange,
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: "Performance Tracking",
      description: "Regular assessments and progress reports",
      color: colors.green,
      bgColor: colors.pastelGreen,
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: "Brain Development",
      description: "Boost overall cognitive abilities",
      color: colors.blue,
      bgColor: colors.pastelBlue,
    },
  ];

  const programs = [
    {
      level: "Beginner",
      age: "5-7 Years",
      duration: "3 Months",
      description: "Introduction to abacus, basic addition & subtraction",
      color: colors.green,
      icon: <MenuBookIcon />,
    },
    {
      level: "Intermediate",
      age: "7-9 Years",
      duration: "4 Months",
      description: "Multiplication, division, and mental math",
      color: colors.orange,
      icon: <BoltIcon />,
    },
    {
      level: "Advanced",
      age: "9-12 Years",
      duration: "6 Months",
      description: "Complex calculations, competition training",
      color: colors.blue,
      icon: <EmojiEventsIcon />,
    },
    {
      level: "Expert",
      age: "12+ Years",
      duration: "8 Months",
      description: "Master level with Vedic math integration",
      color: colors.green,
      icon: <CelebrationIcon />,
    },
  ];

 const testimonials = [
  
  {
    name: "Rajesh Sharma",
    childName: "Aarav Sharma, Grade 5",
    rating: 5,
    text: "My son's math grades improved from C to A+ in just 6 months. Amazing transformation!",
    // image: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "Mumbai"
  },
  {
    name: "Priya Patel",
    childName: "Kavya Patel, Grade 4",
    rating: 5,
    text: "Best decision we made for our daughter. She now loves math and participates in competitions.",
    // image: "https://randomuser.me/api/portraits/women/2.jpg",
    location: "Delhi"
  },
  {
    name: "Amit Kumar",
    childName: "Rohan Kumar, Grade 6",
    rating: 5,
    text: "Structured curriculum and amazing teachers make Pro Kidz stand out. Highly recommended!",
    // image: "https://randomuser.me/api/portraits/men/3.jpg",
    location: "Bangalore"
  },
  {
    name: "Neha Gupta",
    childName: "Ananya Gupta, Grade 3",
    rating: 5,
    text: "My daughter's confidence has skyrocketed. She solves complex problems mentally now!",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
    location: "Pune"
  },
  {
    name: "Vikram Singh",
    childName: "Arjun Singh, Grade 7",
    rating: 5,
    text: "Excellent teaching methodology. My son's calculation speed increased by 10x.",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
    location: "Jaipur"
  },
  {
    name: "Sunita Reddy",
    childName: "Sahil Reddy, Grade 5",
    rating: 5,
    text: "Worth every penny! My child enjoys math now and grades have improved significantly.",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
    location: "Hyderabad"
  },
  {
    name: "Rahul Mehta",
    childName: "Ishita Mehta, Grade 4",
    rating: 5,
    text: "The best investment in my child's future. Highly professional and caring teachers.",
    // image: "https://randomuser.me/api/portraits/men/7.jpg",
    location: "Ahmedabad"
  },
  {
    name: "Kavita Joshi",
    childName: "Vedant Joshi, Grade 6",
    rating: 5,
    text: "Amazing results in just 3 months! My son's concentration has improved tremendously.",
    // image: "https://randomuser.me/api/portraits/women/8.jpg",
    location: "Chennai"
  },
  {
    name: "Suresh Nair",
    childName: "Nikhil Nair, Grade 5",
    rating: 5,
    text: "Pro Kidz changed my son's attitude towards math. Now he loves solving problems!",
    // image: "https://randomuser.me/api/portraits/men/9.jpg",
    location: "Kochi"
  }
];

 const stats = [
  { 
    value: 200, 
    label: "Happy Students", 
    suffix: "+", 
    color: colors.orange,
    icon: "👨‍🎓",
    description: "Across 25+ cities"
  },

  { 
    value: 98, 
    label: "Success Rate", 
    suffix: "%", 
    color: colors.blue,
    icon: "📈",
    description: "Students improve grades"
  },

  { 
    value: 1500, 
    label: "Online Classes", 
    suffix: "+", 
    color: colors.green,
    icon: "💻",
    description: "Monthly active"
  },
  { 
    value: 25, 
    label: "Awards Won", 
    suffix: "", 
    color: colors.blue,
    icon: "🏆",
    description: "National & International"
  },
  { 
    value: 10, 
    label: "Schools Partnered", 
    suffix: "+", 
    color: colors.orange,
    icon: "🏫",
    description: "Trusted institutions"
  },
  { 
    value: 10, 
    label: "Years of Excellence", 
    suffix: "+", 
    color: colors.green,
    icon: "🎯",
    description: "Since 2014"
  },
];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const testimonialImages = [img1, img3, img2, img4, img5, img6];

  return (
    <Box sx={{ bgcolor: colors.lightGray }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          bgcolor: colors.darkOrange,
          overflow: "hidden",
        }}
      >
        {/* Animated Background Shapes */}
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            sx={{
              position: "absolute",
              width: 60 + i * 20,
              height: 60 + i * 20,
              borderRadius: "50%",
              background: alpha(colors.white, 0.08),
              top: `${10 + i * 15}%`,
              left: `${5 + i * 15}%`,
              pointerEvents: "none",
            }}
          />
        ))}

        <Container
          maxWidth="xl"
          sx={{ position: "relative", zIndex: 2, py: { xs: 6, md: 0 } }}
        >
         <Grid container spacing={6} alignItems="center">
  {/* Left Content - 50% */}
  <Grid item xs={12} md={6}>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeLeft}
      transition={{ duration: 0.8 }}
    >
      <Chip
        icon={<AutoAwesomeIcon />}
        label="⭐ India's Most Loved Abacus Academy ⭐"
        sx={{
          bgcolor: alpha(colors.white, 0.2),
          color: colors.white,
          mb: 3,
          fontWeight: 700,
          fontSize: '0.9rem',
          backdropFilter: 'blur(10px)',
        }}
      />
      
      <Typography
        variant="h1"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.8rem' },
          color: colors.white,
          mb: 2,
          lineHeight: 1.2,
        }}
      >
        Make Math 🎯 
        <Box component="span" sx={{ display: 'block', color: colors.yellow, mt: 1 }}>
          Super Fun & Easy! 🚀
        </Box>
      </Typography>
      
      <Typography
        variant="h6"
        sx={{ 
          color: alpha(colors.white, 0.95), 
          mb: 3,
          fontSize: { xs: '1rem', md: '1.1rem' },
          lineHeight: 1.5
        }}
      >
        🧠 Turn your child into a Human Calculator • ⚡ 5x Faster Calculations • 🎮 Learn with Games & Activities
      </Typography>

      <Typography
        variant="body1"
        sx={{ 
          color: alpha(colors.white, 0.85), 
          mb: 4,
          fontSize: { xs: '0.9rem', md: '1rem' }
        }}
      >
        👶 For Kids Age 5-15 • 🏆 Certified Course • 📚 50,000+ Happy Students • 🎯 98% Success Rate
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button
          variant="contained"
          size="large"
          startIcon={<RocketLaunchIcon />}
          sx={{
            bgcolor: colors.yellow,
            color: colors.orange,
            px: 4,
            py: 1.5,
            fontWeight: 800,
            fontSize: '1rem',
            borderRadius: 3,
            "&:hover": { 
              opacity: 0.9,
              transform: 'translateY(-3px)'
            },
          }}
        >
          🎉 Start Free Trial
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<PlayCircleIcon />}
          sx={{
            color: colors.white,
            borderColor: colors.white,
            px: 4,
            py: 1.5,
            borderRadius: 3,
            "&:hover": { 
              bgcolor: alpha(colors.white, 0.1),
              transform: 'translateY(-3px)'
            },
          }}
        >
          👀 Watch Magic Demo
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing={3}
        sx={{ mt: 5, flexWrap: "wrap", gap: 2 }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" fontWeight={800} color={colors.yellow}>
            50k+
          </Typography>
          <Typography variant="body2" sx={{ color: alpha(colors.white, 0.9) }}>
            Happy Kids
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" fontWeight={800} color={colors.yellow}>
            500+
          </Typography>
          <Typography variant="body2" sx={{ color: alpha(colors.white, 0.9) }}>
            Expert Teachers
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" fontWeight={800} color={colors.yellow}>
            25+
          </Typography>
          <Typography variant="body2" sx={{ color: alpha(colors.white, 0.9) }}>
            Awards Won
          </Typography>
        </Box>
      </Stack>

      {/* Trust Badges */}
      <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap", gap: 1 }}>
        <Chip 
          label="🏆 India's Top Rated" 
          size="small" 
          sx={{ bgcolor: alpha(colors.white, 0.15), color: colors.white }}
        />
        <Chip 
          label="⭐ 4.9/5 Rating" 
          size="small" 
          sx={{ bgcolor: alpha(colors.white, 0.15), color: colors.white }}
        />
        <Chip 
          label="🎓 ISO Certified" 
          size="small" 
          sx={{ bgcolor: alpha(colors.white, 0.15), color: colors.white }}
        />
      </Stack>
    </motion.div>
  </Grid>

  {/* Right Image - 50% */}
  <Grid item xs={12} md={6}>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeRight}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Box sx={{ position: "relative", textAlign: "center" }}>
        {/* Floating Badge 1 */}
        <Box
          component={motion.div}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          sx={{
            position: "absolute",
            top: 10,
            left: -10,
            bgcolor: colors.yellow,
            color: colors.orange,
            px: 2,
            py: 1,
            borderRadius: 4,
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 1,
            boxShadow: 3,
            zIndex: 2,
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: 20 }} />
          <Typography variant="caption" fontWeight={700}>Best Academy 2024</Typography>
        </Box>

        {/* Floating Badge 2 */}
        <Box
          component={motion.div}
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          sx={{
            position: "absolute",
            bottom: 50,
            right: -10,
            bgcolor: colors.green,
            color: colors.white,
            px: 2,
            py: 1,
            borderRadius: 4,
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 1,
            boxShadow: 3,
            zIndex: 2,
          }}
        >
          <SchoolIcon sx={{ fontSize: 20 }} />
          <Typography variant="caption" fontWeight={700}>1M+ Classes Completed</Typography>
        </Box>

        {/* Main Image */}
        <Box
          component="img"
          src={homeImage}
          alt="Pro Kidz Student"
          sx={{
            width: "100%",
            maxWidth: 500,
            height: "auto",
            borderRadius: 5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            margin: "0 auto",
            display: "block",
            position: "relative",
            zIndex: 1,
          }}
        />
        
        {/* Rating Badge */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: alpha(colors.white, 0.95),
            px: 2.5,
            py: 1.2,
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            whiteSpace: "nowrap",
            boxShadow: 3,
            zIndex: 2,
          }}
        >
          <Rating value={5} readOnly size="small" sx={{ color: colors.yellow }} />
          <Typography variant="body2" fontWeight={700} color={colors.black}>
            💝 10,000+ Happy Parents
          </Typography>
        </Box>

        {/* Animated Circles behind image */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "110%",
            height: "110%",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(colors.yellow, 0.1)}, transparent)`,
            zIndex: 0,
          }}
        />
      </Box>
    </motion.div>
  </Grid>
</Grid>
        </Container>
      </Box>

      {/* Features Section */}
     <Container maxWidth="xl" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  transition={{ duration: 0.6 }}
  style={{ textAlign: 'center', width: '100%' }}
>
  <Typography
    variant="h3"
    sx={{ 
      mb: 2, 
      color: colors.orange,
      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
      fontWeight: 800
    }}
  >
    🎯 Why Choose Pro Kidz?
  </Typography>
  <Typography
    variant="h6"
    sx={{ 
      mb: { xs: 4, sm: 6, md: 8 },
      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
      color: colors.gray
    }}
  >
    🌟 Empowering young minds with world-class abacus training 🌟
  </Typography>
</motion.div>

  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)'
      },
      gap: { xs: 2, sm: 3, md: 4 },
      justifyItems: 'center',
      alignItems: 'stretch'
    }}
  >
    {features.map((feature, index) => (
      <motion.div
        key={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 380,
            minWidth: { xs: 'auto', sm: 230, md: 240 },
            height: { xs: 'auto', sm: 230, md: 240 },
            textAlign: "center",
            bgcolor: feature.bgColor,
            borderRadius: { xs: 3, md: 4 },
            transition: "all 0.3s ease-in-out",
            border: `2px solid ${alpha(feature.color, 0.3)}`,
            cursor: "pointer",
            display: 'flex',
            flexDirection: 'column',
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: `0 20px 40px ${alpha(feature.color, 0.25)}`,
              borderColor: feature.color,
            },
          }}
        >
          <CardContent sx={{ 
            p: { xs: 2.5, sm: 3, md: 4 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Box
              sx={{
                display: "inline-flex",
                p: { xs: 1.5, sm: 2 },
                borderRadius: "50%",
                bgcolor: alpha(feature.color, 0.15),
                color: feature.color,
                mb: { xs: 2, sm: 2.5 },
                '& svg': {
                  fontSize: { xs: 35, sm: 38, md: 42 }
                }
              }}
            >
              {feature.icon}
            </Box>
            <Typography 
              variant="h6" 
              fontWeight={800} 
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                mb: 1.5
              }}
            >
              {feature.title}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                lineHeight: 1.6,
                px: { xs: 1, sm: 2 }
              }}
            >
              {feature.description}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </Box>
</Container>

      {/* Programs Section */}
      <Box sx={{ bgcolor: colors.pastelOrange, py: 10 }}>
        <Container maxWidth="xl">
        <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  transition={{ duration: 0.6 }}
  style={{ textAlign: 'center', width: '100%' }}
>
  <Typography
    variant="h3"
    sx={{ 
      mb: 2, 
      color: colors.green,
      fontWeight: 800,
      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' }
    }}
  >
    📚 Our Programs
  </Typography>
  <Typography
    variant="h6"
    sx={{ 
      mb: 6,
      color: colors.gray,
      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
    }}
  >
    🎯 Structured curriculum for every age group
  </Typography>
</motion.div>

          <Grid container spacing={4}>
            {programs.map((program, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      borderRadius: 4,
                      position: "relative",
                      borderTop: `5px solid ${program.color}`,
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 3,
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor: program.color,
                        color: colors.white,
                        px: 2.5,
                        py: 0.75,
                        borderRadius: 4,
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {program.level}
                    </Box>
                    <CardContent sx={{ pt: 4, pb: 3 }}>
                      <Box sx={{ color: program.color, mb: 2, fontSize: 40 }}>
                        {program.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        color={program.color}
                        gutterBottom
                      >
                        {program.age}
                      </Typography>
                      <Chip
                        label={program.duration}
                        size="small"
                        sx={{
                          mb: 2,
                          bgcolor: alpha(program.color, 0.1),
                          color: program.color,
                          fontWeight: 600,
                        }}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {program.description}
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          bgcolor: program.color,
                          "&:hover": { opacity: 0.9 },
                        }}
                      >
                        Enroll Now →
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
    <Container maxWidth="xl" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    transition={{ duration: 0.6 }}
    style={{ textAlign: 'center', marginBottom: '48px' }}
  >
    <Typography
      variant="h3"
      sx={{ 
        mb: 2, 
        color: colors.orange,
        fontWeight: 800,
        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' }
      }}
    >
      📊 Our Impact in Numbers
    </Typography>
    <Typography
      variant="h6"
      sx={{ 
        color: colors.gray,
        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
      }}
    >
      🌟 Making a difference, one child at a time
    </Typography>
  </motion.div>

  <Grid container spacing={{ xs: 2, sm: 3, md: 5 }}>
    {stats.map((stat, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          transition={{ delay: index * 0.05, duration: 0.4 }}
        >
          <Paper
            sx={{
              p: { xs: 2, sm: 3 },
              textAlign: "center",
              bgcolor: alpha(stat.color, 0.08),
              borderRadius: 4,
              border: `2px solid ${alpha(stat.color, 0.2)}`,
              transition: "all 0.3s ease",
              cursor: "pointer",
              height: "100%",
              
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: `0 10px 30px ${alpha(stat.color, 0.2)}`,
                borderColor: stat.color,
                bgcolor: alpha(stat.color, 0.12),
              },
            }}
          >
            {/* Icon */}
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                mb: 1
              }}
            >
              {stat.icon}
            </Typography>
            
            {/* Value */}
            <Typography 
              variant="h3" 
              fontWeight={800} 
              color={stat.color}
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                lineHeight: 1.2
              }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </Typography>
            
            {/* Label */}
            <Typography 
              variant="body1" 
              fontWeight={700} 
              sx={{ 
                mt: 1,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                color: colors.black
              }}
            >
              {stat.label}
            </Typography>
            
            {/* Description */}
            <Typography 
              variant="caption" 
              sx={{ 
                mt: 0.5,
                color: colors.gray,
                fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }
              }}
            >
              {stat.description}
            </Typography>
          </Paper>
        </motion.div>
      </Grid>
    ))}
  </Grid>
</Container>

    




// Testimonials Section
<Box sx={{ bgcolor: colors.pastelGreen, py: { xs: 6, sm: 8, md: 10 } }}>
  <Container maxWidth="xl">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', width: '100%', marginBottom: '48px' }}
    >
      <Typography
        variant="h3"
        sx={{ 
          mb: 2, 
          color: colors.blue,
          fontWeight: 800,
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' }
        }}
      >
        💝 What Parents Say
      </Typography>
      <Typography
        variant="h6"
        sx={{ 
          color: colors.gray,
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
        }}
      >
        🌟 Join 50,000+ happy families who trust Pro Kidz 🌟
      </Typography>
    </motion.div>

    {/* Fixed Width Grid - 3 in a row with images */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: { xs: 2, sm: 3, md: 6 },
      }}
    >
      {testimonials.slice(0, 6).map((testimonial, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
          style={{
            width: '100%',
            maxWidth: '380px',
            flex: '0 0 auto',
          }}
        >
          <Card
            sx={{
              p: { xs: 2, sm: 2.5, md: 3 },
              height: "100%",
              minHeight: { xs: 'auto', md: 280 },
              width: '100%',
              position: "relative",
              borderBottom: `4px solid ${colors.orange}`,
              borderRadius: 3,
              transition: "all 0.3s ease",
              display: 'flex',
              flexDirection: 'column',
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
                borderBottomWidth: '6px',
              },
            }}
          >


            <FormatQuoteIcon
              sx={{
                fontSize: { xs: 40, sm: 50, md: 60 },
                color: alpha(colors.orange, 0.15),
                position: "absolute",
                top: 100,
                right: 16,
              }}
            />
            
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
               <Box
              sx={{
                width: '100%',
                height: '120px',
                overflow: 'hidden',
                borderRadius: 2,
                mb: 2,
              }}
            >
              <img
                src={testimonialImages[index]}
                alt={`testimonial ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
              <Box>
                <Typography 
                  variant="subtitle1" 
                  fontWeight={700}
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                >
                  {testimonial.name}
                </Typography>
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' } }}
                >
                  {testimonial.childName}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    📍 {testimonial.location}
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Rating
              value={testimonial.rating}
              readOnly
              size="small"
              sx={{ mb: 1.5, color: colors.yellow }}
            />
            
            <Typography
              variant="body2"
              sx={{ 
                fontStyle: "italic", 
                lineHeight: 1.6,
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                flex: 1,
                wordWrap: 'break-word',
                whiteSpace: 'normal',
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              "{testimonial.text}"
            </Typography>
          </Card>
        </motion.div>
      ))}
    </Box>
  </Container>
</Box>



      {/* CTA Section */}
<Container maxWidth="xl" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
  <Grid container spacing={4} alignItems="center">
    {/* Images Left Side - Two Images */}
    <Grid item xs={12} md={6}>
      <Grid container spacing={2}>
       
        <Grid item xs={12}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={image}
                alt="Practice Today Perform Tomorrow"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Grid>

    {/* Text Right Side */}
    <Grid item xs={12} md={6}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeRight}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Box sx={{ pl: { xs: 0, md: 4 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: colors.orange,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
              mb: 2,
            }}
          >
            🚀 Ready to Start Your Journey?
          </Typography>
          
          <Typography
            variant="h6"
            sx={{ 
              mb: 4, 
              color: colors.gray,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            }}
          >
            🌟 Join 50,000+ happy students who have transformed their mathematical abilities
          </Typography>
          
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              startIcon={<CelebrationIcon />}
              sx={{
                bgcolor: colors.orange,
                color: colors.white,
                px: 4,
                py: 1.2,
                fontWeight: 700,
                borderRadius: 3,
                '&:hover': { 
                  bgcolor: colors.darkOrange,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              🎉 Get Started Today
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<TouchAppIcon />}
              sx={{
                color: colors.orange,
                borderColor: colors.orange,
                px: 4,
                py: 1.2,
                fontWeight: 700,
                borderRadius: 3,
                '&:hover': { 
                  bgcolor: alpha(colors.orange, 0.1),
                  transform: 'translateY(-2px)',
                },
              }}
            >
              📞 Book Free Demo
            </Button>
          </Stack>

          <Typography
            variant="body2"
            sx={{ 
              mt: 4,
              color: colors.gray,
              textAlign: 'center',
            }}
          >
            ⚡ Limited seats available • No hidden charges • Free demo class
          </Typography>
        </Box>
      </motion.div>
    </Grid>
  </Grid>
</Container>

      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}
      >
        <IconButton
          sx={{
            bgcolor: colors.orange,
            color: colors.white,
            width: 56,
            height: 56,
            boxShadow: 4,
            "&:hover": { bgcolor: colors.darkOrange, transform: "scale(1.1)" },
          }}
        >
          <SchoolIcon />
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default Home;
