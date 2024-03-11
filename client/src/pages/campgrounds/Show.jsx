import React, { useContext } from 'react';
import { Link, useNavigate, useLoaderData } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ACTION } from '../../hooks/useCampgroundReducer';
import { DispatchContext } from '../../contexts/CampgroundContext';

function Show() {
  const campground = useLoaderData()
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);

  async function handleDelete(e){
    e.preventDefault();
    await dispatch({type:ACTION.DELETE, payload:campground})
    navigate('/');
  }

  return (
    <Box px={{xs:0, sm:2, md:4}}>
      <Card>
        <CardMedia
          sx={{ height: 500 }}
          image={campground.image}
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
          <Button variant="contained" color="primary" component={Link} to={`/campgrounds/${campground && campground.id}/edit`}>Edit</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
          <Button variant="contained" color="grey" component={Link} to="/">Back</Button>
        </CardActions>
      </Card>
    </Box>
    
  )
}

export default Show