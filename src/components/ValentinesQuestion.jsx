import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ValentinesQuestion = () => {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "Really sure?",
            "Think again!",
            "Kbhi tu soch lia karo!",
            "Surely not?",
            "You might regret this!",
            "Give it another thought!",
            "Are you absolutely certain?",
            "This could be a mistake!",
            "Have a heart!",
            "Don't be so cold!",
            "Change of heart?",
            "Wouldn't you reconsider?",
            "Is that your final answer?",
            "You're breaking my heart ;(",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    if (yesPressed) {
        return (
            <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                <h1 className="text-6xl font-heading text-rose-600 font-bold mb-4 text-center">
                    I love you so much! ❤
                </h1>
                <img
                    src="https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif"
                    alt="Bear kiss"
                    className="rounded-lg shadow-xl max-w-sm"
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center my-16 text-center">
            <h2 className="text-4xl md:text-5xl font-heading text-rose-700 mb-8">
                Will you be my Valentine?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold rounded px-4 py-2 transition-all duration-200"
                    style={{ fontSize: yesButtonSize }}
                    onClick={() => setYesPressed(true)}
                >
                    Yes
                </button>
                <button
                    onClick={handleNoClick}
                    className=" bg-red-500 hover:bg-red-600 text-white font-bold rounded px-4 py-2"
                >
                    {getNoButtonText()}
                </button>
            </div>
        </div>
    );
};

export default ValentinesQuestion;
