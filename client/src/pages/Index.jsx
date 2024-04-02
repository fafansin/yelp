import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Campground from '../components/Campground';

function Index() {
  const campgrounds = useLoaderData();
  
  return (
    <div className="Campgrounds">
      <h1>All Campgrounds</h1>
      {campgrounds.map(campground => (
        <Campground key={campground.title} campground={campground}/>
      ))}      
    </div>
  )
}

export default Index

