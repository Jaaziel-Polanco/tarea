import React, { useState } from 'react';
import img from './assets/meme.jpg';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const TareaFiltros = () => {
    const [filter, setFilter] = useState('');

    const applyFilter = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <>
            <div className='bg-slate-600 flex flex-col items-center p-4 h-fit'>
                <h1 className='text-3xl md:text-6xl font-mono mb-5 md:mb-10'>Tarea FiltrosCss</h1>
                <p className='text-lg md:text-xl mb-5 md:mb-10'>Bienvenido sea a mi humilde Tarea, Pongame la nota y corriga la siguiente Gracias!!</p>

                <img src={img} alt="memeProfesor" className={`${filter} max-w-full h-auto`} />
                <h1 className='text-xl md:text-2xl mt-5 md:mt-10 font-mono'>Aca Puede Seleccionar el Filtro que guste:</h1>
                <div className="flex flex-wrap gap-4 justify-center mt-4 md:mt-6">
                    <button onClick={() => applyFilter('grayscale')} className="bg-blue-500 p-2 md:p-3 rounded-full font-mono hover:p-4 transition-all">Escala de grises</button>
                    <button onClick={() => applyFilter('sepia')} className="bg-green-500 p-2 md:p-3 rounded-full font-mono hover:p-4 transition-all">Sepia</button>
                    <button onClick={() => applyFilter('invert')} className="bg-red-500 p-2 md:p-3 rounded-full font-mono hover:p-4 transition-all">Invertir</button>
                    <button onClick={() => applyFilter('')} className="bg-gray-500 p-2 md:p-3 rounded-full font-mono hover:p-4 transition-all">Normal</button>
                </div>
                <Link to={'/'} className='bg-cyan-600 p-2 md:p-3 mt-4 md:mt-5 rounded-full font-mono transition-all'>Volver al inicio</Link>
            </div>
            <Footer />
        </>
    );
};

export default TareaFiltros;
