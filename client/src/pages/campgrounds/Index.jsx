import React from 'react';
import Campground from '../../components/Campground';
import { useLoaderData } from 'react-router-dom';
import Grid from '@mui/material/Grid';

function Index() {
  const campgrounds = useLoaderData();
  return (
    <div>
      <h1>All Campgrounds</h1>
      <Grid container 
        rowSpacing={1} 
        columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
        alignItems="center"
        justifyContent="center">
          {campgrounds.map(campground => <Grid item>
            <Campground key={campground.id} campground={campground} /></Grid>
          )}
      </Grid>
    </div>
  )
}

export default Index;