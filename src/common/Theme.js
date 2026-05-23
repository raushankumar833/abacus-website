// theme/theme.js
import { createTheme, alpha } from '@mui/material/styles';

// Modern Color Palette - Professional Kidz Theme (Custom Colors)
export const colors = {
  // Primary Brand Colors
  primaryBlue: '#023587',     // Deep Navy Blue
  darkBlue: '#012564',
  lightBlue: '#1a4fa3',
  pastelBlue: '#E8EDF5',
  
  // Secondary Brand Colors  
  vibrantPink: '#f942a0',     // Vibrant Pink
  darkPink: '#d62e7d',
  lightPink: '#ff77b5',
  pastelPink: '#FEF0F6',
  
  // Accent Colors
  softYellow: '#fec003',      // Warm Golden Yellow
  darkYellow: '#e0a800',
  lightYellow: '#ffd642',
  pastelYellow: '#FFF8E6',
  
  accentGreen: '#88d61c',     // Fresh Green
  darkGreen: '#6db514',
  lightGreen: '#a5e84a',
  pastelGreen: '#F2FCE6',
  
  // Neutral Colors
  white: '#FFFFFF',
  black: '#1A1A1A',
  gray: '#757575',
  lightGray: '#F8F9FA',
  darkGray: '#424242',
};

export const getTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: colors.primaryBlue,
        light: colors.lightBlue,
        dark: colors.darkBlue,
        contrastText: colors.white,
      },
      secondary: {
        main: colors.vibrantPink,
        light: colors.lightPink,
        dark: colors.darkPink,
        contrastText: colors.white,
      },
      info: {
        main: colors.softYellow,
        light: colors.lightYellow,
        dark: colors.darkYellow,
      },
      success: {
        main: colors.accentGreen,
        light: colors.lightGreen,
        dark: colors.darkGreen,
      },
      background: {
        default: colors.lightGray,
        paper: colors.white,
      },
      text: {
        primary: colors.black,
        secondary: colors.gray,
      },
    },
    typography: {
      fontFamily: '"Poppins", "Inter", "Segoe UI", "Roboto", sans-serif',
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontWeight: 700,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 30,
            padding: '10px 24px',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            transition: 'all 0.3s ease',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            fontWeight: 600,
          },
        },
      },
    },
  });
};

// Helper function for gradients
export const getGradient = (color1, color2, degree = 135) => {
  return `linear-gradient(${degree}deg, ${color1}, ${color2})`;
};

// Common styled components helper
export const getBgGradient = (color, opacity = 0.1) => {
  return `linear-gradient(135deg, ${alpha(color, opacity)}, ${alpha(color, opacity * 0.5)})`;
};