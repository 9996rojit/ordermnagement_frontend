'use client';

import React from 'react';
import { Button, Box } from '@mui/material';

interface IBUTTONPROPS {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  endIcon?: React.ReactElement;
  fullWidth?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactElement;
  sx?: any;
  variant: 'contained' | 'outlined' | 'text';
}

const customButton = ({
  type = 'submit',
  variant = 'outlined',
  text = 'submit',
  startIcon,
  endIcon,
  fullWidth,
  href,
  size = 'medium',
  color = 'primary',
  disableRipple,
  disableFocusRipple,
  disableElevation,
  disabled,
}: IBUTTONPROPS) => {
  return (
    <Button
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      <Box>{text}</Box>
    </Button>
  );
};

export default customButton;
