import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function Show() {
  const campground = useLoaderData();
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
            <form className="d-inline" action={`/campgrounds/${campground.id}/?_method=DELETE`} method="POST">
              <button className="btn btn-danger">Delete</button>
            </form>
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

