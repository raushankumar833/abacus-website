import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
  Chip,
  Divider,
  useTheme,
  alpha,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HistoryIcon from '@mui/icons-material/History';
import VisionIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TimelineIcon from '@mui/icons-material/Timeline';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const About = () => {
  const theme = useTheme();

  // Brand Colors
  const colors = {
    orange: '#FF6B35',
    orangeLight: '#FF8A5C',
    orangeDark: '#E55A2B',
    yellow: '#FFD700',
    yellowLight: '#FFE44D',
    pink: '#FF69B4',
    pinkLight: '#FFB6C1',
    pinkDark: '#FF1493',
  };

  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & Head Coach',
      experience: '20+ years',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      qualification: 'Ph.D. in Mathematics Education',
      achievements: 'National Award Winner 2023',
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Abacus Trainer',
      experience: '12+ years',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      qualification: 'Certified Master Trainer',
      achievements: 'Best Trainer Award 2022',
    },
    {
      name: 'Amit Patel',
      role: 'Curriculum Developer',
      experience: '15+ years',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      qualification: 'M.Sc. in Child Psychology',
      achievements: 'Innovation Excellence Award',
    },
    {
      name: 'Neha Gupta',
      role: 'Student Success Manager',
      experience: '8+ years',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      qualification: 'B.Ed. with Specialization',
      achievements: 'Top Performer 2023',
    },
    {
      name: 'Suresh Reddy',
      role: 'Abacus Specialist',
      experience: '10+ years',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      qualification: 'Certified Abacus Trainer',
      achievements: 'Gold Medalist',
    },
    {
      name: 'Kavita Singh',
      role: 'Child Psychologist',
      experience: '14+ years',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      qualification: 'Ph.D. Child Psychology',
      achievements: 'Published Author',
    },
  ];

  const achievements = [
    { icon: <EmojiEventsIcon />, number: '50+', label: 'National Awards', color: colors.orange },
    { icon: <SchoolIcon />, number: '100+', label: 'Partner Schools', color: colors.yellow },
    { icon: <GroupsIcon />, number: '10,000+', label: 'Students Trained', color: colors.pink },
    { icon: <WorkspacePremiumIcon />, number: '98%', label: 'Success Rate', color: colors.orange },
    { icon: <MilitaryTechIcon />, number: '25+', label: 'Certifications', color: colors.yellow },
    { icon: <CelebrationIcon />, number: '500+', label: 'Events Conducted', color: colors.pink },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'Striving for the highest quality in education',
      icon: <VerifiedIcon />,
      color: colors.orange,
    },
    {
      title: 'Innovation',
      description: 'Modern teaching methods with traditional wisdom',
      icon: <LightbulbIcon />,
      color: colors.yellow,
    },
    {
      title: 'Care',
      description: 'Personalized attention to every student',
      icon: <FavoriteIcon />,
      color: colors.pink,
    },
    {
      title: 'Integrity',
      description: 'Honest and transparent practices',
      icon: <HistoryIcon />,
      color: colors.orange,
    },
    {
      title: 'Growth',
      description: 'Continuous improvement and learning',
      icon: <TrendingUpIcon />,
      color: colors.yellow,
    },
    {
      title: 'Quality',
      description: 'Premium education standards',
      icon: <WorkspacePremiumIcon />,
      color: colors.pink,
    },
  ];

  const milestones = [
    { year: '2010', title: 'Founded', description: 'Started with 20 students', icon: <SchoolIcon /> },
    { year: '2013', title: 'First Center', description: 'Opened first training center', icon: <MenuBookIcon /> },
    { year: '2016', title: '1000 Students', description: 'Reached 1000+ students', icon: <GroupsIcon /> },
    { year: '2019', title: 'National Award', description: 'Received excellence award', icon: <EmojiEventsIcon /> },
    { year: '2022', title: 'Online Platform', description: 'Launched digital learning', icon: <TimelineIcon /> },
    { year: '2024', title: '10,000+', description: '10,000+ happy students', icon: <CelebrationIcon /> },
  ];

  const testimonials = [
    {
      name: 'Sunita Mehta',
      childName: 'Riya Mehta, Grade 5',
      rating: 5,
      text: 'My daughter\'s mathematical ability has improved dramatically since joining Pro Kidz. Not only her calculation speed, but her overall confidence has grown tremendously.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'Rajiv Khanna',
      childName: 'Aryan Khanna, Grade 4',
      rating: 5,
      text: 'The best decision we made for our child. He went from hating math to winning school competitions! Amazing transformation.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      name: 'Meera Joshi',
      childName: 'Ananya Joshi, Grade 6',
      rating: 5,
      text: 'The teachers are incredibly supportive and the curriculum is well-structured. Highly recommended for every parent!',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
  ];

  return (
    <Box>
      {/* Hero Section with Orange Background */}
      <Box
        sx={{
          bgcolor: colors.orange,
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Chip 
              icon={<StarIcon />} 
              label="15+ Years of Excellence" 
              sx={{ 
                bgcolor: colors.yellow, 
                color: colors.orangeDark,
                fontWeight: 'bold',
                mb: 3,
                fontSize: '1rem',
                py: 2,
              }} 
            />
            <Typography 
              variant="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: 36, md: 52, lg: 64 },
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              About Pro Kidz
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                opacity: 0.95,
                maxWidth: 600,
                mx: 'auto',
                mb: 3,
              }}
            >
              Empowering Young Minds Since 2010
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Chip label="🏆 Award Winning" sx={{ bgcolor: colors.yellow, color: colors.orangeDark }} />
              <Chip label="⭐ Trusted by 10,000+" sx={{ bgcolor: colors.pink, color: 'white' }} />
              <Chip label="📚 Certified Courses" sx={{ bgcolor: 'white', color: colors.orange }} />
            </Box>
          </motion.div>
        </Container>
        
        {/* Decorative Circles */}
        <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: colors.yellow, opacity: 0.2 }} />
        <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 150, height: 150, borderRadius: '50%', bgcolor: colors.pink, opacity: 0.2 }} />
      </Box>

      {/* Our Story Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 3 }}>
                <Chip label="Our Journey" sx={{ bgcolor: colors.orange, color: 'white', mb: 2 }} />
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: colors.orange }}>
                  Our Story
                </Typography>
              </Box>
              <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                Founded in 2010, Pro Kidz started with a simple mission - to make mathematics 
                enjoyable and accessible for every child. What began as a small training center 
                with just 20 students has now grown into one of India's leading abacus education 
                providers.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                Over the past decade, we have developed a unique teaching methodology that combines 
                traditional abacus techniques with modern cognitive science. Our approach has helped 
                thousands of children improve their mental math abilities, concentration, and overall 
                academic performance.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                Today, we take pride in our network of certified trainers, comprehensive curriculum, 
                and the success stories of our students who have excelled not just in mathematics, 
                but in all areas of their academic and personal lives.
              </Typography>
              <Button 
                variant="contained" 
                sx={{ mt: 3, bgcolor: colors.orange, '&:hover': { bgcolor: colors.orangeDark } }}
              >
                Read More About Us →
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Card sx={{ overflow: 'hidden', borderRadius: 4, boxShadow: 8 }}>
                <CardMedia
                  component="img"
                  height="450"
                  image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
                  alt="Our Journey"
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Milestones Timeline */}
      <Box sx={{ bgcolor: alpha(colors.orange, 0.05), py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.orange }}>
            Our Milestones
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            A journey of excellence and growth
          </Typography>
          <Grid container spacing={3}>
            {milestones.map((milestone, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper 
                    sx={{ 
                      p: 3, 
                      textAlign: 'center',
                      borderTop: `4px solid ${index % 3 === 0 ? colors.orange : index % 3 === 1 ? colors.yellow : colors.pink}`,
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'translateY(-5px)' },
                    }}
                  >
                    <Box sx={{ fontSize: 48, color: index % 3 === 0 ? colors.orange : index % 3 === 1 ? colors.yellow : colors.pink, mb: 2 }}>
                      {milestone.icon}
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: colors.orange, mb: 1 }}>
                      {milestone.year}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {milestone.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {milestone.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision with Cards */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: '100%', p: 4, textAlign: 'center', bgcolor: alpha(colors.orange, 0.1), borderRadius: 4 }}>
                <VisionIcon sx={{ fontSize: 70, color: colors.orange, mb: 2 }} />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: colors.orange }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  To create a world where every child discovers the joy of mathematics and 
                  develops the mental agility to excel in all aspects of life. We envision 
                  becoming the global leader in abacus education.
                </Typography>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card sx={{ height: '100%', p: 4, textAlign: 'center', bgcolor: alpha(colors.pink, 0.1), borderRadius: 4 }}>
                <TrackChangesIcon sx={{ fontSize: 70, color: colors.pink, mb: 2 }} />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: colors.pink }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  To provide world-class abacus education through innovative teaching methods, 
                  expert trainers, and a supportive learning environment that nurtures each 
                  child's unique potential.
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Achievements Section */}
      <Box sx={{ bgcolor: alpha(colors.yellow, 0.1), py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.orange }}>
            Our Achievements
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Numbers that speak for themselves
          </Typography>
          <Grid container spacing={4}>
            {achievements.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card sx={{ textAlign: 'center', p: 3, borderBottom: `4px solid ${item.color}` }}>
                    <Box sx={{ color: item.color, fontSize: 50, mb: 2 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: item.color }}>
                      {item.number}
                    </Typography>
                    <Typography variant="h6">{item.label}</Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Core Values */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.pink }}>
          Our Core Values
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          The principles that guide us every day
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card sx={{ textAlign: 'center', p: 3, height: '100%', '&:hover': { boxShadow: 8 } }}>
                  <Box sx={{ color: value.color, fontSize: 54, mb: 2 }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {value.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ bgcolor: alpha(colors.pink, 0.05), py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.orange }}>
            Meet Our Expert Team
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Dedicated experts committed to your child's success
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card sx={{ textAlign: 'center', p: 3, height: '100%', borderRadius: 4 }}>
                    <Avatar
                      src={member.image}
                      sx={{ width: 130, height: 130, mx: 'auto', mb: 2, border: `4px solid ${colors.orange}` }}
                    />
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                      {member.name}
                    </Typography>
                    <Chip 
                      label={member.role} 
                      size="small" 
                      sx={{ bgcolor: colors.orange, color: 'white', mb: 1 }} 
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {member.qualification}
                    </Typography>
                    <Chip 
                      label={member.experience} 
                      size="small" 
                      variant="outlined"
                      sx={{ borderColor: colors.yellow, color: colors.orangeDark, mb: 1 }}
                    />
                    <Typography variant="caption" color="text.secondary" display="block">
                      🏆 {member.achievements}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.yellowDark }}>
          What Parents Say
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Hear from our happy families
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ p: 3, height: '100%', position: 'relative', bgcolor: alpha(colors.orange, 0.05) }}>
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
                  <Box sx={{ mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: colors.yellow, fontSize: 20 }} />
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                    "{testimonial.text}"
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: colors.orange, py: 8 }}>
        <Container maxWidth="md">
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
                Join the Pro Kidz Family!
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Give your child the gift of mathematical excellence
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
                  Start Free Trial
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
                  Book a Demo
                </Button>
              </Stack>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default About;