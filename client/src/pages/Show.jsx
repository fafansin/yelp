import React from 'react';
import { Link, useNavigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Show() {
  const campground = useLoaderData();
  const navigate = useNavigate();

  function handleDelete(event){
    console.log(campground.id);
    deleteAction();
  }

  async function deleteAction(){
    const ref = await axios.delete(`/api/deleteCampground/${campground.id}`);
    if(ref.data.success){
      navigate('/campgrounds')
    }
  }

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card mb-3">
          <img src={campground.image} className="card-img-top" alt={campground.title}/>
          <div className="card-body">
            <h5 className="card-title">{campground.title}</h5>
            <p className="card-text">{campground.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-muted">{campground.location}</li>
            <li className="list-group-item">${campground.price}/night</li>
          </ul>
          <div className="card-body">
            <Link className="card-link btn btn-info" to={`/campgrounds/${campground.id}/edit`}>Edit</Link>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
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

