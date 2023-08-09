import React, { Component } from 'react';
import classes from './icons.module.css'

class ArrowTop extends Component {
    render() {
        return (
            <button className={classes.arrowIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="21" viewBox="0 0 36 21" fill="none">
                    <path d="M18 0.599975L36 17.5611L32.775 20.6L18 6.60704L3.225 20.5293L-1.43051e-06 17.4904L18 0.599975Z" fill="#AACAF0" />
                </svg>
            </button>
        );
    }
}

export default ArrowTop;
