import React from 'react';
import { Link } from 'react-router-dom';

function Campground({campground}) {
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <img src={campground.image} className="img-fluid" alt={campground.title}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{campground.title}</h5>
            <p className="card-text">{campground.description }</p>
            <p className="card-text">
                <small className="text-muted">{campground.location}</small>
            </p>
            <Link className="btn btn-primary" to={`/campgrounds/${campground.id}`}>View {campground.title}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campground