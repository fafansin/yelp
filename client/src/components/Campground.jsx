import React from 'react'

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
            <p className="card-text">{campground.description}</p>
            <p className="card-text">
              <small className="text-muted">{campground.location}</small>
            </p>
            <a className="btn btn-primary" href={`/campgrounds/${campground.id}`}>View {campground.title}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campground