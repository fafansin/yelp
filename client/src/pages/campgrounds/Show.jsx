import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Show() {
  const { id } = useParams(); 
  const [campground, setCampground] = useState();


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

  function handleDelete(e){
    alert('delete here');
  }

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card mb-3">
          <img src={ campground && campground.image } className="card-img-top" alt='campground image'/>
          <div className="card-body">
            <h5 className="card-title">{campground && campground.title}</h5>
            <p className="card-text">{campground && campground.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-muted">{campground && campground.location }</li>
            <li className="list-group-item">{`$ ${campground && campground.price} /night`}</li>
          </ul>
          <div className="card-body">
            <Link className="card-link btn btn-info" href={`/campgrounds/${campground && campground.id}/edit`}>Edit</Link>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            {/* <form className="d-inline" action={`/campgrounds/${campground && campground.id}}/?_method=DELETE`} method="POST">
              
            </form> */}
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