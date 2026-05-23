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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// ==================== IMAGE IMPORTS ====================
import ourStoryImg from '../assets/13.png';
import interactiveLearningImg from '../assets/10.png';
import certifiedTrainersImg from '../assets/33.png';
import curriculumImg from '../assets/7.png';
import studentSuccessImg from '../assets/12.png';
import visionImg from '../assets/31.png';
import missionImg from '../assets/32.png';
import coreValuesImg from '../assets/16.png';
import ctaImage from '../assets/17.png';

// Team Member Images
import drRajeshImg from '../assets/img1.png';
import priyaSharmaImg from '../assets/img3.png';
import amitPatelImg from '../assets/img2.png';
import nehaGuptaImg from '../assets/img4.png';
import sureshReddyImg from '../assets/img5.png';
import kavitaSinghImg from '../assets/img6.png';

const About = () => {
  const theme = useTheme();

  const colors = {
    orange: '#FF6B35',
    orangeLight: '#FF8A5C',
    orangeDark: '#E55A2B',
    yellow: '#FFD700',
    yellowLight: '#FFE44D',
    yellowDark: '#F4B400',
    pink: '#FF69B4',
    pinkLight: '#FFB6C1',
    pinkDark: '#FF1493',
  };

  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & Head Coach',
      experience: '20+ years',
      image: drRajeshImg,
      qualification: 'Ph.D. in Mathematics Education',
      achievements: 'National Award Winner 2023',
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Abacus Trainer',
      experience: '12+ years',
      image: priyaSharmaImg,
      qualification: 'Certified Master Trainer',
      achievements: 'Best Trainer Award 2022',
    },
    {
      name: 'Amit Patel',
      role: 'Curriculum Developer',
      experience: '15+ years',
      image: amitPatelImg,
      qualification: 'M.Sc. in Child Psychology',
      achievements: 'Innovation Excellence Award',
    },
    {
      name: 'Neha Gupta',
      role: 'Student Success Manager',
      experience: '8+ years',
      image: nehaGuptaImg,
      qualification: 'B.Ed. with Specialization',
      achievements: 'Top Performer 2023',
    },
    {
      name: 'Suresh Reddy',
      role: 'Abacus Specialist',
      experience: '10+ years',
      image: sureshReddyImg,
      qualification: 'Certified Abacus Trainer',
      achievements: 'Gold Medalist',
    },
    {
      name: 'Kavita Singh',
      role: 'Child Psychologist',
      experience: '14+ years',
      image: kavitaSinghImg,
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



  const imageSections = [
    {
      title: 'Interactive Learning Environment',
      description: 'Our classrooms are designed to foster engagement and active participation. Each session combines hands-on abacus practice with digital tools to create a dynamic learning experience that keeps students motivated and excited.',
      image: interactiveLearningImg,
      alt: 'Students learning with abacus',
      reverse: false,
    },
    {
      title: 'Certified & Experienced Trainers',
      description: 'Our instructors undergo rigorous training and certification processes. With years of experience in child education and abacus methodologies, they provide personalized guidance to ensure every student reaches their full potential.',
      image: certifiedTrainersImg,
      alt: 'Teacher helping student',
      reverse: true,
    },
    {
      title: 'Proven Curriculum & Methodology',
      description: 'Developed by education experts, our curriculum follows a structured progression from basics to advanced mental math. Regular assessments and adaptive learning paths ensure steady improvement and concept mastery.',
      image: curriculumImg,
      alt: 'Educational materials',
      reverse: false,
    },
    {
      title: 'Celebrating Student Success',
      description: 'We believe in recognizing achievements at every step. From weekly progress badges to annual award ceremonies, we celebrate the hard work and dedication of our students, building confidence and encouraging excellence.',
      image: studentSuccessImg,
      alt: 'Happy students celebrating',
      reverse: true,
    },
  ];

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* Hero Section - Full Width */}
      <Box
        sx={{
          bgcolor: colors.orange,
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2, py: { xs: 6, md: 0 }, px: { xs: 2, sm: 3, md: 4 } }}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Chip 
              icon={<StarIcon />} 
              label="10+ Years of Excellence" 
              sx={{ 
                bgcolor: colors.yellow, 
                color: colors.orangeDark,
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                py: { xs: 1, md: 2 },
              }} 
            />
            <Typography 
              variant="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              About Pro Kidz
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                opacity: 0.95,
                maxWidth: 700,
                mx: 'auto',
                mb: 3,
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
              }}
            >
              Empowering Young Minds Since 2014
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap' }}>
              <Chip label="🏆 Award Winning" sx={{ bgcolor: colors.yellow, color: colors.orangeDark, px: 1 }} />
              <Chip label="⭐ Trusted by 10,000+" sx={{ bgcolor: colors.pink, color: 'white', px: 1 }} />
              <Chip label="📚 Certified Courses" sx={{ bgcolor: 'white', color: colors.orange, px: 1 }} />
            </Box>
          </motion.div>
        </Container>
        
        {/* Decorative Circles */}
        <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: colors.yellow, opacity: 0.2 }} />
        <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 150, height: 150, borderRadius: '50%', bgcolor: colors.pink, opacity: 0.2 }} />
      </Box>

      {/* Our Story Section - Full Width with xl container */}
 <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 3, md: 4 } }}>
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
    {/* Text Section - 60% */}
    <Box sx={{ width: { xs: '100%', md: '60%' } }}>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Chip label="Our Journey" sx={{ bgcolor: colors.orange, color: 'white', mb: 2, fontWeight: 600 }} />
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: colors.orange, fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' } }}>
          Our Story
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1rem', lg: '1.05rem' }, lineHeight: 1.7, mb: 2 }}>
          Founded in 2014, Pro Kidz started with a simple mission - to make mathematics enjoyable and accessible for every child. What began as a small training center with just 20 students has now grown into one of India's leading abacus education providers.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1rem', lg: '1.05rem' }, lineHeight: 1.7, mb: 2 }}>
          Over the past decade, we have developed a unique teaching methodology that combines traditional abacus techniques with modern cognitive science. Our approach has helped thousands of children improve their mental math abilities, concentration, and overall academic performance.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1rem', lg: '1.05rem' }, lineHeight: 1.7 }}>
          Today, we take pride in our network of certified trainers, comprehensive curriculum, and the success stories of our students who have excelled not just in mathematics, but in all areas of their academic and personal lives.
        </Typography>
        <Button variant="contained" sx={{ mt: 3, bgcolor: colors.orange, '&:hover': { bgcolor: colors.orangeDark } }} endIcon={<ArrowForwardIcon />}>
          Read More About Us
        </Button>
      </motion.div>
    </Box>

    {/* Image Section - 40% */}
    <Box sx={{ width: { xs: '100%', md: '40%' } }}>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Box
          component="img"
          src={ourStoryImg}
          alt="Our Journey"
          sx={{
            width: '100%',
            height: { xs: '250px', sm: '300px', md: '400px' },
            objectFit: 'cover',
            borderRadius: 4,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.02)' },
          }}
        />
      </motion.div>
    </Box>
  </Box>
