import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import Error from './pages/Error';
import Index from './pages/campgrounds/Index';
import Show from './pages/campgrounds/Show';
import New from './pages/campgrounds/New';
import Edit from './pages/campgrounds/Edit';
import { getCampgrounds } from './loaders/CampgroundLoaders';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <Error />,
    children:[
      { index:true, element: <Index />, loader:getCampgrounds},
      { path:"/campgrounds/new", element: <New />},
      { path:"/campgrounds/:id", element: <Show />},
      { path:"/campgrounds/:id/edit", element: <Edit />},
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
