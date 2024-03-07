import React, { useState } from 'react';
import LyricLine from './LyricLine';
import AudioPlayer from './AudioPlayer';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

const lyrics = [
    { time: 1, line: 'Just gonna stand there and watch me burn' },
    { time: 6.3, line: "But that's alright, because I like the way it hurts" },
    { time: 12.1, line: 'Just gonna stand there and hear me cry' },
    { time: 16.8, line: "But that's alright, because I love the way you lie" },
    { time: 22.4, line: 'I love the way you lie' },
    { time: 25.5, line: "I can't tell you what it really is" },
    { time: 27.6, line: 'I can only tell you what it feels like' },
    { time: 29.7, line: "And right now there's a steel knife, in my windpipe" },
    { time: 32.4, line: "I can't breathe, but I still fight, while I can fight" },
    { time: 35.2, line: "As long as the wrong feels right, it's like I'm in flight" },
    { time: 37.8, line: 'High off of love drunk from my hate' },
    { time: 39.9, line: "It's like I'm huffing paint and I love it the more that I suffer" },
    { time: 42.5, line: "I suffocate and right before I'm about to drown" },
    { time: 45.3, line: 'She resuscitates me, she ******* hates me,' },
    { time: 47.7, line: 'And I love it, wait' },
    { time: 49, line: "Where you going, I'm leaving you" },
    { time: 50.7, line: "No you ain't, come back" },
    { time: 52.4, line: "We're running right back, here we go again" },
    { time: 54.1, line: "It's so insane 'cause when it's going good, it's going great" },
    { time: 57, line: "I'm Superman, with the wind at his back, she's Lois Lane" },
    { time: 60, line: "But when it's bad, it's awful" },
    { time: 61.3, line: "I feel so ashamed, I snapped, who's that dude" },
    { time: 64.2, line: "I don't even know his name, I laid hands on her" },
    { time: 66.8, line: "I'll never stoop so low again, I guess I don't know my own strength" },
    { time: 70.2, line: "Just gonna stand there and watch me burn" },
    { time: 74.8, line: "But that's alright, because I like the way it hurts" },
    { time: 80.7, line: "Just gonna stand there and hear me cry" },
    { time: 85.9, line: "But that's alright, because I love the way you lie" },
    { time: 91.3, line: "I love the way you lie" },
    { time: 96.8, line: "I love the way you lie" },
    { time: 103.6, line: "You ever love somebody so much" },
    { time: 105, line: "You can barely breathe, when you're with them, you meet" },
    { time: 107.1, line: "And neither one of you, even know what hit 'em," },
    { time: 109.4, line: "Got that warm fuzzy feeling, yeah them chills, used to get 'em" },
    { time: 112.2, line: "Now you're getting ******* sick, of looking at 'em" },
    { time: 114.1, line: "You swore you've never hit 'em, never do nothing to hurt 'em," },
    { time: 117, line: "Now you're in each others face," },
    { time: 118.3, line: "Spewing venom, and these words, when you spit 'em" },
    { time: 120.5, line: "You push, pull each other's hair, scratch, claw, bit 'em," },
    { time: 123.2, line: "Throw 'em down, pin 'em, so lost in the moments, when you're in 'em" },
    { time: 126, line: "It's the rage that's the culprit, it controls you both" },
    { time: 128.2, line: "So they say it's best, to go your separate ways," },
    { time: 130.9, line: "Guess that they don't know ya 'cause today, that was yesterday" },
    { time: 132.9, line: "Yesterday is over, it's a different day" },
    { time: 135, line: "Sound like broken records, playin' over, but you promised her" },
    { time: 137.9, line: "Next time you'll show restraint" },
    { time: 139.3, line: "You don't get another chance," },
    { time: 140.6, line: "Life is no Nintendo game, but you lied again" },
    { time: 142.8, line: "Now you get to watch her leave, out the window, guess that's why they call it window pane" },
    { time: 147, line: "Just gonna stand there and watch me burn" },
    { time: 151.2, line: "But that's alright, because I like the way it hurts" },
    { time: 158.8, line: "Just gonna stand there and hear me cry" },
    { time: 162.6, line: "But that's alright, because I love the way you lie" },
    { time: 167.7, line: "I love the way you lie" },
    { time: 173.8, line: "I love the way you lie" },
    { time: 180.2, line: "Now I know we said things, did things" },
    { time: 182.8, line: "That we didn't mean and we fall back into the same patterns" },
    { time: 186.4, line: "Same routine, but your temper's just as bad, as mine is" },
    { time: 188.8, line: "You're the same as me, but when it comes to love, you're just as blinded" },
    { time: 191.4, line: "Baby please come back, it wasn't you," },
    { time: 193.9, line: "Baby it was me, maybe our relationship isn't as crazy as it seems" },
    { time: 197.7, line: "Maybe that's what happens When a tornado meets a volcano" },
    { time: 201, line: "All I know is I love you too much, to walk away now" },
    { time: 203.6, line: "Come inside, pick up your bags off the sidewalk" },
    { time: 206.2, line: "Don't you hear sincerity, in my voice when I talk," },
    { time: 209, line: "Told you this is my fault, look me in the eyeball" },
    { time: 211.6, line: "Next time I'm pissed, I'll aim my fist at the dry wall" },
    { time: 214.3, line: "Next time, there will be no next time" },
    { time: 216.5, line: "I apologize even though I know it's lies" },
    { time: 219.2, line: "I'm tired of the games, I just want her back, I know I'm a liar" },
    { time: 222.7, line: "If she ever tries to ******* leave again" },
    { time: 224.5, line: "I'm a tie her to the bed and set this house on fire" },
    { time: 227.4, line: "Just gonna stand there and watch me burn" },
    { time: 232, line: "But that's alright, because I like the way it hurts" },
    { time: 238.4, line: "Just gonna stand there and hear me cry" },
    { time: 243.2, line: "But that's alright, because I love the way you lie" },
    { time: 249, line: "I love the way you lie" },
    { time: 254.4, line: "I love the way you lie" }
];

const karaokeVideoId = '4ch6OAusp6c';

const KaraokePlayer = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [videoId, setVideoId] = useState('uelHwf8o7_U'); // Estado inicial del ID del video

    const handleTimeUpdate = (time) => {
        setCurrentTime(time);
    };

    const activeLineIndex = lyrics.findIndex((lyric, index) => {
        return currentTime >= lyric.time && (index === lyrics.length - 1 || currentTime < lyrics[index + 1].time);
    });

    const activeLine = lyrics[activeLineIndex] || {};

    // Función para cambiar el ID del video al modo karaoke
    const changeToKaraokeMode = () => {
        setVideoId(karaokeVideoId);
    };

    return (
        <div className='flex justify-center flex-col text-center bg-slate-500 h-full animate-flip-up animate-duration-[2000ms] animate-ease-out animate-fill-both'>
            <AudioPlayer onTimeUpdate={handleTimeUpdate} videoId={videoId} />
            <div className="lyrics">
                {activeLine.line && (
                    <LyricLine key={activeLineIndex} line={activeLine.line} />
                )}
            </div>

            <div className='mb-10 flex justify-center gap-10'>
                <button onClick={changeToKaraokeMode} className="bg-cyan-600 p-2 md:p-3 mt-4 md:mt-5 rounded-full font-mono transition-all">
                    Cambiar a modo karaoke
                </button>
                <Link to={'/'} className='bg-cyan-600 p-2 md:p-3 mt-4 md:mt-5 rounded-full font-mono transition-all'>Volver al inicio</Link>
            </div>
            <Footer />
        </div>
    );
};

export default KaraokePlayer;