</Container>
{imageSections.map((section, idx) => (
  <Box key={idx} sx={{ bgcolor: idx % 2 === 0 ? 'white' : alpha(colors.orange, 0.03), py: { xs: 6, md: 10 } }}>
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: section.reverse ? 'row-reverse' : 'row' }, 
        gap: 4, 
        alignItems: 'center' 
      }}>
        {/* Image Section - 40% */}
        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
          <motion.div
            initial={{ x: section.reverse ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box
              component="img"
              src={section.image}
              alt={section.alt}
              sx={{
                width: '100%',
                height: { xs: '250px', sm: '300px', md: '350px', lg: '400px' },
                objectFit: 'cover',
                borderRadius: 4,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.02)' },
              }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755973927d7?ixlib=rb-4.0.3';
              }}
            />
          </motion.div>
        </Box>
        
        {/* Text Section - 60% */}
        <Box sx={{ width: { xs: '100%', md: '60%' } }}>
          <motion.div
            initial={{ x: section.reverse ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: colors.orange, 
                fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem', lg: '2.2rem' } 
              }}
            >
              {section.title}
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                fontSize: { xs: '0.95rem', md: '1rem', lg: '1.05rem' }, 
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              {section.description}
            </Typography>
            <Button 
              variant="text" 
              sx={{ 
                mt: 1, 
                color: colors.orange, 
                fontSize: '0.95rem',
                '&:hover': { bgcolor: alpha(colors.orange, 0.1) },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Container>
  </Box>
))}

    

      {/* Mission & Vision - Full Width */}
     
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 3, md: 4 } }}>
  <Grid container spacing={{ xs: 4, md: 6, lg: 8 }}>
    {/* Vision Card - Text Left, Image Right (50% - 50%) */}
    <Grid item xs={12} md={6}>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ 
          height: '100%', 
          overflow: 'hidden', 
          borderRadius: 4, 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
        }}>
          {/* Text Content - Left Side - 50% */}
          <Box sx={{ 
            flex: '0 0 50%',
            p: { xs: 3, sm: 4, md: 4 }, 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <VisionIcon sx={{ fontSize: { xs: 50, sm: 60, md: 55 }, color: colors.orange, mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: colors.orange, fontSize: { xs: '1.6rem', sm: '1.8rem', md: '1.8rem', lg: '2rem' } }}>
              Our Vision
            </Typography>
           <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', md: '0.9rem', lg: '1rem' }, lineHeight: 1.6 }}>
  To create a world where every child discovers the joy of mathematics and 
  develops the mental agility to excel in all aspects of life. We envision 
  becoming the global leader in abacus education, reaching millions of young 
  minds across the world. Our vision is to transform traditional math learning 
  into an exciting journey of discovery, where children not only master calculations 
  but also develop critical thinking, problem-solving skills, and unwavering 
  self-confidence that stays with them forever.
</Typography>
          </Box>
          
          {/* Image - Right Side - 50% */}
          <Box sx={{ flex: '0 0 50%', height: { xs: 200, md: 'auto' } }}>
            <Box
              component="img"
              src={visionImg}
              alt="Vision"
              sx={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                minHeight: { md: 280 },
              }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755973927d7?ixlib=rb-4.0.3';
              }}
            />
          </Box>
        </Card>
      </motion.div>
    </Grid>

    {/* Mission Card - Text Left, Image Right (50% - 50%) */}
    <Grid item xs={12} md={6}>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card sx={{ 
          height: '100%', 
          overflow: 'hidden', 
          borderRadius: 4, 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
        }}>
          {/* Text Content - Left Side - 50% */}
          <Box sx={{ 
            flex: '0 0 50%',
            p: { xs: 3, sm: 4, md: 4 }, 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <TrackChangesIcon sx={{ fontSize: { xs: 50, sm: 60, md: 55 }, color: colors.pink, mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: colors.pink, fontSize: { xs: '1.6rem', sm: '1.8rem', md: '1.8rem', lg: '2rem' } }}>
              Our Mission
            </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', md: '0.9rem', lg: '1rem' }, lineHeight: 1.6 }}>
  To provide world-class abacus education through innovative teaching methods, 
  expert trainers, and a supportive learning environment that nurtures each 
  child's unique potential. We are committed to making mathematics fun, engaging, 
  and accessible for every child, regardless of their learning pace or background. 
  Our mission is to build confidence, enhance concentration, and develop lifelong 
  mathematical skills that will benefit children in all areas of their academic 
  and personal lives.
</Typography>
          </Box>
          
          {/* Image - Right Side - 50% */}
          <Box sx={{ flex: '0 0 50%', height: { xs: 200, md: 'auto' } }}>
            <Box
              component="img"
              src={missionImg}
              alt="Mission"
              sx={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                minHeight: { md: 280 },
              }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3';
              }}
            />
          </Box>
        </Card>
      </motion.div>
    </Grid>
  </Grid>
