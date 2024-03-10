import React from 'react';
import { Link, useNavigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';

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
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card mb-3">
          <img src={ campground && campground.image } className="card-img-top" alt='campground'/>
          <div className="card-body">
            <h5 className="card-title">{campground && campground.title}</h5>
            <p className="card-text">{campground && campground.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-muted">{campground && campground.location }</li>
            <li className="list-group-item">{`$ ${campground && campground.price} /night`}</li>
          </ul>
          <div className="card-body">
            <Link className="card-link btn btn-info" to={`/campgrounds/${campground && campground.id}/edit`}>Edit</Link>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            <Link className="btn btn-secondary" to="/">Back</Link>
          </div>
          <div className="card-footer text-muted">
              2 days ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show