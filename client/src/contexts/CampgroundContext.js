import React, {createContext, useReducer} from 'react'
import useCampgroundReducer from '../hooks/useCampgroundReducer';

export const CampgroundContext = createContext();
export const DispatchContext = createContext();

export default function CampgroundProvider(props) {
  const [ state, dispatch ] = useReducer(useCampgroundReducer)
  return (
    <CampgroundContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </CampgroundContext.Provider>
  )
}