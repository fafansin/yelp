import React from 'react';
import Campground from '../../components/Campground';
import { useLoaderData } from 'react-router-dom';

function Index() {
  const campgrounds = useLoaderData();
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