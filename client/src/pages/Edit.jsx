import React, {useState} from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';

function Edit() {
  const [ campground, setCampground ] = useState(useLoaderData());
  const navigate = useNavigate();


  function handleChange(event){
    setCampground({...campground, [event.target.name]:event.target.value});
  }

  function handleSubmit(event){
    updateRecord();
  }

  async function updateRecord(){
    const ref = await axios.put(`/api/updateCampgroud/${campground.id}`, campground);
    if(ref.data.success){
      navigate(`/campgrounds/${campground.id}`)
    }
  }
  
  return (
    <div className="Edit row">
      <h1 className="text-center">Edit Campground</h1>
      <Form onSubmit={handleSubmit} className="border shadow py-5 px-2 gap-3">
        <FloatingLabel label="Title" className="mb-3">
          <Form.Control 
            type="text"
            placeholder="Campground Title"
            onChange={handleChange}
            name="title"
            value={campground.title}/>
        </FloatingLabel>
        <FloatingLabel label="Location" className="mb-3" >
          <Form.Control
            onChange={handleChange}
            type="text" 
            name="location" 
            id="location" 
            placeholder="Location" 
            value={campground.location}/>
        </FloatingLabel>
        <FloatingLabel label="Image Url" className="mb-3">
          <Form.Control
            onChange={handleChange}
            type="text" 
            name="image" 
            id="image" 
            placeholder="Image" 
            value={campground.image}/>
        </FloatingLabel>
        <FloatingLabel label="Price" className="mb-3">
            <Form.Control
              type="number" 
              onChange={handleChange}
              name="price" 
              id="price" 
              className="form-control" 
              placeholder="0.00" 
              value={campground.price}/>
          </FloatingLabel>
          <FloatingLabel controlId="description" label="Description" className="mb-3">
            <Form.Control
              onChange={handleChange}
              as="textarea"
              name="description"
              placeholder="Campground Description"
              style={{ height: '100px' }}
              value={campground.description}
            />
          </FloatingLabel>
          <div className="d-flex gap-2 pt-3">
            <Button onClick={handleSubmit} className="btn btn-success">Save</Button>
            <Link className="btn btn-secondary" to={`/campgrounds/${campground.id}`}>Back</Link>
          </div>
      </Form>
    </div>
  )
}

export default Edit

