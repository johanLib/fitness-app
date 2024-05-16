import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/gym.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' }, display: {lg: 'block', sm: 'flex'}, flexDirection: 'column', alignItems: 'center' }} position="relative" p="20px">
    <Typography sx={{mt: {lg: '-117px', xs: '10px'}}} color="#FF2625" fontWeight="600" fontSize="26px">Welcome to ZenFit</Typography>
    <Typography sx={{
      fontSize: { lg: '44px', xs: '40px' },
      background: 'linear-gradient(358deg, #C40C0C 20%, #FF6500 50%, #FFC100);',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    }} fontWeight={700} mb="23px" mt="30px">
      Find Your Balance, <br />
      Achieve Your Zen
    </Typography>
    <Typography sx={{textAlign: {lg: 'left', xs: 'center'}}} fontSize="22px" lineHeight="35px" width="500px">
      Discover tailored workouts designed to align your
      body, mind, and spirit.
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '17px', textTransform: 'none', color: 'white', borderRadius: '4px', transition: 'background-color 0.3s' }} onMouseEnter={e => e.target.style.backgroundColor = '#FF5555'} onMouseLeave={e => e.target.style.backgroundColor = '#FF2625'}>Explore Workouts</a>
    </Stack>
    <Typography marginTop='10px' fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
