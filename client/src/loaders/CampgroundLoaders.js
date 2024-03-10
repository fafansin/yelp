import axios from 'axios';

export async function getCampgrounds(){
  const ref = await axios.get('/api/getCampgrounds');
  return ref.data.campgrounds
}

export async function getCampground({params}){
  const { id } = params;
  const ref = await axios.get(`/api/getCampground/${id}`)
  return ref.data.campground;
}