import React, { useEffect, useState } from 'react';
import { Palabros } from '../assets/Palabros';
import ahorcado1 from '../assets/el_ahorcado1.png';
import ahorcado2 from '../assets/el_ahorcado2.png';
import ahorcado3 from '../assets/el_ahorcado3.png';
import ahorcado4 from '../assets/el_ahorcado4.png';
import ahorcado5 from '../assets/el_ahorcado5.png';
import ahorcado6 from '../assets/el_ahorcado6.png';
import { Link } from 'react-router-dom';

const Juego = () => {
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const letras_array = letras.split('');
    const [azar, setAzar] = useState(0);
    const [palabra, setPalabra] = useState([]);
    const [misLetras, setMisLetras] = useState([]);
    const [correctas, setCorrectas] = useState([]);
    const [incorrectas, setIncorrectas] = useState([]);
    const [numErrores, setNumErrores] = useState(0);

    useEffect(() => {
        setAzar(Math.floor(Math.random() * Palabros.length));
    }, []);

    useEffect(() => {
        setPalabra(Palabros[azar].palabro.split(''));
    }, [azar]);

    useEffect(() => {
        if (incorrectas.length > 0) {
            setNumErrores(incorrectas.length);
        }

        const palabraCompleta = palabra.every(letra => correctas.includes(letra));
        if (palabraCompleta && palabra.length > 0) {

            alert('¡Has ganado!');
        }

        if (numErrores >= 6) {

            alert('Has perdido.');
        }
    }, [correctas, incorrectas, palabra, numErrores]);

    const pulsado = (e) => {
        const letra = e.target.innerHTML;
        if (palabra.includes(letra)) {
            setCorrectas([...correctas, letra]);
        } else {
            if (!incorrectas.includes(letra)) {
                setIncorrectas([...incorrectas, letra]);
            }
        }
        setMisLetras([...misLetras, letra]);
    };

    const getButtonClass = (letra) => {
        if (correctas.includes(letra)) {
            return "text-white bg-green-500 border-green-700";
        } else if (incorrectas.includes(letra)) {
            return "text-white bg-red-500 border-red-700";
        }
        return "text-white bg-blue-500 border-black";
    };

    const imagenesAhorcado = [ahorcado1, ahorcado2, ahorcado3, ahorcado4, ahorcado5, ahorcado6];


    return (
        <div className='flex flex-col justify-center text-center'>
            <div className='text-4xl mt-10'>{Palabros[azar].pregunta}</div>
            <p className='flex justify-center'>
                {palabra.map((letra, index) => (
                    misLetras.indexOf(letra) === -1 ? <span className='border-b-2 border-black m-1 w-10 h-14' key={index}></span>
                        : <span key={index}>{letra.toUpperCase()}</span>
                ))}
            </p>

            <div className='flex justify-center flex-wrap mt-10'>
                {letras_array.map((letra) => (
                    <button className={`font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border-dashed border-2 ${getButtonClass(letra)}`}
                        key={letra}
                        onClick={pulsado}>
                        {letra}
                    </button>
                ))}
            </div>
            <div className='flex justify-center text-center mt-20 mb-11'>
                {numErrores > 0 && <img className='w-56 h-80' src={imagenesAhorcado[numErrores - 1]} alt="Progreso del ahorcado" />}
            </div>

            <div>
                <Link to={'/'} className='bg-cyan-600 p-2 md:p-3 mt-4 md:mt-5 rounded-full font-mono transition-all'>Volver al inicio</Link>
            </div>
        </div>
    );
}

export default Juego;
