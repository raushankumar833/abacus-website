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
import { motion } from 'framer-motion';
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
// Make sure this path is correct for your project structure
import homeImage from '../assets/home1.png'; 

const Home = () => {
  // Brand Colors
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
      {/* Hero Section */}
    <Box
  sx={{
    bgcolor: colors.orange,
    color: 'white',
    py: { xs: 8, md: 10 },   // 👈 better top-bottom spacing
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0 0 60px 60px',
  }}
>

  <Box sx={{ width: '100%', position: 'relative', zIndex: 2 }}>
    <Grid 
      container 
      spacing={4} 
      alignItems="center"
      sx={{ minHeight: { md: '85vh' } }}  // 👈 better than 100vh
    >

      {/* LEFT SIDE */}
      <Grid 
        item 
        xs={12} 
        md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 3, md: 8 },   // 👈 FIXED (15 → 8)
        }}
      >
        <Box sx={{ maxWidth: 520 }}>

          <Chip 
            label="India's #1 Abacus Academy" 
            sx={{ 
              bgcolor: alpha(colors.yellow, 0.15), 
              color: colors.yellow,
              mb: 3,
              fontWeight: 600,
            }} 
          />

          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2.2rem', md: '3.4rem' },
              lineHeight: 1.2,
            }}
          >
            Master Mental Math with{' '}
            <Box 
              component="span" 
              sx={{ 
                color: colors.yellow,
                borderBottom: `4px solid ${colors.yellow}`,
              }}
            >
              Pro Kidz
            </Box>
          </Typography>

          <Typography 
            variant="h6" 
            sx={{ mb: 4, opacity: 0.85 }}
          >
            Unlock your child's hidden potential with our proven abacus training methodology
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button 
              variant="contained"
              sx={{ 
                bgcolor: colors.yellow, 
                color: colors.orange,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                boxShadow: 3,
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: 6,
                }
              }}
            >
              Start Learning
            </Button>

            <Button 
              variant="outlined"
              sx={{ 
                color: 'white', 
                borderColor: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  bgcolor: alpha(colors.yellow, 0.1),
                  borderColor: colors.yellow,
                }
              }}
            >
              Watch Demo
            </Button>
          </Stack>

          {/* Stats */}
          <Stack direction="row" spacing={5} sx={{ mt: 5 }}>
            <Box>
              <Typography variant="h5" fontWeight={700}>10K+</Typography>
              <Typography variant="body2">Students</Typography>
            </Box>

            <Box>
              <Typography variant="h5" fontWeight={700}>50+</Typography>
              <Typography variant="body2">Teachers</Typography>
            </Box>

            <Box>
              <Typography variant="h5" fontWeight={700}>98%</Typography>
              <Typography variant="body2">Success</Typography>
            </Box>
          </Stack>

        </Box>
      </Grid>

      {/* RIGHT SIDE */}
      <Grid 
        item 
        xs={12} 
        md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, md: 6 },
        }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: 500,
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: 6,
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src={homeImage}
            alt="Pro Kidz"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              transition: '0.4s',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              bottom: 15,
              left: 15,
              bgcolor: alpha('#000', 0.6),
              color: '#fff',
              px: 2,
              py: 1,
              borderRadius: 2,
              fontSize: 14,
            }}
          >
            ⭐ Trusted by 10,000+ Parents
          </Box>
        </Box>
      </Grid>

    </Grid>
  </Box>

  {/* Decorative Elements (behind content) */}
  <Box
    sx={{
      position: 'absolute',
      bottom: -50,
      left: -50,
      width: 200,
      height: 200,
      borderRadius: '50%',
      bgcolor: alpha(colors.yellow, 0.2),
      zIndex: 1,
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
      zIndex: 1,
    }}
  />
