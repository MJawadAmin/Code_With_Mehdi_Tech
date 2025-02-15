import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 10) {  // Corrected condition
                    console.log("stopped");
                    alert("Stoped if you want restart")
                    clearInterval(intervalId); // Stop the interval
                    return prevSeconds; // Keep it at 10
                }
                return prevSeconds + 1; // Continue incrementing
            });
            console.log("updated seconds");
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div>
            <h1>Seconds: {seconds}</h1>
        </div>
    );
};

export default TimerComponent;