</Container>
      

      {/* Achievements Section - Full Width */}
     <Box sx={{ bgcolor: alpha(colors.yellow, 0.1), py: { xs: 6, md: 10 } }}>
  <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
    <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.orange, fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' } }}>
      Our Achievements
    </Typography>
    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, fontSize: { xs: '1rem', md: '1.1rem', lg: '1.25rem' } }}>
      Numbers that speak for themselves
    </Typography>
    
    {/* Flexbox layout with fixed width cards */}
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      flexWrap: 'wrap', 
      gap: 3,
    }}>
      {achievements.map((item, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          style={{ width: 220 }}
        >
          <Card sx={{ 
            textAlign: 'center', 
            p: { xs: 2, sm: 3, md: 3 }, 
            width: 220,
            minWidth: 220,
            maxWidth: 220,
            height: 240,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: `4px solid ${item.color}`, 
            transition: 'transform 0.3s', 
            '&:hover': { transform: 'translateY(-5px)' },
            borderRadius: 3,
          }}>
            <Box sx={{ color: item.color, fontSize: { xs: 44, sm: 48, md: 52 }, mb: 1.5 }}>
              {item.icon}
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color: item.color, fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' } }}>
              {item.number}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' }, textAlign: 'center', px: 1 }}>
              {item.label}
            </Typography>
          </Card>
        </motion.div>
      ))}
    </Box>
  </Container>
