

import React, { useState, useEffect } from 'react';
import './style.css';
import desktopImage from '../../assets/img(11).jpg';
import mobileImage from '../../assets/img(11).jpg';

const Background = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    
    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
            </div>
        </div>
    );
};

export default Background;