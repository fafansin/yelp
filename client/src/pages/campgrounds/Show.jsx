import React from 'react';
import { Link, useNavigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Show() {
  const campground = useLoaderData()
  const navigate = useNavigate();

  async function handleDelete(e){
    try{
      const ref = await axios.delete(`/api/deleteCampground/${campground.id}`)
      if(ref.data.success){
        navigate('/')
      }else{
        alert("Error Removing this campground FROM API");  
      }
    }catch(e){
      alert("Error Removing this campground");
      console.log(e);
    }
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