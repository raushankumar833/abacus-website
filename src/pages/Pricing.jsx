import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
  alpha,
  Paper,
  Avatar,
  Divider,
  Stack,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  Modal,
  Fade,
  Backdrop,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CloseIcon from '@mui/icons-material/Close';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

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

  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: { monthly: '₹2,999', yearly: '₹29,990' },
      originalPrice: { monthly: '₹4,999', yearly: '₹49,990' },
      period: 'month',
      features: [
        '2 classes per week',
        'Basic worksheets',
        'Weekly assessments',
        'Email support (24hr response)',
        'Access to student portal',
        'Basic progress reports',
        'Group learning environment',
      ],
      recommended: false,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3',
      color: colors.yellow,
      students: '5,000+',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Pro',
      price: { monthly: '₹4,999', yearly: '₹49,990' },
      originalPrice: { monthly: '₹7,999', yearly: '₹79,990' },
      period: 'month',
      features: [
        '4 classes per week',
        'Advanced worksheets',
        'Daily assessments',
        'Priority support (4hr response)',
        'Access to student portal',
        'Parent-teacher meetings',
        'Detailed progress reports',
        'Monthly competitions',
        'Video recordings access',
      ],
      recommended: true,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3',
      color: colors.orange,
      students: '15,000+',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Enterprise',
      price: { monthly: '₹9,999', yearly: '₹99,990' },
      originalPrice: { monthly: '₹14,999', yearly: '₹149,990' },
      period: 'month',
      features: [
        'Unlimited classes',
        'Personalized worksheets',
        '1-on-1 mentoring',
        '24/7 priority support',
        'Access to all resources',
        'Monthly competitions',
        'Certification exam included',
        'Lifetime access to materials',
        'Personal success coach',
        'Parent workshops included',
      ],
      recommended: false,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3',
      color: colors.pink,
      students: '2,000+',
      rating: 4.9,
    },
  ];

  const handleBillingChange = (event, newCycle) => {
    if (newCycle !== null) {
      setBillingCycle(newCycle);
    }
  };

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPlan(null);
  };

  return (
    <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${colors.orange}, ${colors.pink})`,
          color: 'white',
          py: { xs: 8, md: 12 },
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
              label="💰 Best Value Plans" 
              sx={{ 
                bgcolor: colors.yellow, 
                color: colors.orangeDark,
                mb: 3,
                fontWeight: 600,
                fontSize: '1rem',
                py: 2.5,
                px: 2,
              }} 
            />
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: 36, md: 48, lg: 56 },
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              Simple, Transparent Pricing
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                opacity: 0.95,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Choose the perfect plan for your child's success journey
            </Typography>
          </motion.div>
        </Container>
        
        {/* Decorative Circles */}
        <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: alpha(colors.yellow, 0.2) }} />
        <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 150, height: 150, borderRadius: '50%', bgcolor: alpha(colors.pink, 0.2) }} />
      </Box>

      <Container sx={{ py: 8, mt: -4 }}>
        {/* Billing Toggle */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Paper
            elevation={3}
            sx={{
              p: 0.5,
              bgcolor: 'white',
              borderRadius: 4,
            }}
          >
            <ToggleButtonGroup
              value={billingCycle}
              exclusive
              onChange={handleBillingChange}
              aria-label="billing cycle"
              sx={{
                '& .MuiToggleButton-root': {
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
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
              <ToggleButton value="monthly">Monthly Billing</ToggleButton>
              <ToggleButton value="yearly">
                Yearly Billing 
                <Chip 
                  label="Save 20%" 
                  size="small" 
                  sx={{ 
                    ml: 1, 
                    bgcolor: colors.yellow, 
                    color: colors.orangeDark,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                  }} 
                />
              </ToggleButton>
            </ToggleButtonGroup>
          </Paper>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={plan.id} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ width: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transform: plan.recommended ? { xs: 'scale(1)', md: 'scale(1.05)' } : 'none',
                    boxShadow: plan.recommended ? 8 : 3,
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: plan.recommended ? 'scale(1.08)' : 'scale(1.03)',
                      boxShadow: 12,
                    },
                  }}
                >
                  {/* Plan Image */}
                  <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                    <Box
                      component="img"
                      src={plan.image}
                      alt={plan.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${alpha(plan.color, 0.85)}, ${alpha(plan.color, 0.95)})`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                        {plan.name}
                      </Typography>
                    </Box>
                    {plan.recommended && (
                      <Chip
                        icon={<StarIcon sx={{ fontSize: 16 }} />}
                        label="Most Popular"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          bgcolor: colors.yellow,
                          color: colors.orangeDark,
                          fontWeight: 700,
                          zIndex: 1,
                          '& .MuiChip-icon': {
                            color: colors.orangeDark,
                          },
                        }}
                      />
                    )}
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    {/* Price */}
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 1 }}>
                        <Typography 
                          variant="h2" 
                          sx={{ 
                            fontWeight: 800, 
                            color: plan.color,
                            fontSize: { xs: 36, md: 42 },
                          }}
                        >
                          {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </Typography>
                      </Box>
                      {billingCycle === 'yearly' && (
                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through', mt: 0.5 }}>
                          Was {plan.originalPrice.yearly}
                        </Typography>
                      )}
                      <Chip 
                        label={`Save ${billingCycle === 'monthly' ? '40%' : '33%'}`}
                        size="small"
                        sx={{ mt: 1, bgcolor: alpha(plan.color, 0.1), color: plan.color, fontWeight: 600 }}
                      />
                    </Box>

                    {/* Stats */}
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: plan.color }}>
                          {plan.students}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">Active Students</Typography>
                      </Box>
                      <Divider orientation="vertical" flexItem />
                      <Box sx={{ textAlign: 'center' }}>
                        <Rating value={plan.rating} precision={0.1} readOnly size="small" sx={{ color: plan.color }} />
                        <Typography variant="caption" color="text.secondary" display="block">
                          {plan.rating} rating
                        </Typography>
                      </Box>
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    {/* Features List */}
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: plan.color }}>
                      What's Included:
                    </Typography>
                    <List dense disablePadding>
                      {plan.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 0.75 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckIcon sx={{ color: plan.color, fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature} 
                            primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>

                  <CardActions sx={{ p: 3, pt: 0, flexDirection: 'column', gap: 1.5 }}>
                    <Button
                      variant={plan.recommended ? 'contained' : 'outlined'}
                      fullWidth
                      size="large"
                      onClick={() => handleOpenModal(plan)}
                      sx={{
                        ...(plan.recommended && {
                          bgcolor: plan.color,
                          '&:hover': { bgcolor: plan.color === colors.orange ? colors.orangeDark : plan.color },
                        }),
                        ...(!plan.recommended && {
                          borderColor: plan.color,
                          color: plan.color,
                          '&:hover': { 
                            borderColor: plan.color,
                            bgcolor: alpha(plan.color, 0.1),
                          },
                        }),
                        fontWeight: 700,
                        py: 1.5,
                        borderRadius: 2,
                      }}
                    >
                      Get Started
                    </Button>
                    <Button 
                      size="small" 
                      color="inherit"
                      onClick={() => handleOpenModal(plan)}
                      sx={{ fontWeight: 600 }}
                    >
                      View Details →
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Compare Plans Section */}
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Chip 
            label="Compare Plans" 
            sx={{ bgcolor: alpha(colors.pink, 0.1), color: colors.pink, mx: 'auto', display: 'inline-flex', mb: 2, fontWeight: 600 }} 
          />
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, color: colors.orange }}>
            Not sure which plan to choose?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            We're here to help you find the perfect fit for your child's needs
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              bgcolor: colors.pink,
              '&:hover': { bgcolor: colors.pinkDark },
              px: 5,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 700,
            }}
          >
            Schedule a Free Consultation
          </Button>
        </Box>
      </Container>

      {/* Trust Badges */}
    <Box sx={{ bgcolor: alpha(colors.yellow, 0.08), py: 8 }}>
  <Container>
    <Grid container spacing={4} justifyContent="center">
      {[
        { icon: SchoolIcon, label: '10,000+ Students', desc: 'Trusted by families', color: colors.orange },
        { icon: EmojiEventsIcon, label: 'Award Winning', desc: 'Best online learning', color: colors.yellowDark },
        { icon: WorkspacePremiumIcon, label: 'Certified Courses', desc: 'Globally recognized', color: colors.pink },
        { icon: SupportAgentIcon, label: '24/7 Support', desc: 'Dedicated assistance', color: colors.orange },
      ].map((item, index) => (
        <Grid item xs={6} sm={3} key={index}>
          <Card
            sx={{
              height: '100%',
              textAlign: 'center',
              py: 3,
              px: 2,
              borderRadius: 4,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6,
              },
              bgcolor: 'white',
            }}
            elevation={2}
          >
            <item.icon sx={{ fontSize: 48, color: item.color, mb: 1.5 }} />
            <Typography variant="body1" fontWeight={700} gutterBottom>
              {item.label}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.desc}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

      {/* Modal for Plan Details */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
      >
        <Fade in={openModal}>
          <Paper sx={{ maxWidth: 550, width: '100%', p: 4, borderRadius: 4, position: 'relative', maxHeight: '90vh', overflow: 'auto' }}>
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
            >
              <CloseIcon />
            </IconButton>
            {selectedPlan && (
              <>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Box
                    component="img"
                    src={selectedPlan.image}
                    alt={selectedPlan.name}
                    sx={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 3, mb: 2 }}
                  />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: selectedPlan.color }}>
                    {selectedPlan.name} Plan
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: selectedPlan.color, mt: 1 }}>
                    {billingCycle === 'monthly' ? selectedPlan.price.monthly : selectedPlan.price.yearly}
                    <Typography component="span" variant="body2" color="text.secondary">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </Typography>
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <List>
                  {selectedPlan.features.map((feature, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: selectedPlan.color }} />
                      </ListItemIcon>
                      <ListItemText primary={feature} primaryTypographyProps={{ fontWeight: 500 }} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleCloseModal}
                  sx={{ 
                    mt: 3, 
                    bgcolor: selectedPlan.color, 
                    '&:hover': { bgcolor: selectedPlan.color === colors.orange ? colors.orangeDark : selectedPlan.color },
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 700,
                  }}
                >
                  Enroll Now
                </Button>
              </>
            )}
          </Paper>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Pricing;