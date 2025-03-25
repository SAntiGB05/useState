import './ModeButton.css';
import { useState, useEffect } from 'react';

export const ModeButton = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Cambiar variables CSS globales en root al cambiar el modo
    useEffect(() => {
        document.documentElement.style.setProperty('--bg-color', darkMode ? '#222' : '#fff');
        document.documentElement.style.setProperty('--text-color', darkMode ? '#fff' : '#222');
    }, [darkMode]);

    const sun = "/img/sun.png";
    const moon = "/img/moon.png";

    return (
        <div className="container">

            <label className="toggle">
                <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                <span className="slider"></span>
            </label>

            <img src={darkMode ? moon : sun} alt="Modo" width={30}/>
        </div>
    );
};
