import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

const AudioPlayer = ({ onTimeUpdate, videoId }) => {
    const opts = {
        height: '450',
        width: '1080',
    };

    const playerRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (playerRef.current) {
                const currentTime = playerRef.current.getCurrentTime();
                onTimeUpdate(currentTime);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [onTimeUpdate]);

    const onReady = (event) => {
        playerRef.current = event.target;
    };

    return <div className='flex justify-center mt-16 mb-10'>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
    </div>
};

export default AudioPlayer;
