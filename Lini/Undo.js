import React from 'react';
import PropTypes from 'prop-types';

export default function LiniUndo({ size, ...props }) {
    let className = 'Component Lini LiniUndo';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.9 12.199a10.586 10.586 0 00-3.63-3.055A10.39 10.39 0 009.5 8 10.49 10.49 0 002 11.152V8.5a.5.5 0 00-1 0v4a.5.5 0 00.5.5h4a.5.5 0 000-1H2.572A9.49 9.49 0 019.5 9a9.43 9.43 0 017.6 3.799.498.498 0 00.7.1.5.5 0 00.099-.7z" />
            </svg>
        </span>
    );
}

LiniUndo.propTypes = {
    size: PropTypes.number.isRequired,
};
