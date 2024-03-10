import axios from 'axios';

export async function getCampgrounds(){
  const ref = await axios.get('/api/getCampgrounds');
  return ref.data.campgrounds
}