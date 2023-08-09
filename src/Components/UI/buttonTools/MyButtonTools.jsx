import React from 'react';
import classes from './MyButtonTools.module.css'

const MyButtonTools = ({children, ...props}) => {
    return (
        <button className={classes.buttonContainer}>
            <svg  className={classes.buttonIcon} xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                <path d="M13.2817 0.596989C12.8564 0.272215 12.2459 0.369577 11.9428 0.810512L7.82404 6.80139C7.42669 7.37936 6.57331 7.37936 6.17596 6.80139L2.05723 0.810512C1.75408 0.369576 1.14357 0.272215 0.718311 0.596989C0.317643 0.902987 0.231459 1.47142 0.523417 1.88243L6.18475 9.85231C6.58338 10.4135 7.41662 10.4135 7.81525 9.85231L13.4766 1.88243C13.7685 1.47142 13.6824 0.902987 13.2817 0.596989Z" fill="#2E2E2E" />
            </svg>
            <p>Инструменты</p>
        </button>
    );
};

export default MyButtonTools;