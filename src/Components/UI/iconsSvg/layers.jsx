import React from 'react';
import classes from './icons.module.css'

const layers = () => {
    return (
        <buutton disabled={false} className={classes.layersIcon}>
            <svg className={classes.layers} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 36L0 21.8427L2.5 19.9719L18 32.1573L33.5 19.9719L36 21.8427L18 36ZM18 28.3146L0 14.1573L18 0L36 14.1573L18 28.3146ZM18 24.4719L31.1 14.1573L18 3.8427L4.9 14.1573L18 24.4719Z" fill="#BBCFE7" />
            </svg>
        </buutton>
    );
};

export default layers;