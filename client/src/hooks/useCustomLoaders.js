import axios from 'axios';

export async function getCampgrounds(){
  const ref = await axios.get('/api/getCampgrounds');
  return ref.data.campgrounds;
}

export function getCampground(){
  return {
    id:1001,
    title:"astig",
    image:'https://i.pinimg.com/564x/3f/29/bc/3f29bc89bf3f7bf25fa4ef748d412385.jpg',
    price:9.99,
    description:'lorem ipsum dolor',
    location:'Singapore,Singapore'
  };
}