</Box>

      {/* Core Values - Full Width */}
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 3, md: 4 } }}>
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
    {/* Image - Left Side - 30% width */}
    <Box sx={{ width: { xs: '100%', md: '30%' } }}>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Box
          component="img"
          src={coreValuesImg}
          alt="Our Core Values"
          sx={{
            width: '100%',
            height: { xs: 'auto', md: '400px' },
            objectFit: 'cover',
            borderRadius: 4,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.02)' },
          }}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3';
          }}
        />
      </motion.div>
    </Box>

    {/* Text Content - Right Side - 70% width */}
    <Box sx={{ width: { xs: '100%', md: '70%' } }}>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Box sx={{ mb: 3 }}>
          <Chip label="Our Principles" sx={{ bgcolor: colors.pink, color: 'white', mb: 2, fontWeight: 600 }} />
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              color: colors.pink, 
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem', lg: '2.5rem' } 
            }}
          >
            Our Core Values
          </Typography>
        </Box>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ 
            mb: 4, 
            fontSize: { xs: '0.95rem', md: '1rem', lg: '1.05rem' },
            lineHeight: 1.5,
          }}
        >
          The principles that guide us every day
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 2, md: 4.5 }}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
  sx={{ 
    textAlign: 'center', 
    p: { xs: 1.5, sm: 2, md: 2.5 }, 
    width: { xs: '100%', sm: 220, md: 240, lg: 280 },
    minWidth: { xs: '100%', sm: 200, md: 220 },
    maxWidth: { xs: '100%', sm: 240, md: 260, lg: 280 },
    height: '100%',
    minHeight: { xs: 170, sm: 180, md: 180 },
    transition: 'transform 0.3s', 
    '&:hover': { transform: 'translateY(-3px)', boxShadow: 4 },
    bgcolor: alpha(value.color, 0.05),
    borderTop: `3px solid ${value.color}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    mx: 'auto',
  }}
>
  <Box sx={{ color: value.color, fontSize: { xs: 35, sm: 38, md: 40 }, mb: 0.5 }}>
    {value.icon}
  </Box>
  <Typography 
    variant="subtitle1" 
    gutterBottom 
    sx={{ 
      fontWeight: 600, 
      fontSize: { xs: '0.9rem', md: '0.95rem', lg: '1rem' },
      color: value.color,
    }}
  >
    {value.title}
  </Typography>
  <Typography 
    color="text.secondary" 
    sx={{ fontSize: { xs: '0.7rem', md: '0.75rem', lg: '0.8rem' } }}
  >
    {value.description}
  </Typography>
</Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  </Box>
</Container>

    

      {/* CTA Section - Full Width */}
   {/* CTA Section - Simple Clean */}
<Container maxWidth="lg" sx={{bgcolor: alpha(colors.orange, 0.1), py: { xs: 6, sm: 8, md: 8 },borderRadius:"20px" }}>
  <Grid container spacing={8} alignItems="center" justifyContent="center">
    
    {/* Left Side - Image */}
    <Grid item xs={12} md={5}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Box
          component="img"
          src={ctaImage}
          alt="Train Your Brain"
          sx={{
            width: '100%',
            maxWidth: 300,
            height: 'auto',
            mx: 'auto',
            display: 'block',
          }}
          onError={(e) => {
            e.target.src = 'https://cdn-icons-png.flaticon.com/512/3037/3037653.png';
          }}
        />
      </motion.div>
    </Grid>

    {/* Right Side - Content */}
    <Grid item xs={12} md={7}>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Box>
          {/* Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              color: colors.orange,
              mb: 1,
            }}
          >
            TRAIN YOUR BRAIN
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
              color: colors.orangeDark,
              mb: 3,
            }}
          >
            THE ABACUS WAY!
          </Typography>
          
          {/* Benefits */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
            {['Better Focus', 'Fast Calculations', 'Sharp Memory', 'High Confidence'].map((item, i) => (
              <Typography
                key={i}
                sx={{
                  color: colors.gray,
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                ✓ {item}
              </Typography>
            ))}
          </Box>
          
          {/* Tagline */}
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              color: colors.orange,
              mb: 4,
              letterSpacing: 1,
            }}
          >
            BUILD SKILLS. BUILD CONFIDENCE. BUILD FUTURE!
          </Typography>
          
          {/* Buttons */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: colors.orange,
                color: colors.white,
                px: 4,
                py: 1,
                fontWeight: 700,
                borderRadius: 2,
                '&:hover': { bgcolor: colors.orangeDark },
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
                px: 4,
                py: 1,
                fontWeight: 700,
                borderRadius: 2,
                '&:hover': { bgcolor: alpha(colors.orange, 0.1) },
              }}
            >
              Book a Demo
            </Button>
          </Stack>
        </Box>
      </motion.div>
    </Grid>
  </Grid>
</Container>
    </Box>
  );
};

export default About;