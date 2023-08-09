import React from 'react';
import classes from './icons.module.css'

const split = () => {
    return (
        <button>
            <svg className={classes.splitScreen} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M0 16.5V0H16.5V16.5H0ZM0 36V19.5H16.5V36H0ZM19.5 16.5V0H36V16.5H19.5ZM19.5 36V19.5H36V36H19.5ZM3 13.5H13.5V3H3V13.5ZM22.5 13.5H33V3H22.5V13.5ZM22.5 33H33V22.5H22.5V33ZM3 33H13.5V22.5H3V33Z" fill="#BBCFE7" />
            </svg>
        </button>
    );
};

export default split;