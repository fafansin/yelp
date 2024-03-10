import React, { useState } from 'react';
import { Link, useNavigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Edit() {
  const [campground, setCampground] = useState(useLoaderData());
  const navigate = useNavigate();

  function handleChange(e){
    setCampground({...campground, [e.target.name]:e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault();
    try{
      const ref = await axios.put(`/api/updateCampground/${campground.id}`, {campground:campground});
      if(ref.data.success){
        navigate(`/campgrounds/${campground.id}`);
      }else{
        console.log('ERROR', ref);
      }
    }catch(e){
      console.log('ERROR', e);
    }
  }

  return (
    <>
      <Typography component="h1" variant="h4" className="text-center" sx={{pb:3}}>Edit Campground</Typography>
      <Paper sx={{p:3}}>
        <Stack spacing={2} component="form" className="needs-validation" onSubmit={handleSubmit}>
          <TextField size="small" name="title" id="title" label="Title" onChange={handleChange} value={campground && campground.title}/>
          <TextField size="small" name="location" id="location" label="Location" onChange={handleChange} value={campground && campground.location}/>
          <TextField size="small" name="image" id="location" label="Image" onChange={handleChange} value={campground && campground.image}/>
          <TextField size="small" name="price" id="price" label="Price"  type="number" onChange={handleChange} value={campground && campground.price}/>
          <TextField size="small" name="description" id="description" multiline maxRows={4} label="Description" onChange={handleChange} value={campground && campground.description}/>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" onClick={handleSubmit}>Save</Button>
            <Button variant="contained" color="grey" component={Link}to="/">Cancel</Button>
          </Stack>
        </Stack>
      </Paper>
    </>
  )
}

export default Edit
