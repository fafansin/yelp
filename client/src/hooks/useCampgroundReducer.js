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
      return new Promise( async (resolve, reject) => {
        try{
          const ref = await axios.post('/api/addCampground', {campground:payload});
          if(ref.data.success){
            resolve();
          }else{
            reject(new Error('Error on adding Campground'));
          }
        }catch(e){
          reject(new Error('ERROR on call', e));
        }
      })
    case ACTION.UPDATE:
      return new Promise(async (resolve, reject) => {
        try{
          const ref = await axios.put(`/api/updateCampground/${payload.id}`, {campground:payload});
          if(ref.data.success){
            resolve();
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