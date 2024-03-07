import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {

  const [animar, setAnimar] = useState('');

  const applyAnimation = (newAnimation) => {
    setAnimar(newAnimation);
  };

  return (
    <div className='bg-slate-600 text-center pt-10 md:pt-16 h-fit animate-fade-right animate-duration-[1800ms] animate-ease-out animate-fill-both'>
      <h1 className='text-3xl md:text-6xl font-mono mb-10 md:mb-32'>Tarea Figuras</h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-10 md:mb-20">
        <div className={`w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-red-400 to-blue-400 m-2 md:m-4 border-black border-4 ${animar} `}></div>
        <div className={`w-20 h-20 md:w-36 md:h-36 bg-gradient-to-br from-pink-400 to-indigo-400 m-2 md:m-4 border-black border-4 ${animar} `}></div>
        <div className={`"w-32 h-24 md:w-72 md:h-48 bg-gradient-to-r from-red-400 to-indigo-400 m-2 md:m-4 border-black border-4 ${animar}`}></div>
      </div>

      <div className='flex justify-center mb-14 gap-5'>
        <button onClick={() => applyAnimation('animate-bounce animate-infinite animate-duration-1000 animate-ease-in')} className="bg-green-500 p-2 md:p-3 rounded-full font-mono hover:p-4 transition-all">Animacion salto</button>
        <button onClick={() => applyAnimation('animate-shake animate-infinite animate-duration-1000 animate-ease-in')} className="bg-amber-300 p-2 md:p-3 rounded-full font-mono hover:p-4 transition-all">Animacion movida</button>
        <button onClick={() => applyAnimation('animate-spin animate-infinite')} className="bg-sky-500 p-2 md:p-3 rounded-full font-mono hover:p-4 transition-all">Animacion giro</button>
        <button onClick={() => applyAnimation('')} className="bg-gray-500 p-2 md:p-3 rounded-full font-mono hover:p-4 transition-all">Parar animaciones</button>
      </div>
      <Link to={'/TareaFiltros'} className='bg-cyan-600 px-6 py-2 md:p-3 rounded-full font-mono hover:px-8 hover:py-3 md:hover:p-5 transition-all animate-pulse animate-infinite animate-duration-1000 animate-ease-in'>Siguiente tarea</Link>
      <Link to={'/Juego'} className='bg-cyan-600 px-6 py-2 md:p-3 rounded-full font-mono hover:px-8 hover:py-3 md:hover:p-5 transition-all animate-pulse animate-infinite animate-duration-1000 animate-ease-in'>Ir al Juego</Link>
      <Link to={'/KaraokePlayer'} className='bg-cyan-600 px-6 py-2 md:p-3 rounded-full font-mono hover:px-8 hover:py-3 md:hover:p-5 transition-all animate-pulse animate-infinite animate-duration-1000 animate-ease-in'>Ir al Karaoke</Link>
      <Footer />
    </div>
  )
}

export default Home;
