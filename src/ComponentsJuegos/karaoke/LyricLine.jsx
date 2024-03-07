import React, { useEffect, useRef } from 'react';

const LyricLine = ({ line }) => {
    const lineRef = useRef(null);

    useEffect(() => {
        const lineElement = lineRef.current;
        if (!lineElement) return;


        lineElement.classList.remove('animate-fade-in');
        void lineElement.offsetWidth;
        lineElement.classList.add('animate-fade-in');
    }, [line]);

    return (
        <p ref={lineRef} className="lyric-line transition-opacity duration-1000 ease-in-out text-black mb-20 text-3xl font-bold">
            {line}
        </p>
    );
};

export default LyricLine;


