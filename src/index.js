import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import './assets/css/index.css';
import {mainRoutes} from "./routes/main";
import {ContextProvider} from "./context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ContextProvider>
          <RouterProvider router={mainRoutes}/>
      </ContextProvider>
  </React.StrictMode>
);

