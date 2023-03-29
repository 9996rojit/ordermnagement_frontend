'use client';

import { Button, FlexCenter, Input } from '@/components';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { blockChain } from '@/config/image';
import { useForm, Controller } from 'react-hook-form';

const LoginScreen = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contact_number: '',
      password: '',
    },
  });

  const submit = (data: any) => {
    console.log(data);
  };

  return (
    <FlexCenter>
      <Box sx={{ flex: 1, margin: 'auto' }}>
        <form
          onSubmit={handleSubmit(submit)}
          style={{ width: '60%', margin: '0 auto' }}
        >
          <Box sx={{ paddingBottom: '1.5rem' }}>
            <Typography variant="h3" component="div">
              Login
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: '2rem' }}>
            <Controller
              name="contact_number"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  placeholder="please enter your contact number"
                  label="Contact Number"
                  error={false}
                  required={false}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Box>
          <Box sx={{ paddingBottom: '2rem' }}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="please enter your password"
                  label="Password"
                  error={false}
                  required={false}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Box>

          <Box sx={{ float: 'right', paddingBottom: '1rem' }}>
            <Typography component="h6" variant="subtitle1">
              Forget Password ?
            </Typography>
          </Box>

          <Button
            text={'Login'}
            type="submit"
            variant="contained"
            fullWidth
            size="large"
          />
        </form>
      </Box>
      <Box sx={{ flex: 1, margin: 'auto' }}>
        <Image alt="image" src={blockChain} />
      </Box>
    </FlexCenter>
  );
};

export default LoginScreen;
