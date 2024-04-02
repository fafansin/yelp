import React from 'react'

function New() {
  return (
    <div className="row">
      <h1 className="text-center">New Campground</h1>
      <div className="col-6 offset-3">
          <form action="/campgrounds" method="POST">
              <div className="mb-3">
                  <label className="form-label" for="title">Title</label>
                  <input className="form-control" 
                    type="text" 
                    name="title" 
                    id="title" 
                    placeholder="Campground Title"/>
              </div>
              <div className="mb-3">
                  <label className="form-label" for="location">Location</label>
                  <input className="form-control" 
                    type="text" 
                    name="location" 
                    id="location" 
                    placeholder="Location"/>
              </div>
              <div className="mb-3">
                  <label className="form-label" for="image">Image Url</label>
                  <input className="form-control" 
                    type="text" 
                    name="image" 
                    id="image" 
                    placeholder="Image"/>
              </div>
              <div className="mb-r">
                  <label className="form-label" for="price">Price</label>
                  <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input type="text" 
                        name="price" 
                        id="price" 
                        className="form-control" 
                        placeholder="0.00"/>
                  </div>
              </div>
              <div className="mb-3">
                  <label className="form-label" for="description">Description</label>
                  <textarea 
                    className="form-control" 
                    name="description" 
                    id="description" 
                    placeholder="Description"></textarea>
              </div>
              <div className="mb-3">
                  <button className="btn btn-success">Add Campground</button>
              </div>
          </form>
          <a href="/campgrounds">All Campgrounds</a>
      </div>
    </div>
  )
}

export default New
  