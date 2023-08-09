import React from 'react';
import classes from './icons.module.css'

const menu = () => {
    return (
        <button>
            <svg className={classes.Menu} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M0 36V33H36V36H0ZM0 19.5V16.5H36V19.5H0ZM0 3V0H36V3H0Z" fill="#AACAF0" />
            </svg>
        </button>

    );
};

export default menu;