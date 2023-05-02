import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

const Footerbar = () => {
  const linkGroups = [
    {
      title: 'Shop',
      links: ['Devices', 'Apps & Games', 'Movies & TV', 'Music'],
    },
    {
      title: 'Account',
      links: ['My subscriptions', 'Redeem', 'Buy gift card', 'My wishlist', 'My Play activity'],
    },
    {
      title: 'About',
      links: ['Contact us', 'Careers', 'Press', 'Blog', 'Privacy'],
    },
  ];

  return (
    <Box sx={{ bgcolor: '#202124', color: '#ffffff', py: 4 }}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between">
          {linkGroups.map((group, index) => (
            <Box key={index}>
              <Typography variant="subtitle1" fontWeight="bold">
                {group.title}
              </Typography>
              {group.links.map((link, linkIndex) => (
                <Typography key={linkIndex} variant="body2">
                  <Link href="#" color="inherit" underline="hover">
                    {link}
                  </Link>
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
        <Box my={4}>
          <Divider light />
        </Box>
      </Container>
    </Box>
  );
};

export default Footerbar;