</Box>

      {/* Features Section */}
    <Container sx={{ py: 6 }}>

  {/* HEADER SAME */}

  <Box sx={{ overflowX: 'auto' }}>
    <Grid 
      container 
      spacing={2} 
      sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }} // 👈 desktop pe single row
    >
      {features.map((feature, index) => (
        <Grid 
          item 
          xs={6} 
          sm={4} 
          md={2.4}   // 👈 approx 5 cards feel (works visually)
          key={index}
          sx={{ minWidth: { md: 180 } }} // 👈 important for row
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Card 
              sx={{ 
                textAlign: 'center', 
                py: 2,      // 👈 reduced
                px: 1.5,    // 👈 reduced
                height: '100%',
                borderRadius: 3,
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: 4,
                },
                borderTop: `3px solid ${feature.color}`,
              }}
            >
              <CardContent sx={{ p: '8px !important' }}>
                
                {/* Icon */}
                <Box 
                  sx={{ 
                    mb: 1,
                    display: 'inline-flex',
                    p: 1.2,   // 👈 smaller
                    borderRadius: '50%',
                    background: alpha(feature.color, 0.1),
                    color: feature.color,
                    fontSize: 20
                  }}
                >
                  {feature.icon}
                </Box>

                {/* Title */}
                <Typography 
                  variant="subtitle1" 
                  sx={{ fontWeight: 600, mb: 0.5 }}
                >
                  {feature.title}
                </Typography>

                {/* Description */}
                <Typography 
                  color="text.secondary" 
                  variant="caption"   // 👈 smaller text
                >
                  {feature.description}
                </Typography>

              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>

</Container>

      {/* Programs Section */}
   <Box sx={{ bgcolor: alpha(colors.pink, 0.05), py: 6 }}>
  <Container>

    {/* HEADER SAME */}

    <Box sx={{ overflowX: 'auto' }}>
      <Grid 
        container 
        spacing={2}
        sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }} // 👈 single row desktop
      >
        {programs.map((program, index) => (
          <Grid 
            item 
            xs={6} 
            sm={4} 
            md={2.4}   // 👈 compact width feel
            key={index}
            sx={{ minWidth: { md: 190 } }} // 👈 important
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Card 
                sx={{ 
                  textAlign: 'center',
                  height: '100%',
                  borderRadius: 3,
                  p: 1, // 👈 reduced padding
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                  }
                }}
              >

                {/* Level Tag */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: program.color,
                    color: 'white',
                    px: 1.5,
                    py: 0.3,
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: 12, // 👈 smaller
                  }}
                >
                  {program.level}
                </Box>

                <CardContent sx={{ p: '10px !important', mt: 2 }}>

                  {/* Age */}
                  <Typography 
                    variant="h6"   // 👈 smaller
                    sx={{ color: program.color, fontWeight: 700, mb: 0.5 }}
                  >
                    {program.age}
                  </Typography>

                  {/* Duration */}
                  <Typography 
                    variant="caption" 
                    color="text.secondary"
                  >
                    {program.duration}
                  </Typography>

                  <Divider sx={{ my: 1 }} />

                  {/* Description */}
                  <Typography 
                    variant="caption"   // 👈 compact text
                    sx={{ display: 'block', mb: 1 }}
                  >
                    {program.description}
                  </Typography>

                  {/* Button */}
                  <Button 
                    variant="outlined" 
                    size="small"
                    sx={{ 
                      borderColor: program.color,
                      color: program.color,
                      fontSize: 11,
                      py: 0.3,
                      '&:hover': { bgcolor: alpha(program.color, 0.1) }
                    }}
                  >
                    Learn →
                  </Button>

                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>

  </Container>
</Box>

      {/* Stats Section */}
     <Box sx={{ py: 6 }}>
  <Container>

    <Box sx={{ overflowX: 'auto' }}>
      <Grid 
        container 
        spacing={2}
        sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }} // 👈 desktop single row
      >

        {/* CARD 1 */}
        <Grid item xs={6} sm={4} md={2.5} sx={{ minWidth: { md: 200 } }}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Paper 
              sx={{ 
                p: 2,   // 👈 reduced
                textAlign: 'center', 
                bgcolor: alpha(colors.orange, 0.1), 
                borderBottom: `3px solid ${colors.orange}`,
                borderRadius: 3
              }}
            >
              <Typography variant="h5" fontWeight={700} color={colors.orange}>
                10,000+
              </Typography>
              <Typography variant="body2">Students</Typography>
            </Paper>
          </motion.div>
        </Grid>

        {/* CARD 2 */}
        <Grid item xs={6} sm={4} md={2.5} sx={{ minWidth: { md: 200 } }}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Paper 
              sx={{ 
                p: 2, 
                textAlign: 'center', 
                bgcolor: alpha(colors.yellow, 0.1), 
                borderBottom: `3px solid ${colors.yellow}`,
                borderRadius: 3
              }}
            >
              <Typography variant="h5" fontWeight={700} color={colors.yellowDark}>
                50+
              </Typography>
              <Typography variant="body2">Teachers</Typography>
            </Paper>
          </motion.div>
        </Grid>

        {/* CARD 3 */}
        <Grid item xs={6} sm={4} md={2.5} sx={{ minWidth: { md: 200 } }}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Paper 
              sx={{ 
                p: 2, 
                textAlign: 'center', 
                bgcolor: alpha(colors.pink, 0.1), 
                borderBottom: `3px solid ${colors.pink}`,
                borderRadius: 3
              }}
            >
              <Typography variant="h5" fontWeight={700} color={colors.pink}>
                98%
              </Typography>
              <Typography variant="body2">Success</Typography>
            </Paper>
          </motion.div>
        </Grid>

        {/* CARD 4 */}
        <Grid item xs={6} sm={4} md={2.5} sx={{ minWidth: { md: 200 } }}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Paper 
              sx={{ 
                p: 2, 
                textAlign: 'center', 
                bgcolor: alpha(colors.orange, 0.1), 
                borderBottom: `3px solid ${colors.orange}`,
                borderRadius: 3
              }}
            >
              <Typography variant="h5" fontWeight={700} color={colors.orange}>
                25+
              </Typography>
              <Typography variant="body2">Awards</Typography>
            </Paper>
          </motion.div>
        </Grid>

      </Grid>
    </Box>

  </Container>
</Box>

      {/* Testimonials Section */}
     <Grid container spacing={4}>
  {testimonials.map((testimonial, index) => (
    <Grid item xs={12} sm={6} md={6} key={index}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card 
          sx={{ 
            p: 2.5,   // 👈 thoda compact
            height: '100%', 
            position: 'relative', 
            bgcolor: alpha(colors.orange, 0.02),
            borderRadius: 3,
            transition: '0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: 4,
            }
          }}
        >
          <FormatQuoteIcon 
            sx={{ 
              fontSize: 50, 
              color: alpha(colors.orange, 0.2),
              position: 'absolute',
              top: 10,
              right: 15,
            }} 
          />

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar 
              src={testimonial.image} 
              sx={{ 
                width: 50, 
                height: 50, 
                mr: 2, 
                border: `2px solid ${colors.orange}` 
              }} 
            />
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                {testimonial.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {testimonial.childName}
              </Typography>
            </Box>
          </Box>

          <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 1 }} />

          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            "{testimonial.text}"
          </Typography>

        </Card>
      </motion.div>
    </Grid>
  ))}
</Grid>

      {/* CTA Section */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: '1.8rem', md: '3rem' } }}>
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