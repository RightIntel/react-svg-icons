import React from 'react';
import PropTypes from 'prop-types';

export default function LiniIceCream({ size, ...props }) {
    let className = 'Component Lini LiniIceCream';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17 8a4.007 4.007 0 00-3.002-3.874L14 4c0-2.206-1.788-4-3.985-4S6.03 1.794 6.03 4l.002.119A4.006 4.006 0 003 8a4.008 4.008 0 002.851 3.832l1.9 6.839c.207.746.976 1.33 1.749 1.33h1c.774 0 1.542-.584 1.749-1.33l1.9-6.839A4.007 4.007 0 0017 8zm-5.054 8.026l-3.539 1.269-.489-1.762 4.627-1.659-.598 2.152zM10.5 19h-1c-.324 0-.699-.285-.786-.597l-.039-.141 2.943-1.056-.332 1.197c-.087.313-.461.597-.786.597zm2.372-6.306l-5.223 1.873-.713-2.568.065.001h6l.065-.001-.193.695zM13 11H7c-1.654 0-3-1.346-3-3s1.346-3 3-3c.79 0 1.535.304 2.099.857a.5.5 0 00.7-.714A3.973 3.973 0 007.03 4.001c0-1.654 1.339-3 2.985-3S13 2.347 13 4.001a4.03 4.03 0 00-.571.041.5.5 0 10.142.99A3.004 3.004 0 0116 8.002c0 1.654-1.346 3-3 3z" />
            </svg>
        </span>
    );
}

LiniIceCream.propTypes = {
    size: PropTypes.number.isRequired,
};
