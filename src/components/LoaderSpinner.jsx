import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';

const LoaderSpinner = ({ message = "Loading..." }) => {
  const colors = {
    orange: '#FF6B35',
    yellow: '#FFD700',
    pink: '#FF69B4',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
      }}
    >
      <CircularProgress 
        size={60}
        thickness={4}
        sx={{
          color: colors.orange,
          mb: 2,
        }}
      />
      <Typography variant="h6" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default LoaderSpinner;