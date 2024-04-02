import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Error from './pages/Error';
import Index from './pages/Index';
import New from './pages/New';
import Show from './pages/Show';
import Edit from './pages/Edit';

function getCampgrounds(){
  return [
    {
      id:1001,
      title:"astig",
      image:'https://i.pinimg.com/564x/3f/29/bc/3f29bc89bf3f7bf25fa4ef748d412385.jpg',
      price:9.99,
      description:'lorem ipsum dolor',
      location:'Singapore,Singapore'
    },
  ]
}

function getCampground(){
  return {
    id:1001,
    title:"astig",
    image:'https://i.pinimg.com/564x/3f/29/bc/3f29bc89bf3f7bf25fa4ef748d412385.jpg',
    price:9.99,
    description:'lorem ipsum dolor',
    location:'Singapore,Singapore'
  };
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorPage:<Error />,
    children:[
      { index:true, element: <Index />, loader:getCampgrounds},
      { path:"/campgrounds/new", element: <New />},
      { path:"/campgrounds/:id", element: <Show />, loader:getCampground},
      { path:"/campgrounds/:id/edit", element: <Edit />, loader:getCampground},
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
