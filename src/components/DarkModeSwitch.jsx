import React, { useState, useEffect } from "react";
import './Main.css';
import Toggle from "./Toggle.jsx";
import useLocalStorage from 'use-local-storage'

const DarkModeSwitch = () => {
    const [isDark, setIsDark] = useLocalStorage('isDark',false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <div>
            <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        </div>
    );
};

export default DarkModeSwitch;
