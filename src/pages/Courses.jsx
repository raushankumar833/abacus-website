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
  LinearProgress,
  useTheme,
  alpha,
  Paper,
  Stack,
  Avatar,
  Divider,
  IconButton,
  Modal,
  Fade,
  Backdrop,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
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

const Courses = () => {
  const [level, setLevel] = useState('all');
  const [openModal, setOpenModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

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

  const courses = [
    {
      id: 1,
      title: 'Basic Abacus Course',
      level: 'beginner',
      duration: '3 months',
      students: 1240,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1519457435734-28bd7148ac06?ixlib=rb-4.0.3',
      images: [
        'https://images.unsplash.com/photo-1519457435734-28bd7148ac06?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3',
      ],
      description: 'Perfect for beginners. Learn abacus basics and simple calculations. This course builds a strong foundation in mental math.',
      topics: ['Introduction to Abacus', 'Basic Addition', 'Basic Subtraction', 'Number Recognition', 'Simple Multiplication'],
      benefits: ['Improves concentration', 'Boosts confidence', 'Enhances memory'],
      color: colors.yellow,
      price: '₹2,999',
      certificate: true,
      projects: 5,
      videos: 24,
    },
    {
      id: 2,
      title: 'Intermediate Abacus Course',
      level: 'intermediate',
      duration: '4 months',
      students: 890,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3',
      images: [
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3',
      ],
      description: 'Advanced techniques for faster calculations. Master multiplication, division, and decimal operations with ease.',
      topics: ['Multiplication', 'Division', 'Decimal Operations', 'Speed Building', 'Mental Visualization'],
      benefits: ['Faster calculations', 'Better problem solving', 'Increased accuracy'],
      color: colors.orange,
      price: '₹4,999',
      certificate: true,
      projects: 8,
      videos: 36,
    },
    {
      id: 3,
      title: 'Advanced Abacus Course',
      level: 'advanced',
      duration: '6 months',
      students: 456,
      rating: 4.95,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3',
      images: [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3',
      ],
      description: 'Master level course for competitive excellence. Perfect for students preparing for olympiads and competitions.',
      topics: ['Complex Operations', 'Mental Visualization', 'Competition Training', 'Vedic Math Integration', 'Speed Math'],
      benefits: ['Competition ready', 'Advanced techniques', 'Problem solving mastery'],
      color: colors.pink,
      price: '₹7,999',
      certificate: true,
      projects: 12,
      videos: 48,
    },
    {
      id: 4,
      title: 'Teacher Training Program',
      level: 'professional',
      duration: '4 months',
      students: 234,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3',
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3',
      ],
      description: 'Become a certified abacus instructor. Complete training with teaching methodology and curriculum design.',
      topics: ['Teaching Methodology', 'Curriculum Design', 'Student Assessment', 'Class Management', 'Parent Communication'],
      benefits: ['Certified instructor', 'Placement assistance', 'Lifetime support'],
      color: colors.orange,
      price: '₹14,999',
      certificate: true,
      projects: 10,
      videos: 52,
    },
    {
      id: 5,
      title: 'Vedic Math with Abacus',
      level: 'advanced',
      duration: '5 months',
      students: 345,
      rating: 4.85,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3',
      images: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1519457435734-28bd7148ac06?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3',
      ],
      description: 'Combine ancient Vedic math techniques with modern abacus for super-fast calculations.',
      topics: ['Vedic Sutras', 'Speed Calculations', 'Square Roots', 'Cube Roots', 'Advanced Mental Math'],
      benefits: ['Lightning fast math', 'Competition advantage', 'Unique techniques'],
      color: colors.yellow,
      price: '₹6,999',
      certificate: true,
      projects: 10,
      videos: 42,
    },
    {
      id: 6,
      title: 'Summer Camp - Abacus Bootcamp',
      level: 'beginner',
      duration: '2 months',
      students: 567,
      rating: 4.75,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3',
      images: [
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3',
      ],
      description: 'Intensive summer program to master abacus fundamentals in just 2 months.',
      topics: ['Quick Start Abacus', 'Daily Practice Routines', 'Fun Math Games', 'Group Activities', 'Weekly Tests'],
      benefits: ['Fast track learning', 'Fun activities', 'Summer break productive'],
      color: colors.pink,
      price: '₹3,999',
      certificate: true,
      projects: 6,
      videos: 30,
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

  const filteredCourses = level === 'all' ? courses : courses.filter(c => c.level === level);

  const levelColors = {
    beginner: colors.yellow,
    intermediate: colors.orange,
    advanced: colors.pink,
    professional: colors.orange,
  };

  return (
    <>
      <Box>
        {/* Hero Section */}
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
              <Chip 
                label="📚 Explore Our Courses" 
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
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Choose the perfect course for your child's skill level and goals
              </Typography>
            </motion.div>
          </Container>
          
          {/* Decorative Circles */}
          <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: alpha(colors.yellow, 0.2) }} />
          <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 150, height: 150, borderRadius: '50%', bgcolor: alpha(colors.pink, 0.2) }} />
        </Box>

        <Container sx={{ py: 8 }}>
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
                <ToggleButton value="all">All Levels</ToggleButton>
                <ToggleButton value="beginner">Beginner</ToggleButton>
                <ToggleButton value="intermediate">Intermediate</ToggleButton>
                <ToggleButton value="advanced">Advanced</ToggleButton>
                <ToggleButton value="professional">Professional</ToggleButton>
              </ToggleButtonGroup>
            </Paper>
          </Box>

          {/* Course Count */}
          <Typography align="center" color="text.secondary" sx={{ mb: 4 }}>
            Showing {filteredCourses.length} courses
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
                      display: 'flex', 
                      flexDirection: { xs: 'column', sm: 'row' }, 
                      height: '100%',
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
                    {/* Level Badge */}
                    <Chip
                      label={course.level.toUpperCase()}
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        zIndex: 1,
                        bgcolor: levelColors[course.level],
                        color: 'white',
                        fontWeight: 700,
                      }}
                    />
                    
                    {/* Course Image with Hover Effect */}
                    <Box
                      sx={{
                        width: { xs: '100%', sm: 240 },
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
                          height: 240, 
                          objectFit: 'cover',
                          transition: 'transform 0.5s',
                          '&:hover': {
                            transform: 'scale(1.1)',
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
                          bgcolor: alpha(levelColors[course.level], 0.6),
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

                    <CardContent sx={{ flex: 1, p: 3 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: levelColors[course.level] }}>
                        {course.title}
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
                          label={`${course.students} students`} 
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
                        <Typography variant="h6" sx={{ fontWeight: 700, color: course.color, ml: 'auto' }}>
                          {course.price}
                        </Typography>
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {course.description}
                      </Typography>

                      <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                        What you'll learn:
                      </Typography>
                      <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {course.topics.slice(0, 3).map((topic, idx) => (
                          <Chip 
                            key={idx} 
                            label={topic} 
                            size="small" 
                            sx={{ 
                              bgcolor: alpha(course.color, 0.1),
                              color: course.color,
                              fontSize: '0.7rem',
                            }} 
                          />
                        ))}
                        {course.topics.length > 3 && (
                          <Chip 
                            label={`+${course.topics.length - 3} more`} 
                            size="small" 
                            variant="outlined"
                          />
                        )}
                      </Box>

                      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                        <Button 
                          variant="contained" 
                          fullWidth
                          onClick={() => handleOpenModal(course)}
                          sx={{ 
                            bgcolor: course.color,
                            '&:hover': { bgcolor: course.color === colors.orange ? colors.orangeDark : course.color },
                          }}
                        >
                          Enroll Now
                        </Button>
                      </Stack>
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

        {/* Why Choose Us Section */}
        <Box sx={{ bgcolor: alpha(colors.pink, 0.05), py: 8 }}>
          <Container>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.pink }}>
              Why Choose Our Courses?
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
              What makes our courses special
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Avatar sx={{ bgcolor: colors.orange, width: 70, height: 70, mx: 'auto', mb: 2 }}>
                  <SchoolIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom>Expert Trainers</Typography>
                <Typography variant="body2" color="text.secondary">Learn from certified professionals</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Avatar sx={{ bgcolor: colors.yellow, width: 70, height: 70, mx: 'auto', mb: 2 }}>
                  <VideoLibraryIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom>Video Library</Typography>
                <Typography variant="body2" color="text.secondary">Access recorded sessions anytime</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Avatar sx={{ bgcolor: colors.pink, width: 70, height: 70, mx: 'auto', mb: 2 }}>
                  <AssignmentIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom>Practice Worksheets</Typography>
                <Typography variant="body2" color="text.secondary">100+ practice materials</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Avatar sx={{ bgcolor: colors.orange, width: 70, height: 70, mx: 'auto', mb: 2 }}>
                  <WorkspacePremiumIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom>Certification</Typography>
                <Typography variant="body2" color="text.secondary">Globally recognized certificate</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
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
                Not Sure Which Course to Choose?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Talk to our academic counselors for personalized guidance
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
                  Book Free Counseling
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    color: colors.orange, 
                    borderColor: colors.orange,
                    '&:hover': { bgcolor: alpha(colors.orange, 0.1) },
                  }}
                >
                  Take Skill Assessment
                </Button>
              </Stack>
            </Paper>
          </motion.div>
        </Container>
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
                {/* Modal Image Gallery */}
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src={selectedCourse.images[0]}
                    alt={selectedCourse.title}
                    sx={{ width: '100%', height: 300, objectFit: 'cover' }}
                  />
                  <Chip
                    label={selectedCourse.level.toUpperCase()}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      bgcolor: levelColors[selectedCourse.level],
                      color: 'white',
                      fontWeight: 700,
                    }}
                  />
                </Box>

                <Box sx={{ p: 3 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: selectedCourse.color }}>
                    {selectedCourse.title}
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                    <Chip icon={<AccessTimeIcon />} label={selectedCourse.duration} />
                    <Chip icon={<GroupIcon />} label={`${selectedCourse.students}+ students`} />
                    <Chip icon={<EmojiEventsIcon />} label={selectedCourse.certificate ? "Certificate Included" : "Certificate"} />
                    <Chip icon={<VideoLibraryIcon />} label={`${selectedCourse.videos} videos`} />
                    <Chip icon={<AssignmentIcon />} label={`${selectedCourse.projects} projects`} />
                  </Stack>

                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Course Description
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary">
                    {selectedCourse.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
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

                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Course Benefits
                  </Typography>
                  <Grid container spacing={1} sx={{ mb: 3 }}>
                    {selectedCourse.benefits.map((benefit, idx) => (
                      <Grid item xs={12} sm={4} key={idx}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CheckCircleIcon sx={{ color: selectedCourse.color, fontSize: 20 }} />
                          <Typography variant="body2">{benefit}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: selectedCourse.color }}>
                        {selectedCourse.price}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">One-time payment</Typography>
                    </Box>
                    <Button
                      variant="contained"
                      size="large"
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
    </>
  );
};

export default Courses;