import React from 'react';
import PropTypes from 'prop-types';

export default function LiniExit({ size, ...props }) {
    let className = 'Component Lini LiniExit';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M11.5 8a.5.5 0 00.5-.5v-4c0-.827-.673-1.5-1.5-1.5h-9C.673 2 0 2.673 0 3.5v12c0 .746.537 1.56 1.222 1.853l5.162 2.212c.178.076.359.114.532.114.213 0 .416-.058.589-.172.314-.207.495-.575.495-1.008v-1.5h2.5c.827 0 1.5-.673 1.5-1.5v-4a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H8v-9.5c0-.746-.537-1.56-1.222-1.853L2.936 2.999H10.5a.5.5 0 01.5.5v4a.5.5 0 00.5.5zM6.384 5.566c.322.138.616.584.616.934v12c0 .104-.028.162-.045.173s-.081.014-.177-.027l-5.162-2.212C1.294 16.296 1 15.851 1 15.5v-12c0-.079.018-.153.051-.22l5.333 2.286z" />
                <path d="M18.354 9.146l-3-3a.5.5 0 00-.707.707l2.146 2.146H10.5a.5.5 0 000 1h6.293l-2.146 2.146a.5.5 0 00.708.707l3-3a.5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniExit.propTypes = {
    size: PropTypes.number.isRequired,
};