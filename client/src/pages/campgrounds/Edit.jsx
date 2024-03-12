import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLoaderData } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ACTION } from '../../hooks/useCampgroundReducer';
import { DispatchContext } from '../../contexts/CampgroundContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { grey } from '@mui/material/colors';

const ImageWrap = styled(Paper)({
  position:'relative',
  display:'inline-block',
  width:'200px', 
  height:"200px",
  padding:'4px'
})
const ImageThumb = styled('img')({
  width:"100%",
  height:"100%"
})
const ImageActions = styled('div')({
  position:'absolute',
  right:0,
  top:0,
  border:"1px solid white",
  borderRadius:"50%",
  background:'rgba(255,255,255,0.5)'
})

const AddImageWrap = styled('div')(({ theme}) => ({
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  height:'100%',
  backgroundColor:grey[400]
}))

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

function Edit() {
  const [campground, setCampground] = useState(useLoaderData());
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  function handleChange(e){
    setCampground({...campground, [e.target.name]:e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault();
    await dispatch({type:ACTION.UPDATE, payload:campground})
    navigate(`/campgrounds/${campground.id}`)
  }

  function handleDeleteImage(e){
    setCampground({...campground, image:null})
  }

  function handleImageChange(e){
    setCampground({...campground, imageRaw:e.target.files[0]});
  }

  return (
    <>
      <Typography component="h1" variant="h4" className="text-center" sx={{pb:3}}>Edit Campground</Typography>
      <Paper sx={{p:3}}>
        <Stack spacing={2} component="form" className="needs-validation" onSubmit={handleSubmit}>
          <TextField size="small" name="title" id="title" label="Title" onChange={handleChange} value={campground && campground.title}/>
          <TextField size="small" name="location" id="location" label="Location" onChange={handleChange} value={campground && campground.location}/>
          
          <TextField size="small" name="price" id="price" label="Price"  type="number" onChange={handleChange} value={campground && campground.price}/>
          <TextField size="small" name="description" id="description" multiline maxRows={4} label="Description" onChange={handleChange} value={campground && campground.description}/>
          <Stack direction="row">
            {campground.image ? 
              (<ImageWrap>
                <ImageThumb src={campground && campground.image.url} alt={campground.title}/>
                <ImageActions>
                  <IconButton color="error" onClick={handleDeleteImage}>
                    <DeleteIcon />
                  </IconButton>
                </ImageActions>
              </ImageWrap>) 
            : 
              (<ImageWrap>
                <AddImageWrap>
                  <Button component="label"
                    role={undefined}
                    variant="outlined"
                    tabIndex={-1}
                    startIcon={<InsertPhotoIcon />}>
                    Upload
                    <VisuallyHiddenInput type="file" onChange={handleImageChange} accept="image/*"/>
                  </Button>
                </AddImageWrap>
              </ImageWrap>)
            }
          </Stack>
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
