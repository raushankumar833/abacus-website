// components/LoginPage.jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  alpha,
  Snackbar,
  Alert,
} from '@mui/material';

const colors = {
  orange: '#FF6B35',
  darkOrange: '#E85D2C',
  gray: '#757575',
  white: '#FFFFFF',
};

const LoginPage = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Format message for WhatsApp
      const message = `*New Enrollment Inquiry*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `*Source:* Enroll Now Button%0A` +
        `*Date:* ${new Date().toLocaleString()}`;
      
      // Replace with your WhatsApp number (include country code without '+')
      const whatsappNumber = '919999999999'; // Change this to your number
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Thank you! Redirecting to WhatsApp...',
        severity: 'success'
      });
      
      // Clear form and close dialog
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '' });
        onClose();
      }, 1000);
      
      // Redirect to WhatsApp after a short delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
    onClose();
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <>
      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 2,
          }
        }}
      >
        <DialogTitle sx={{ 
          textAlign: 'center', 
          color: colors.orange,
          fontWeight: 700,
          fontSize: '1.75rem',
          pb: 1
        }}>
          Enroll Now
        </DialogTitle>
        <DialogTitle sx={{ 
          textAlign: 'center', 
          color: colors.gray,
          fontSize: '0.9rem',
          fontWeight: 500,
          pt: 0
        }}>
          Fill in your details to get started
        </DialogTitle>
        
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
              required
              sx={{ mb: 2 }}
              variant="outlined"
              placeholder="Enter your full name"
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              required
              sx={{ mb: 2 }}
              variant="outlined"
              placeholder="you@example.com"
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={!!errors.phone}
              helperText={errors.phone}
              required
              placeholder="999999999"
              variant="outlined"
              inputProps={{ maxLength: 10 }}
            />
          </DialogContent>
          
          <DialogActions sx={{ p: 3, pt: 0, flexDirection: 'column', gap: 1 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                bgcolor: colors.orange,
                color: colors.white,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 700,
                '&:hover': {
                  bgcolor: colors.darkOrange,
                },
              }}
            >
              Submit & Continue to WhatsApp
            </Button>
            <Button
              fullWidth
              onClick={handleClose}
              sx={{
                color: colors.gray,
                '&:hover': {
                  bgcolor: alpha(colors.gray, 0.1),
                },
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Snackbar for success message */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginPage;