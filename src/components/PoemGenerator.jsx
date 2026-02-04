import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const POEMS = [
    "Roses are red,\nViolets are blue,\nSugar is sweet,\nAnd so are you.",
    "In all the world,\nThere is no heart for me like yours.\nIn all the world,\nThere is no love for you like mine.",
    "I love you without knowing how,\nor when, or from where.\nI love you simply,\nwithout problems or pride.",
    "If I had a flower for every time\nI thought of you,\nI could walk through my garden forever.",
    "Your hand touching mine.\nThis is how galaxies collide.",
];

const PoemGenerator = () => {
    const [poem, setPoem] = useState("");

    const generatePoem = () => {
        const randomPoem = POEMS[Math.floor(Math.random() * POEMS.length)];
        setPoem(randomPoem);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-white/30 backdrop-blur-md rounded-xl max-w-md mx-auto my-8 shadow-lg">
            <h3 className="text-2xl font-heading text-rose-700">Message from Cupid</h3>

            <button
                onClick={generatePoem}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full hover:from-red-500 hover:to-pink-600 transition-all transform hover:scale-105 shadow-md"
            >
                <Heart size={20} fill="currentColor" />
                Generate Poem
            </button>

            {poem && (
                <motion.div
                    key={poem}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center italic text-gray-800 bg-white/50 p-6 rounded-lg font-handwriting mt-4 w-full"
                >
                    {poem.split('\n').map((line, i) => (
                        <p key={i} className="leading-relaxed font-body">{line}</p>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default PoemGenerator;
