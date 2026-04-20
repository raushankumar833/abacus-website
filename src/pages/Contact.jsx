import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
  alpha,
  Chip,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Visit Us',
      details: ['123, Abacus Tower', 'Educational District', 'Mumbai - 400001', 'Maharashtra, India'],
      color: colors.orange,
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211', 'Mon-Sat: 9AM - 7PM'],
      color: colors.yellow,
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email Us',
      details: ['info@prokidz.com', 'support@prokidz.com', 'careers@prokidz.com'],
      color: colors.pink,
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 8PM', 'Saturday: 10AM - 5PM', 'Sunday: Closed'],
      color: colors.orange,
    },
  ];

  const faqs = [
    {
      question: 'What is the minimum age for abacus training?',
      answer: 'Children aged 5 years and above can start abacus training. We have special programs designed for different age groups.',
      color: colors.orange,
    },
    {
      question: 'Do you offer online classes?',
      answer: 'Yes, we offer both online and offline classes. Our online platform provides interactive sessions with real-time feedback.',
      color: colors.yellow,
    },
    {
      question: 'How long does it take to complete a level?',
      answer: 'Each level typically takes 3-4 months with regular practice. We offer flexible schedules to suit your convenience.',
      color: colors.pink,
    },
    {
      question: 'Is there a demo class available?',
      answer: 'Absolutely! We offer a free demo class for all new students. Contact us to schedule your demo session.',
      color: colors.orange,
    },
    {
      question: 'What is the fee structure?',
      answer: 'We have flexible pricing plans starting from ₹2,999/month. Contact us for detailed fee structure.',
      color: colors.yellow,
    },
    {
      question: 'Do you provide certificates?',
      answer: 'Yes, students receive internationally recognized certificates upon completion of each level.',
      color: colors.pink,
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you! We will get back to you soon.',
      severity: 'success',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box>
      {/* Hero Section with Orange Background */}
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
        <Container maxWidth="md">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Chip 
              label="📞 Get in Touch" 
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
              Contact Us
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                opacity: 0.95,
                maxWidth: 500,
                mx: 'auto',
              }}
            >
              We'd love to hear from you. Let's start a conversation!
            </Typography>
          </motion.div>
        </Container>
        
        {/* Decorative Circles */}
        <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: alpha(colors.yellow, 0.2) }} />
        <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 150, height: 150, borderRadius: '50%', bgcolor: alpha(colors.pink, 0.2) }} />
      </Box>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Card sx={{ p: { xs: 2, md: 4 }, borderRadius: 4, borderTop: `4px solid ${colors.orange}` }}>
                <Box sx={{ mb: 3 }}>
                  <Chip 
                    label="Send Message" 
                    sx={{ bgcolor: alpha(colors.orange, 0.1), color: colors.orange, mb: 2 }} 
                  />
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: colors.orange }}>
                    Send us a Message
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Have questions? We're here to help. Fill out the form and we'll respond within 24 hours.
                  </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                              borderColor: colors.orange,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                              borderColor: colors.pink,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                              borderColor: colors.yellow,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                              borderColor: colors.orange,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                              borderColor: colors.pink,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        fullWidth
                        sx={{ 
                          py: 1.5,
                          bgcolor: colors.orange,
                          '&:hover': { bgcolor: colors.orangeDark },
                          fontWeight: 700,
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 3 }}>
                <Chip 
                  label="Contact Info" 
                  sx={{ bgcolor: alpha(colors.pink, 0.1), color: colors.pink, mb: 2 }} 
                />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: colors.pink }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Multiple ways to reach us. Choose what works best for you.
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} key={index}>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card sx={{ p: 2, borderLeft: `4px solid ${info.color}`, borderRadius: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Box sx={{ color: info.color }}>{info.icon}</Box>
                          <Box>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                              {info.title}
                            </Typography>
                            {info.details.map((detail, idx) => (
                              <Typography key={idx} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                {detail}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              {/* WhatsApp Support */}
              <Card sx={{ mt: 3, p: 3, textAlign: 'center', bgcolor: alpha(colors.yellow, 0.1), borderRadius: 3 }}>
                <SupportAgentIcon sx={{ fontSize: 50, color: colors.orange, mb: 1 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  24/7 Support Available
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Chat with our support team anytime
                </Typography>
                <Button 
                  variant="contained" 
                  startIcon={<WhatsAppIcon />}
                  sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' } }}
                >
                  WhatsApp Us
                </Button>
              </Card>

              {/* Social Media Links */}
              <Card sx={{ mt: 3, p: 3, textAlign: 'center', borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colors.pink }}>
                  Connect With Us
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Follow us on social media for updates
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <IconButton
                    sx={{ bgcolor: alpha(colors.orange, 0.1), color: colors.orange, '&:hover': { bgcolor: colors.orange, color: 'white' } }}
                    href="https://facebook.com"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    sx={{ bgcolor: alpha(colors.pink, 0.1), color: colors.pink, '&:hover': { bgcolor: colors.pink, color: 'white' } }}
                    href="https://instagram.com"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    sx={{ bgcolor: alpha(colors.yellow, 0.1), color: colors.yellowDark, '&:hover': { bgcolor: colors.yellow, color: colors.orangeDark } }}
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    sx={{ bgcolor: alpha(colors.orange, 0.1), color: colors.orange, '&:hover': { bgcolor: colors.orange, color: 'white' } }}
                    href="https://youtube.com"
                    target="_blank"
                  >
                    <YouTubeIcon />
                  </IconButton>
                  <IconButton
                    sx={{ bgcolor: alpha(colors.pink, 0.1), color: colors.pink, '&:hover': { bgcolor: colors.pink, color: 'white' } }}
                    href="https://linkedin.com"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Map Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Box sx={{ mt: 8 }}>
            <Chip 
              label="Our Location" 
              sx={{ bgcolor: alpha(colors.orange, 0.1), color: colors.orange, mx: 'auto', display: 'table', mb: 2 }} 
            />
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.orange }}>
              Find Us Here
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
              Visit our main center in Mumbai
            </Typography>
            <Card sx={{ overflow: 'hidden', borderRadius: 4, boxShadow: 8 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.234567890123!2d72.877655!3d19.075984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da5edfd4f3e5a8c!2sMumbai!5e0!3m2!1sen!2sin!4v1645600000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Pro Kidz Location"
              ></iframe>
            </Card>
          </Box>
        </motion.div>
      </Container>

      {/* FAQ Section with Orange, Yellow, Pink Colors */}
      <Box sx={{ bgcolor: alpha(colors.pink, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Chip 
              label="FAQ" 
              sx={{ bgcolor: alpha(colors.yellow, 0.2), color: colors.yellowDark, mx: 'auto', display: 'table', mb: 2 }} 
            />
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: colors.pink }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
              Quick answers to common questions
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {faqs.map((faq, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ p: 3, height: '100%', borderLeft: `4px solid ${faq.color}`, borderRadius: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: faq.color }}>
                      {faq.question}
                    </Typography>
                    <Typography color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
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
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Book a free demo class and see the difference yourself
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
                  fontWeight: 700,
                }}
              >
                Book Free Demo
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  color: colors.orange, 
                  borderColor: colors.orange,
                  '&:hover': { bgcolor: alpha(colors.orange, 0.1) },
                  px: 4,
                }}
              >
                Call Now: +91 98765 43210
              </Button>
            </Stack>
          </Paper>
        </motion.div>
      </Container>

      {/* Snackbar for form submission */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;