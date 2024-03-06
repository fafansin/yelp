import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Campground from '../../components/Campground';

function Index() {
  const [campgrounds, setCampgrounds] = useState([])
  useEffect(() => {
    populate();
  }, [])

  async function populate(){
    try{
      const ref = await axios.get('/api/getCampgrounds');
      setCampgrounds(ref.data.campgrounds);
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div>
      <h1>All Campgrounds</h1>
      {
        campgrounds.map(campground => <Campground key={campground.id} campground={campground} />)
      }
    </div>
  )
}

export default Index;