import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VirtualEnvelope = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("My Dearest,\n\nType your romantic message here...\n\nForever yours,\n[Name]");

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] perspective-1000">
            <motion.div
                layout
                className="relative w-80 h-60 bg-red-100 cursor-pointer shadow-xl rounded-lg"
                onClick={() => !isOpen && setIsOpen(true)}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Envelope Flap */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-0 border-l-[160px] border-r-[160px] border-t-[100px] border-l-transparent border-r-transparent border-t-red-300 origin-top z-10"
                    animate={{ rotateX: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Envelope Pocket */}
                <div className="absolute bottom-0 left-0 w-full h-0 border-l-[160px] border-r-[160px] border-b-[120px] border-l-transparent border-r-transparent border-b-red-200 z-20 pointer-events-none" />

                {/* Letter */}
                <motion.div
                    className="absolute bg-white p-6 shadow-md text-gray-800 font-handwriting inset-2 rounded"
                    initial={{ y: 0, zIndex: 0 }}
                    animate={{
                        y: isOpen ? -100 : 0,
                        zIndex: isOpen ? 5 : 0,
                        height: isOpen ? '22rem' : '90%'
                    }}
                    transition={{
                        delay: isOpen ? 0.4 : 0,
                        duration: 0.8
                    }}
                >
                    {isOpen ? (
                        <textarea
                            className="w-full h-full bg-transparent border-none resize-none focus:outline-none text-lg text-center font-cursive"
                            style={{ fontFamily: 'Dancing Script, cursive' }}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    ) : (
                        <div className="w-full h-full bg-slate-50 opacity-50" />
                    )}
                </motion.div>
            </motion.div>

            {!isOpen && (
                <p className="mt-8 text-white text-xl animate-bounce font-heading drop-shadow-md">
                    Click to Open My Heart
                </p>
            )}
        </div>
    );
};

export default VirtualEnvelope;
