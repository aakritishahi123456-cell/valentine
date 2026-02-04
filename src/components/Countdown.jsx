import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const year = new Date().getFullYear();
        const valentineDate = new Date(`${year}-02-14T00:00:00`);
        const now = new Date();

        // If passed, countdown to next year
        if (now > valentineDate) {
            valentineDate.setFullYear(year + 1);
        }

        const difference = +valentineDate - +now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="flex justify-center gap-4 my-8 text-center text-rose-800">
            {Object.keys(timeLeft).map((interval) => (
                <div key={interval} className="flex flex-col p-4 bg-white/40 backdrop-blur-sm rounded-lg shadow-sm min-w-[80px]">
                    <span className="text-3xl font-bold font-heading">{timeLeft[interval] || 0}</span>
                    <span className="text-xs uppercase tracking-wide font-body">{interval}</span>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
