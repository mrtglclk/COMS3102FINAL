import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionTimer = ({ limit = 600000 }) => { // 30 minutes in milliseconds
    const [timeLeft, setTimeLeft] = useState(limit);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(intervalId);
                    alert("Session expired. Please log in again.");
                    navigate('/login');
                    return 0;
                }
                return prevTime - 1000;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [navigate]);

    return (
        <div style={{ position: 'fixed', bottom: 10, right: 10, color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '10px' }}>
            Time left: {Math.floor(timeLeft / 60000)}m {((timeLeft / 1000) % 60).toFixed(0)}s
        </div>
    );
};

export default SessionTimer;
