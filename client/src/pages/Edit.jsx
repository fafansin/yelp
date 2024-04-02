import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Edit() {

  const campground = useLoaderData();
  return (
    <div className="Edit row">
      <h1 className="text-center">Edit Campground</h1>
      <div className="col-6 offset-3">
          <form action={`/campgrounds/${campground.id}/?_method=PUT`} method="POST">
              <div className="mb-3">
                  <label className="form-label" for="title">Title</label>
                  <input className="form-control" 
                    type="text" name="title" 
                    id="title" 
                    placeholder="Campground Title" 
                    value={campground.title}/>
              </div>
              <div className="mb-3">
                  <label className="form-label" for="location">Location</label>
                  <input className="form-control" 
                    type="text" 
                    name="location" 
                    id="location" 
                    placeholder="Location" 
                    value={campground.location}/>
              </div>
              <div className="mb-3">
                  <label className="form-label" for="image">Image Url</label>
                  <input className="form-control" 
                    type="text" 
                    name="image" 
                    id="image" 
                    placeholder="Image" 
                    value={campground.image}/>
              </div>
              <div className="mb-r">
                  <label className="form-label" for="price">Price</label>
                  <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input type="text" 
                        name="price" 
                        id="price" 
                        className="form-control" 
                        placeholder="0.00" 
                        value={campground.price}/>
                  </div>
              </div>
              <div className="mb-3">
                  <label className="form-label" for="description">Description</label>
                  <textarea className="form-control" name="description" id="description" 
                    placeholder="Description">{campground.description}</textarea>
              </div>
              <div className="mb-3">
                  <button className="btn btn-success">Save Campground</button>
              </div>
          </form>
          <a href={`/campgrounds/${campground.id}`}>Back</a>
      </div>
    </div>
  )
}

export default Edit

