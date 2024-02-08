import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './Home.jsx'
import TareaFiltros from './TareaFiltros.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/TareaFiltros',
    element: <TareaFiltros />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
