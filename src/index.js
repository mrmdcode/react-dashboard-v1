import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import './assets/css/index.css';
import {mainRoutes} from "./routes/main";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={mainRoutes}/>
  </React.StrictMode>
);

