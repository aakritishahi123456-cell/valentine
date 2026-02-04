import React, { useState, useRef } from 'react';
import { Music, Pause } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={togglePlay}
                className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all text-red-500 hover:scale-110"
                title={isPlaying ? "Pause Music" : "Play Romantic Music"}
            >
                {isPlaying ? <Pause size={24} /> : <Music size={24} />}
            </button>
            <audio
                ref={audioRef}
                src="https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3?filename=piano-moment-11933.mp3"
                loop
            />
        </div>
    );
};

// URL is a placeholder royalty free music. 
// Source: Pixabay (Piano Moment)

export default MusicPlayer;
