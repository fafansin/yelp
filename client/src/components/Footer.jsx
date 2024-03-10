import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box component="footer" sx={{
      bgcolor: 'grey',
      display:"flex",
      padding:2,
      justifyContent:'center',
      marginTop:2

    }}>
      <Typography variant="h6">&copy; YelpCamp 2024</Typography>
    </Box>
  )
}

export default Footer