import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function New() {
  const [ campground, setCampground ] = useState();
  const navigate = useNavigate();
  
  function handleChange(event){
    setCampground({...campground, [event.target.name]:event.target.value});
  }

  function handleSubmit(event){
    createRecord();
  }

  async function createRecord(){
    const ref = await axios.post(`/api/createCampground/`, campground);
    if(ref.data.success){
      navigate(`/campgrounds/${ref.data.id}`)
    }
  }

  return (
    <div className="Edit row">
      <h1 className="text-center">New Campground</h1>
      <Form onSubmit={handleSubmit} className="border shadow py-5 px-2 gap-3">
        <FloatingLabel label="Title" className="mb-3">
          <Form.Control 
            type="text"
            placeholder="Campground Title"
            onChange={handleChange}
            name="title"
            value={campground && campground.title}/>
        </FloatingLabel>
        <FloatingLabel label="Location" className="mb-3" >
          <Form.Control
            onChange={handleChange}
            type="text" 
            name="location" 
            id="location" 
            placeholder="Location" 
            value={campground && campground.location}/>
        </FloatingLabel>
        <FloatingLabel label="Image Url" className="mb-3">
          <Form.Control
            onChange={handleChange}
            type="text" 
            name="image" 
            id="image" 
            placeholder="Image" 
            value={campground && campground.image}/>
        </FloatingLabel>
        <FloatingLabel label="Price" className="mb-3">
            <Form.Control
              type="number" 
              onChange={handleChange}
              name="price" 
              id="price" 
              className="form-control" 
              placeholder="0.00" 
              value={campground && campground.price}/>
          </FloatingLabel>
          <FloatingLabel controlId="description" label="Description" className="mb-3">
            <Form.Control
              onChange={handleChange}
              as="textarea"
              name="description"
              placeholder="Campground Description"
              style={{ height: '100px' }}
              value={campground && campground.description}
            />
          </FloatingLabel>
          <div className="d-flex gap-2 pt-3">
            <Button onClick={handleSubmit} className="btn btn-success">Save</Button>
            <Link className="btn btn-secondary" to={`/campgrounds/`}>Back</Link>
          </div>
      </Form>
    </div>
  )
}

export default New
  