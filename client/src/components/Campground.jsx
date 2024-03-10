import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Campground({campground}) {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={campground.image || ''}
          title={campground.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {campground.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {campground.price} per night
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {campground.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {campground.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/campgrounds/${campground.id}`} size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Campground