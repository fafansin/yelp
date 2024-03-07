import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function New() {
  const [ campground, setCampground ] = useState();
  const navigate = useNavigate();

  function handleChange(e){
    setCampground({...campground, [e.target.name]:e.target.value})
  }
  
  async function handleSubmit(e){
    e.preventDefault();
    try{
      const ref = await axios.post('/api/addCampground', {campground:campground});
      if(ref.data.success){
        navigate('/')
      }else{
        alert('Error on adding Campground')
      }
    }catch(e){
      console.log('ERROR on call', e);
    }
  }

  return (
    <div className="row">
      <h1 className="text-center">New Campground</h1>
      <div className="col-6 offset-3">
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="title">Title</label>
            <input className="form-control" type="text" name="title" id="title" placeholder="Campground Title" required onChange={handleChange}/>
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">*required</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="location">Location</label>
            <input className="form-control" type="text" name="location" id="location" placeholder="Location" required onChange={handleChange}/>
            <div className="invalid-feedback">*required</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="image">Image Url</label>
            <input className="form-control" type="text" name="image" id="image" placeholder="Image" required onChange={handleChange}/>
            <div className="invalid-feedback">*required</div>
          </div>
          <div className="mb-r">
            <label className="form-label" htmlFor="price">Price</label>
            <div className="input-group">
              <span className="input-group-text" id="dollar">$</span>
              <input type="text" name="price" id="price" className="form-control" aria-describedby="dollar" placeholder="0.00" required onChange={handleChange}/>
              <div className="invalid-feedback">*required</div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">Description</label>
            <textarea className="form-control" name="description" id="description" placeholder="Description" required onChange={handleChange}></textarea>
            <div className="invalid-feedback">*required</div>
          </div>
          <div className="mb-3">
            <button className="btn btn-success">Add Campground</button>
          </div>
        </form>
        <Link className="btn btn-secondary" to="/">All Campgrounds</Link>
      </div>
    </div>
  )
}

export default New
