import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ACTION } from '../../hooks/useCampgroundReducer';
import { DispatchContext } from '../../contexts/CampgroundContext';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
//

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function New() {
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();
  const [ campground, setCampground ] = useState({title:'', 
                                              location:'',
                                              image:'',
                                              price:'',
                                              description:''});
  

  function handleChange(e){
    setCampground({...campground, [e.target.name]:e.target.value})
  }
  
  async function handleSubmit(e){
    e.preventDefault();
    try{
      await dispatch({type:ACTION.CREATE, payload:campground});
      navigate('/');
    }catch(e){
      console.log("ERROR ADDING")
    }
  }

  function handleImageChange(e){
    e.preventDefault();
    console.log(e.target.files[0]);
    setCampground({...campground, imageRaw:e.target.files[0]});
  }

  return (
    <>
      <Typography component="h1" variant="h4" className="text-center" sx={{pb:3}}>New Campground</Typography>
      <Paper sx={{p:3}}>
        <Stack spacing={2} component="form" className="needs-validation" onSubmit={handleSubmit}>
          <TextField size="small" name="title" id="title" label="Title" onChange={handleChange} value={campground && campground.title}/>
          <TextField size="small" name="location" id="location" label="Location" onChange={handleChange} value={campground && campground.location}/>
          <TextField size="small" name="price" id="price" label="Price"  type="number" onChange={handleChange} value={campground && campground.price}/>
          <TextField size="small" name="description" id="description" multiline maxRows={4} label="Description" onChange={handleChange} value={campground && campground.description}/>
          <Button component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleImageChange} accept="image/*"/>
          </Button>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" onClick={handleSubmit}>Save</Button>
            <Button variant="contained" color="grey" component={Link}to="/">Cancel</Button>
          </Stack>
        </Stack>
      </Paper>
    </>
  )
}

export default New
