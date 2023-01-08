import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'


window.addEventListener('load', () => {

  // setTimeout(() => {
  document.getElementById('root').style.padding = "2rem";
  document.getElementById('root').style.maxWidth = "1280px";

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
  // }, 2000);

})
