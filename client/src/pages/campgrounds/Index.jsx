import React from 'react';
import Campground from '../../components/Campground';
import { useLoaderData } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Index() {
  const campgrounds = useLoaderData();
  return (
    <>
    <Typography component="h1" variant="h4" sx={{mb:3}}>All Campgrounds</Typography>
    <Grid container 
      rowSpacing={1} 
      columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
      alignItems="center"
      justifyContent="center">
        {campgrounds.map(campground => 
          <Campground key={campground.id} campground={campground} />
        )}
    </Grid>
    
    </>
  )
}

export default Index;