import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Rating,
  alpha,
  Paper,
  Stack,
  Avatar,
  Divider,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import StarIcon from '@mui/icons-material/Star';
import SpeedIcon from '@mui/icons-material/Speed';
import MemoryIcon from '@mui/icons-material/Memory';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

// Import local images (create these folders and add your images)
import abacusBeginnerImg from './assets/images/abacus-beginner.jpg';
import abacusIntermediateImg from './assets/images/abacus-intermediate.jpg';
import abacusAdvancedImg from './assets/images/abacus-advanced.jpg';
import teacherTrainingImg from './assets/images/teacher-training.jpg';
import vedicMathImg from './assets/images/vedic-math.jpg';
import summerCampImg from './assets/images/summer-camp.jpg';
import heroBgImg from './assets/images/hero-bg.jpg';
import whyUsImg from './assets/images/why-us.jpg';

const Courses = () => {
  const [level, setLevel] = useState('all');
  const [openModal, setOpenModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openEnrollSnackbar, setOpenEnrollSnackbar] = useState(false);
  const [openDemoSnackbar, setOpenDemoSnackbar] = useState(false);
  const [enrollEmail, setEnrollEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [selectedEnrollCourse, setSelectedEnrollCourse] = useState(null);

  // Brand Colors from image
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

  // Course data EXACTLY from the image
  const courses = [
    {
      id: 1,
      title: 'ABACUS COURSE',
      displayTitle: 'Abacus Course',
      level: 'beginner',
      duration: '3 months',
      students: 1240,
      rating: 4.8,
      image: abacusBeginnerImg,
      images: [abacusBeginnerImg, abacusIntermediateImg, abacusAdvancedImg],
      description: 'Master mental arithmetic using the abacus tool. Perfect for beginners learning abacus basics and simple operations.',
      longDescription: 'Master mental arithmetic using the abacus tool. This course is designed for children aged 5-15 years. Learn abacus basics and simple calculations step by step.',
      topics: ['Introduction to Abacus', 'Basic Addition', 'Basic Subtraction', 'Number Recognition', 'Simple Multiplication'],
      benefits: ['Faster Calculations', 'Boosts Confidence', 'Sharpen Memory', 'Better Academic Performance'],
      color: colors.yellow,
      price: '₹2,999',
      originalPrice: '₹4,999',
      certificate: true,
      projects: 5,
      videos: 24,
      ageRange: '5-15 Years',
      tagline: 'Step-by-step learning for continuous growth!',
    },
    {
      id: 2,
      title: 'MENTAL MATH',
      displayTitle: 'Mental Math',
      level: 'intermediate',
      duration: '4 months',
      students: 890,
      rating: 4.9,
      image: abacusIntermediateImg,
      images: [abacusIntermediateImg, abacusBeginnerImg, abacusAdvancedImg],
      description: 'Enhance calculation speed and accuracy with fun techniques. Advance to multi-digit calculations.',
      longDescription: 'Enhance calculation speed and accuracy with fun techniques. For ages 6-15 years. Advance to multi-digit calculations and build mental math mastery.',
      topics: ['Mental Addition', 'Mental Subtraction', 'Multiplication Tables', 'Division Tricks', 'Speed Building'],
      benefits: ['Faster Calculations', 'Boosts Confidence', 'Sharpen Memory', 'Better Academic Performance'],
      color: colors.orange,
      price: '₹4,999',
      originalPrice: '₹7,999',
      certificate: true,
      projects: 8,
      videos: 36,
      ageRange: '6-15 Years',
      tagline: 'Advance to multi-digit calculations!',
    },
    {
      id: 3,
      title: 'VEDIC MATH',
      displayTitle: 'Vedic Math',
      level: 'advanced',
      duration: '6 months',
      students: 456,
      rating: 4.95,
      image: vedicMathImg,
      images: [vedicMathImg, abacusAdvancedImg, abacusBeginnerImg],
      description: 'Learn fast calculation methods based on ancient techniques. Achieve speed, accuracy & excellence!',
      longDescription: 'Learn fast calculation methods based on ancient techniques. For ages 8-15 years. Master Vedic mathematics sutras for lightning-fast calculations.',
      topics: ['Vedic Sutras', 'Speed Calculations', 'Square Roots', 'Cube Roots', 'Advanced Mental Math'],
      benefits: ['Faster Calculations', 'Boosts Confidence', 'Sharpen Memory', 'Better Academic Performance'],
      color: colors.pink,
      price: '₹6,999',
      originalPrice: '₹9,999',
      certificate: true,
      projects: 10,
      videos: 42,
      ageRange: '8-15 Years',
      tagline: 'Achieve speed, accuracy & excellence!',
    },
    {
      id: 4,
      title: 'BRAIN DEVELOPMENT',
      displayTitle: 'Brain Development',
      level: 'beginner',
      duration: '4 months',
      students: 234,
      rating: 4.85,
      image: teacherTrainingImg,
      images: [teacherTrainingImg, summerCampImg, vedicMathImg],
      description: 'Activities to improve memory, focus, and concentration. Building skills for ages 5-15 years.',
      longDescription: 'Activities to improve memory, focus, and concentration. This course includes fun brain exercises, puzzles, and cognitive development activities.',
      topics: ['Memory Games', 'Focus Exercises', 'Concentration Tasks', 'Problem Solving', 'Cognitive Skills'],
      benefits: ['Faster Calculations', 'Boosts Confidence', 'Sharpen Memory', 'Better Academic Performance'],
      color: colors.orange,
      price: '₹3,999',
      originalPrice: '₹5,999',
      certificate: true,
      projects: 6,
      videos: 28,
      ageRange: '5-15 Years',
      tagline: 'Building Skills. Building Confidence. Building Champions!',
    },
  ];

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCourse(null);
  };

  const handleEnrollNow = (course) => {
    setSelectedEnrollCourse(course);
    setShowEmailInput(true);
  };

  const handleSubmitEnroll = () => {
    if (enrollEmail) {
      setOpenEnrollSnackbar(true);
      setShowEmailInput(false);
      setEnrollEmail('');
      setSelectedEnrollCourse(null);
    }
  };

  const handleBookDemo = () => {
    setOpenDemoSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenEnrollSnackbar(false);
    setOpenDemoSnackbar(false);
  };

  const filteredCourses = level === 'all' ? courses : courses.filter(c => c.level === level);

  const levelColors = {
    beginner: colors.yellow,
    intermediate: colors.orange,
    advanced: colors.pink,
    professional: colors.orange,
  };

  return (
    <>
      <Box sx={{ bgcolor: colors.lightGray }}>
        {/* Hero Section - Exactly from image */}
        <Box
          sx={{
            bgcolor: colors.orange,
            color: 'white',
            py: { xs: 6, md: 8 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '0 0 60px 60px',
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="overline" 
                sx={{ 
                  letterSpacing: 2,
                  fontWeight: 600,
                  mb: 2,
                  display: 'block',
                }}
              >
                PRO KIDZ
              </Typography>
              <Typography 
                variant="h2" 
                gutterBottom 
                sx={{ 
                  fontWeight: 800,
                  fontSize: { xs: 36, md: 48, lg: 56 },
                }}
              >
                Our Courses
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  opacity: 0.95,
                  maxWidth: 700,
                  mx: 'auto',
                }}
              >
                Step-by-step learning for continuous growth!
              </Typography>
            </motion.div>
          </Container>
          
          {/* Decorative Circles */}
          <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: alpha(colors.yellow, 0.2) }} />
          <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 150, height: 150, borderRadius: '50%', bgcolor: alpha(colors.pink, 0.2) }} />
        </Box>

        <Container sx={{ py: 8 }}>
          {/* Course Levels Banner - From image */}
          <Paper
            sx={{
              p: 4,
              mb: 6,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${colors.yellow}20, ${colors.pink}20)`,
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: colors.darkBlue }}>
              COURSE LEVELS
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Step-by-step learning for continuous growth!
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2, bgcolor: alpha(colors.yellow, 0.2), borderRadius: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.orange }}>BEGINNER</Typography>
                  <Typography variant="body2">Learn abacus basics and simple operations.</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2, bgcolor: alpha(colors.orange, 0.2), borderRadius: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.orange }}>INTERMEDIATE</Typography>
                  <Typography variant="body2">Advance to multi-digit calculations.</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2, bgcolor: alpha(colors.pink, 0.2), borderRadius: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.pink }}>EXPERT</Typography>
                  <Typography variant="body2">Achieve speed, accuracy & excellence!</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Filter Section */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6, flexWrap: 'wrap', gap: 2 }}>
            <Paper
              sx={{
                p: 0.5,
                bgcolor: alpha(colors.orange, 0.1),
                borderRadius: 4,
                display: 'inline-flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <ToggleButtonGroup
                value={level}
                exclusive
                onChange={(e, val) => val && setLevel(val)}
                aria-label="course level"
                sx={{
                  flexWrap: 'wrap',
                  '& .MuiToggleButton-root': {
                    px: 3,
                    py: 1,
                    borderRadius: 3,
                    '&.Mui-selected': {
                      bgcolor: colors.orange,
                      color: 'white',
                      '&:hover': {
                        bgcolor: colors.orangeDark,
                      },
                    },
                  },
                }}
              >
                <ToggleButton value="all">All Courses</ToggleButton>
                <ToggleButton value="beginner">Beginner</ToggleButton>
                <ToggleButton value="intermediate">Intermediate</ToggleButton>
                <ToggleButton value="advanced">Advanced</ToggleButton>
              </ToggleButtonGroup>
            </Paper>
          </Box>

          {/* Tagline from image */}
          <Typography 
            align="center" 
            sx={{ 
              mb: 4, 
              fontStyle: 'italic',
              color: colors.orange,
              fontWeight: 600,
            }}
          >
            Every course. Every child. A better tomorrow.
          </Typography>

          {/* Courses Grid */}
          <Grid container spacing={4}>
            {filteredCourses.map((course, index) => (
              <Grid item xs={12} md={6} key={course.id}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    sx={{ 
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 8,
                      },
                      position: 'relative',
                    }}
                  >
                    {/* Age Badge - From image */}
                    <Chip
                      label={`Ages: ${course.ageRange}`}
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 1,
                        bgcolor: colors.orange,
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                    
                    {/* Course Image */}
                    <Box
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleOpenModal(course)}
                    >
                      <CardMedia
                        component="img"
                        sx={{ 
                          width: '100%', 
                          height: 220, 
                          objectFit: 'cover',
                          transition: 'transform 0.5s',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                        image={course.image}
                        alt={course.title}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bgcolor: alpha(colors.orange, 0.5),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.3s',
                          '&:hover': {
                            opacity: 1,
                          },
                        }}
                      >
                        <PlayCircleIcon sx={{ fontSize: 60, color: 'white' }} />
                      </Box>
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, color: course.color }}>
                        {course.displayTitle}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {course.description}
                      </Typography>

                      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                        <Chip 
                          icon={<AccessTimeIcon />} 
                          label={course.duration} 
                          size="small"
                          sx={{ bgcolor: alpha(course.color, 0.1), color: course.color }}
                        />
                        <Chip 
                          icon={<GroupIcon />} 
                          label={`${course.students}+ learners`} 
                          size="small"
                          sx={{ bgcolor: alpha(course.color, 0.1), color: course.color }}
                        />
                        <Chip 
                          icon={<EmojiEventsIcon />} 
                          label="Certificate" 
                          size="small"
                          sx={{ bgcolor: alpha(course.color, 0.1), color: course.color }}
                        />
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Rating value={course.rating} precision={0.1} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary">
                          ({course.rating})
                        </Typography>
                        <Box sx={{ ml: 'auto' }}>
                          <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.disabled' }}>
                            {course.originalPrice}
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: course.color }}>
                            {course.price}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Benefits from image */}
                      <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {course.benefits.slice(0, 2).map((benefit, idx) => (
                          <Chip 
                            key={idx} 
                            icon={<StarIcon sx={{ fontSize: 16 }} />}
                            label={benefit} 
                            size="small" 
                            sx={{ 
                              bgcolor: alpha(colors.orange, 0.1),
                              color: colors.orange,
                              fontSize: '0.7rem',
                            }} 
                          />
                        ))}
                      </Box>

                      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                        <Button 
                          variant="contained" 
                          fullWidth
                          onClick={() => handleEnrollNow(course)}
                          sx={{ 
                            bgcolor: course.color,
                            '&:hover': { bgcolor: course.color === colors.orange ? colors.orangeDark : course.color },
                          }}
                        >
                          Enroll Now
                        </Button>
                        <Button 
                          variant="outlined"
                          fullWidth
                          onClick={() => handleOpenModal(course)}
                          sx={{ 
                            borderColor: course.color,
                            color: course.color,
                          }}
                        >
                          View Details
                        </Button>
                      </Stack>

                      {/* Email input for enrollment */}
                      {showEmailInput && selectedEnrollCourse?.id === course.id && (
                        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                          <TextField
                            size="small"
                            placeholder="Enter your email"
                            value={enrollEmail}
                            onChange={(e) => setEnrollEmail(e.target.value)}
                            fullWidth
                          />
                          <Button 
                            variant="contained" 
                            size="small"
                            onClick={handleSubmitEnroll}
                            sx={{ bgcolor: colors.orange }}
                          >
                            Submit
                          </Button>
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* No Courses Found */}
          {filteredCourses.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h5" color="text.secondary">
                No courses found for this level
              </Typography>
            </Box>
          )}
        </Container>

        {/* Benefits Section - Exactly from image */}
        <Box sx={{ bgcolor: alpha(colors.pink, 0.05), py: 8 }}>
          <Container>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.orange }}>
              BENEFITS FOR YOUR CHILD
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
              BUILDING SKILLS. FOR AGE: 5-15 YEARS
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Avatar sx={{ bgcolor: colors.orange, width: 80, height: 80, mx: 'auto', mb: 2 }}>
                  <SpeedIcon sx={{ fontSize: 45 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Faster Calculations</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Avatar sx={{ bgcolor: colors.yellow, width: 80, height: 80, mx: 'auto', mb: 2 }}>
                  <SelfImprovementIcon sx={{ fontSize: 45 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Boosts Confidence</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Avatar sx={{ bgcolor: colors.pink, width: 80, height: 80, mx: 'auto', mb: 2 }}>
                  <MemoryIcon sx={{ fontSize: 45 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Sharpen Memory</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Avatar sx={{ bgcolor: colors.orange, width: 80, height: 80, mx: 'auto', mb: 2 }}>
                  <SchoolIcon sx={{ fontSize: 45 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Better Academic Performance</Typography>
              </Grid>
            </Grid>
            <Typography variant="h5" align="center" sx={{ mt: 6, fontWeight: 700, color: colors.orange }}>
              Building Skills. Building Confidence. Building Champions!
            </Typography>
          </Container>
        </Box>

        {/* CTA Section - Ready to Get Started from image */}
        <Container sx={{ py: 8 }}>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Paper
              sx={{
                p: { xs: 4, md: 6 },
                background: `linear-gradient(135deg, ${colors.yellow}, ${colors.orangeLight})`,
                color: 'white',
                textAlign: 'center',
                borderRadius: 4,
              }}
            >
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>
                READY TO GET STARTED?
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.95 }}>
                Join thousands of happy learners at Pro Kidz!
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <CheckCircleIcon />
                    <Typography>Book a Free Demo Class</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <CheckCircleIcon />
                    <Typography>Meet Our Expert Trainers</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <CheckCircleIcon />
                    <Typography>Personalized Learning Plans</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <CheckCircleIcon />
                    <Typography>Proven Results</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Button 
                variant="contained" 
                size="large"
                onClick={handleBookDemo}
                sx={{ 
                  bgcolor: 'white', 
                  color: colors.orange,
                  '&:hover': { bgcolor: alpha('white', 0.9) },
                  px: 6,
                  py: 1.5,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                }}
              >
                Book a Free Demo Class
              </Button>
              <Typography variant="body2" sx={{ mt: 3, opacity: 0.9 }}>
                Take the first step towards a smarter, brighter future!
              </Typography>
            </Paper>
          </motion.div>
        </Container>

        {/* Footer / Contact Section - From image */}
        <Box sx={{ bgcolor: colors.darkBlue, color: 'white', py: 6, mt: 4 }}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
                  PRO KIDZ
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                  Empowering Young Minds for a Bright Future!
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  Follow Us:
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton sx={{ color: 'white' }}><FacebookIcon /></IconButton>
                  <IconButton sx={{ color: 'white' }}><InstagramIcon /></IconButton>
                  <IconButton sx={{ color: 'white' }}><LinkedInIcon /></IconButton>
                  <IconButton sx={{ color: 'white' }}><TwitterIcon /></IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  CONTACT US
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <LocalPhoneIcon fontSize="small" /> +91 12345 67890
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <EmailIcon fontSize="small" /> info@prokidz.com
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <LocationOnIcon fontSize="small" /> 123, Education Street, Learning City, India
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  www.prokidz.com
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  CONTACT US TODAY!
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={handleBookDemo}
                  sx={{ bgcolor: colors.orange, mt: 2 }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ my: 3, bgcolor: alpha('white', 0.2) }} />
            <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
              © 2024 Pro Kidz. All rights reserved. | Empowering Young Minds for a Bright Future!
            </Typography>
          </Container>
        </Box>
      </Box>

      {/* Course Details Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
      >
        <Fade in={openModal}>
          <Paper sx={{ maxWidth: 800, width: '100%', maxHeight: '90vh', overflow: 'auto', borderRadius: 4, position: 'relative' }}>
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: 'sticky', top: 8, right: 8, float: 'right', bgcolor: 'white', zIndex: 1 }}
            >
              <CloseIcon />
            </IconButton>
            {selectedCourse && (
              <Box>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src={selectedCourse.images[0]}
                    alt={selectedCourse.title}
                    sx={{ width: '100%', height: 300, objectFit: 'cover' }}
                  />
                  <Chip
                    label={selectedCourse.ageRange}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: colors.orange,
                      color: 'white',
                      fontWeight: 700,
                    }}
                  />
                </Box>

                <Box sx={{ p: 3 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, color: selectedCourse.color }}>
                    {selectedCourse.title}
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                    <Chip icon={<AccessTimeIcon />} label={selectedCourse.duration} />
                    <Chip icon={<GroupIcon />} label={`${selectedCourse.students}+ learners`} />
                    <Chip icon={<EmojiEventsIcon />} label="Certificate Included" />
                    <Chip icon={<VideoLibraryIcon />} label={`${selectedCourse.videos} videos`} />
                    <Chip icon={<AssignmentIcon />} label={`${selectedCourse.projects} projects`} />
                  </Stack>

                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                    Course Description
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary">
                    {selectedCourse.longDescription}
                  </Typography>

                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mt: 2 }}>
                    What You'll Learn
                  </Typography>
                  <Grid container spacing={1} sx={{ mb: 3 }}>
                    {selectedCourse.topics.map((topic, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CheckCircleIcon sx={{ color: selectedCourse.color, fontSize: 20 }} />
                          <Typography variant="body2">{topic}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                    Course Benefits
                  </Typography>
                  <Grid container spacing={1} sx={{ mb: 3 }}>
                    {selectedCourse.benefits.map((benefit, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <StarIcon sx={{ color: colors.yellow, fontSize: 20 }} />
                          <Typography variant="body2">{benefit}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Box>
                      <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.disabled' }}>
                        {selectedCourse.originalPrice}
                      </Typography>
                      <Typography variant="h3" sx={{ fontWeight: 800, color: selectedCourse.color }}>
                        {selectedCourse.price}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">One-time payment</Typography>
                    </Box>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => {
                        handleCloseModal();
                        handleEnrollNow(selectedCourse);
                      }}
                      sx={{
                        bgcolor: selectedCourse.color,
                        '&:hover': { bgcolor: selectedCourse.color === colors.orange ? colors.orangeDark : selectedCourse.color },
                        px: 4,
                      }}
                    >
                      Enroll Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
          </Paper>
        </Fade>
      </Modal>

      {/* Snackbars for notifications */}
      <Snackbar open={openEnrollSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Successfully enrolled! We'll contact you soon.
        </Alert>
      </Snackbar>
      <Snackbar open={openDemoSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
          Free demo class booked! Our team will reach out shortly.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Courses;