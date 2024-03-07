import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './Home.jsx'
import TareaFiltros from './TareaFiltros.jsx'
import Juego from './ComponentsJuegos/Juego.jsx'
import Provider from './contexto/Provider.jsx'
import KaraokePlayer from './ComponentsJuegos/karaoke/KaraokePlayer.jsx'


const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/TareaFiltros',
    element: <TareaFiltros />,
  },
  {
    path: '/Juego',
    element: <Juego />,
  },
  {
    path: '/KaraokePlayer',
    element: <KaraokePlayer />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
