import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Avatar,
  useTheme,
  alpha,
  Stack,
  Divider,
  Paper,
  Rating,
  IconButton,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpeedIcon from '@mui/icons-material/Speed';
import MemoryIcon from '@mui/icons-material/Memory';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SchoolIcon from '@mui/icons-material/School';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Home = () => {
  // Brand Colors (Same as About page)
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
  };

  const features = [
    {
      icon: <SpeedIcon sx={{ fontSize: 48 }} />,
      title: 'Fast Calculation',
      description: 'Improve calculation speed by 5-10x with proven abacus techniques',
      color: colors.orange,
    },
    {
      icon: <MemoryIcon sx={{ fontSize: 48 }} />,
      title: 'Better Memory',
      description: 'Enhance photographic memory and concentration power',
      color: colors.yellow,
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 48 }} />,
      title: 'Logical Thinking',
      description: 'Develop analytical and problem-solving skills',
      color: colors.pink,
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 48 }} />,
      title: 'Certified Courses',
      description: 'Internationally recognized certification',
      color: colors.orange,
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 48 }} />,
      title: 'Performance Tracking',
      description: 'Regular assessments and progress reports',
      color: colors.yellow,
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 48 }} />,
      title: 'Brain Development',
      description: 'Boost overall cognitive abilities',
      color: colors.pink,
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 48 }} />,
      title: 'Small Batches',
      description: 'Personalized attention to each student',
      color: colors.orange,
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 48 }} />,
      title: 'Expert Trainers',
      description: 'Certified and experienced teachers',
      color: colors.yellow,
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      childName: 'Aarav Sharma, Grade 5',
      rating: 5,
      text: 'My son\'s math grades improved from C to A+ in just 6 months. The abacus training has done wonders for his concentration!',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Priya Patel',
      childName: 'Kavya Patel, Grade 4',
      rating: 5,
      text: 'Best decision we made for our daughter. She now loves math and participates in competitions confidently.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Amit Kumar',
      childName: 'Rohan Kumar, Grade 6',
      rating: 5,
      text: 'The structured curriculum and amazing teachers make Pro Kidz stand out. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];

  const programs = [
    {
      level: 'Beginner',
      age: '5-7 Years',
      duration: '3 Months',
      description: 'Introduction to abacus, basic addition & subtraction',
      color: colors.orange,
    },
    {
      level: 'Intermediate',
      age: '7-9 Years',
      duration: '4 Months',
      description: 'Multiplication, division, and mental math',
      color: colors.yellow,
    },
    {
      level: 'Advanced',
      age: '9-12 Years',
      duration: '6 Months',
      description: 'Complex calculations, competition training',
      color: colors.pink,
    },
    {
      level: 'Expert',
      age: '12+ Years',
      duration: '8 Months',
      description: 'Master level with Vedic math integration',
      color: colors.orange,
    },
  ];

  return (
    <Box>
      {/* Hero Section with Orange Background (No Gradient) */}
      <Box
        sx={{
          bgcolor: colors.orange,
          color: 'white',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '0 0 60px 60px',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Chip 
                  label="⭐ India's #1 Abacus Academy" 
                  sx={{ 
                    bgcolor: colors.yellow, 
                    color: colors.orangeDark,
                    mb: 3,
                    fontWeight: 600,
                    fontSize: '1rem',
                    py: 2,
                  }} 
                />
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: 36, md: 52, lg: 60 }, 
                    mb: 2,
                    fontWeight: 800,
                    lineHeight: 1.2
                  }}
                >
                  Master Mental Math with{' '}
                  <Box component="span" sx={{ display: 'inline-block', borderBottom: `4px solid ${colors.yellow}` }}>
                    Abacus
                  </Box>
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.95, lineHeight: 1.5 }}>
                  Transform your child's mathematical abilities with our proven abacus training program. 
                  Join 10,000+ happy students!
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: colors.yellow,
                      color: colors.orangeDark,
                      '&:hover': { 
                        bgcolor: colors.yellowLight,
                        transform: 'translateY(-2px)'
                      },
                      px: 4,
                      py: 1.5,
                      fontWeight: 700,
                    }}
                  >
                    Start Free Trial
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large" 
                    sx={{ 
                      color: 'white', 
                      borderColor: 'white',
                      '&:hover': { 
                        borderColor: colors.yellow,
                        bgcolor: alpha(colors.yellow, 0.1)
                      },
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    <PlayCircleIcon sx={{ mr: 1 }} />
                    Watch Demo
                  </Button>
                </Stack>
                
                {/* Trust Badges */}
                <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: 'wrap', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: colors.yellow }} />
                    <Typography variant="body2">10,000+ Students</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: colors.yellow }} />
                    <Typography variant="body2">50+ Expert Teachers</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: colors.yellow }} />
                    <Typography variant="body2">98% Success Rate</Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Paper
                  elevation={20}
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1519457435734-28bd7148ac06?ixlib=rb-4.0.3"
                    alt="Abacus Learning"
                    sx={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      left: 20,
                      bgcolor: alpha(colors.orangeDark, 0.9),
                      borderRadius: 2,
                      p: 1,
                      px: 2,
                    }}
                  >
                    <Typography variant="body2">✨ Featured in Education Today</Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
        
        {/* Decorative Elements with Orange, Yellow, Pink */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            left: -50,
            width: 200,
            height: 200,
            borderRadius: '50%',
            bgcolor: alpha(colors.yellow, 0.2),
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: -30,
            right: -30,
            width: 150,
            height: 150,
            borderRadius: '50%',
            bgcolor: alpha(colors.pink, 0.2),
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 100,
            right: 100,
            width: 100,
            height: 100,
            borderRadius: '50%',
            bgcolor: alpha(colors.yellow, 0.15),
            zIndex: 0,
          }}
        />
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Chip 
            label="Why Choose Us" 
            sx={{ 
              bgcolor: alpha(colors.orange, 0.1), 
              color: colors.orange,
              mx: 'auto',
              display: 'table',
              mb: 2,
              fontWeight: 600
            }} 
          />
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              color: colors.orange,
            }}
          >
            Why Choose Pro Kidz?
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary" 
            sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            Discover the amazing benefits of learning abacus with India's most trusted academy
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card 
                  sx={{ 
                    textAlign: 'center', 
                    py: 4, 
                    px: 2,
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                    cursor: 'pointer',
                    borderTop: `4px solid ${feature.color}`,
                  }}
                >
                  <CardContent>
                    <Box 
                      sx={{ 
                        mb: 2,
                        display: 'inline-flex',
                        p: 2,
                        borderRadius: '50%',
                        background: alpha(feature.color, 0.1),
                        color: feature.color,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Programs Section */}
      <Box sx={{ bgcolor: alpha(colors.pink, 0.05), py: 8 }}>
        <Container>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Chip 
              label="Our Programs" 
              sx={{ 
                bgcolor: alpha(colors.yellow, 0.2), 
                color: colors.yellowDark,
                mx: 'auto',
                display: 'table',
                mb: 2,
                fontWeight: 600
              }} 
            />
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.pink }}>
              Our Programs
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
              Age-appropriate curriculum designed for every stage
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {programs.map((program, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    sx={{ 
                      textAlign: 'center',
                      height: '100%',
                      position: 'relative',
                      overflow: 'visible',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -15,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bgcolor: program.color,
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {program.level}
                    </Box>
                    <CardContent sx={{ mt: 3 }}>
                      <Typography variant="h4" sx={{ color: program.color, fontWeight: 700, mb: 1 }}>
                        {program.age}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Duration: {program.duration}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body2" paragraph>
                        {program.description}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        size="small"
                        sx={{ 
                          borderColor: program.color,
                          color: program.color,
                          '&:hover': { bgcolor: alpha(program.color, 0.1) }
                        }}
                      >
                        Learn More →
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
      <Box sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={4} textAlign="center">
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Paper sx={{ p: 3, bgcolor: alpha(colors.orange, 0.1), borderBottom: `4px solid ${colors.orange}` }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, color: colors.orange }}>
                    10,000+
                  </Typography>
                  <Typography variant="h6">Happy Students</Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Paper sx={{ p: 3, bgcolor: alpha(colors.yellow, 0.1), borderBottom: `4px solid ${colors.yellow}` }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, color: colors.yellowDark }}>
                    50+
                  </Typography>
                  <Typography variant="h6">Expert Teachers</Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper sx={{ p: 3, bgcolor: alpha(colors.pink, 0.1), borderBottom: `4px solid ${colors.pink}` }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, color: colors.pink }}>
                    98%
                  </Typography>
                  <Typography variant="h6">Success Rate</Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper sx={{ p: 3, bgcolor: alpha(colors.orange, 0.1), borderBottom: `4px solid ${colors.orange}` }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, color: colors.orange }}>
                    25+
                  </Typography>
                  <Typography variant="h6">Awards Won</Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: alpha(colors.yellow, 0.05), py: 8 }}>
        <Container>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Chip 
              label="Testimonials" 
              sx={{ 
                bgcolor: alpha(colors.pink, 0.1), 
                color: colors.pink,
                mx: 'auto',
                display: 'table',
                mb: 2,
                fontWeight: 600
              }} 
            />
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.orange }}>
              What Parents Say
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
              Hear from our happy families
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ p: 3, height: '100%', position: 'relative', bgcolor: alpha(colors.orange, 0.02) }}>
                    <FormatQuoteIcon 
                      sx={{ 
                        fontSize: 60, 
                        color: alpha(colors.orange, 0.2),
                        position: 'absolute',
                        top: 10,
                        right: 20,
                      }} 
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar src={testimonial.image} sx={{ width: 60, height: 60, mr: 2, border: `2px solid ${colors.orange}` }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.childName}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                      "{testimonial.text}"
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section with Yellow Background */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              bgcolor: colors.yellow,
              color: colors.orangeDark,
              textAlign: 'center',
              borderRadius: 4,
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Ready to Start Your Journey?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join thousands of students who have transformed their mathematical abilities
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: colors.orange, 
                  color: 'white',
                  '&:hover': { bgcolor: colors.orangeDark },
                  px: 4,
                }}
              >
                Get Started Today
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  color: colors.orange, 
                  borderColor: colors.orange,
                  '&:hover': { bgcolor: alpha(colors.orange, 0.1) }
                }}
              >
                Book Free Demo
              </Button>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;