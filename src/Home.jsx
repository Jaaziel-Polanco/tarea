import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  return (
    <div className='bg-slate-600 text-center pt-10 md:pt-16 h-fit'>
        <h1 className='text-3xl md:text-6xl font-mono mb-10 md:mb-32'>Tarea Figuras</h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-10 md:mb-20">
          <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-red-400 to-blue-400 m-2 md:m-4 border-black border-4 animate-bounce animate-infinite animate-duration-1000 animate-ease-in"></div>
          <div className="w-20 h-20 md:w-36 md:h-36 bg-gradient-to-br from-pink-400 to-indigo-400 m-2 md:m-4 border-black border-4 animate-wiggle-more animate-infinite animate-duration-1000 animate-ease-in"></div>
          <div className="w-32 h-24 md:w-72 md:h-48 bg-gradient-to-r from-red-400 to-indigo-400 m-2 md:m-4 border-black border-4 animate-shake animate-infinite animate-duration-1000 animate-ease-in"></div>
        </div>
        <Link to={'/TareaFiltros'} className='bg-cyan-600 px-6 py-2 md:p-3 rounded-full font-mono hover:px-8 hover:py-3 md:hover:p-5 transition-all animate-pulse animate-infinite animate-duration-1000 animate-ease-in'>Siguiente tarea</Link>
        <Footer/>
    </div>
  )
}

export default Home;
