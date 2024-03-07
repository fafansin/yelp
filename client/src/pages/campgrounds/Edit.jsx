import React, {useState, useEffect} from 'react';
import { Link,useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const [campground, setCampground] = useState({});
  const {id} = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    populate();
  }, [])

  async function populate(){
    try{
      const ref = await axios.get(`/api/getCampground/${id}`)
      setCampground(ref.data.campground);
    }catch(e){
      console.log(e);
    }
  }

  function handleChange(e){
    setCampground({...campground, [e.target.name]:e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault();
    try{
      const ref = await axios.put(`/api/updateCampground/${id}`, {campground:campground});
      if(ref.data.success){
        navigate(`/campgrounds/${id}`);
      }else{
        console.log('ERROR', ref);
      }
    }catch(e){
      console.log('ERROR', e);
    }
  }

  return (
    <div className="row">
      <h1 className="text-center">Edit Campground</h1>
      <div className="col-6 offset-3">
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="title">Title</label>
            <input className="form-control" type="text" name="title" id="title" placeholder="Campground Title" value={campground && campground.title} required onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="location">Location</label>
            <input className="form-control" type="text" name="location" id="location" placeholder="Location" value={campground && campground.location} required onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="image">Image Url</label>
            <input className="form-control" type="text" name="image" id="image" placeholder="Image" value={ campground && campground.image} required onChange={handleChange}/>
          </div>
          <div className="mb-r">
            <label className="form-label" htmlFor="price">Price</label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input type="text" name="price" id="price" className="form-control" placeholder="0.00" value={campground && campground.price } required onChange={handleChange}/>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">Description</label>
            <input type="text" className="form-control" name="description" id="description" placeholder="Description" required onChange={handleChange} value={campground && campground.description}/>
          </div>
          <div className="mb-3">
            <button onClick={handleSubmit} className="btn btn-success">Save Campground</button>
          </div>
        </form>
        <Link className="btn btn-secondary" to={`/campgrounds/${id}`}>Back</Link>
      </div>
    </div>
  )
}

export default Edit
