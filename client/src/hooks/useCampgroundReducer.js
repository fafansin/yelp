import axios from 'axios';

export const ACTION = {
  DELETE:'delete',
  CREATE:'create',
  UPDATE:'update'
}

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.DELETE:
      return new Promise(async (resolve, reject) => {
        try{
          const ref = await axios.delete(`/api/deleteCampground/${payload.id}`)
          if(ref.data.success){
            resolve();
          }else{
            reject(new Error('Error Removing this campground FROM API'));
          }
        }catch(e){
          reject(new Error('Error Removing this campground'))
        }
      })
    case ACTION.CREATE:
      const data = new FormData();
        data.append('image', payload.imageRaw)
        data.append('title', payload.title)
        data.append('price', payload.price)
        data.append('description', payload.description)
        data.append('location', payload.location)
        
      return new Promise(async (resolve, reject) => {
        try{
          const ref = await axios.post(`/api/addCampground/`, data, {headers: { "Content-Type": "multipart/form-data" }});
          if(ref.data.success){
            resolve(ref.data.id);
          }else{
            reject(new Error(ref))
          }
        }catch(e){
          reject(new Error(e))
        }
      })
    case ACTION.UPDATE:
      return new Promise(async (resolve, reject) => {
        try{
          const data = new FormData();
            if(payload.imageRaw){
              data.append('image', payload.imageRaw)
            }
            data.append('title', payload.title)
            data.append('price', payload.price)
            data.append('description', payload.description)
            data.append('location', payload.location)
            data.append('noImage', !payload.image && !payload.imageRow)
          
          const ref = await axios.put(`/api/updateCampground/${payload.id}`, data, {headers: { "Content-Type": "multipart/form-data" }});
          if(ref.data.success){
            resolve(ref.data.id);
          }else{
            reject(new Error(ref))
          }
        }catch(e){
          reject(new Error(e))
        }
      })
    default:
      return state;
  }
}

export default reducer;