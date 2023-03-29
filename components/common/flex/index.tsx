'use client';
import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

const FlexCenter = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItem: 'center',
        height: 'inherit',
      }}
    >
      {children}
    </Box>
  );
};

export default FlexCenter;
