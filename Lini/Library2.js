import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLibrary2({ size, ...props }) {
    let className = 'Component Lini LiniLibrary2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M5.5 17H5V8h.5a.5.5 0 000-1h-4a.5.5 0 000 1H2v9h-.5a.5.5 0 000 1h4a.5.5 0 000-1zM4 17H3V8h1v9zM11.5 17H11V8h.5a.5.5 0 000-1h-4a.5.5 0 000 1H8v9h-.5a.5.5 0 000 1h4a.5.5 0 000-1zM10 17H9V8h1v9zM17.5 17H17V8h.5a.5.5 0 000-1h-4a.5.5 0 000 1h.5v9h-.5a.5.5 0 000 1h4a.5.5 0 000-1zM16 17h-1V8h1v9zM18.5 20H.5a.5.5 0 010-1h18a.5.5 0 010 1zM17.5 6h-16a.501.501 0 01-.265-.924l8-5a.501.501 0 01.53 0l8 5A.5.5 0 0117.5 6zM3.243 5h12.513L9.499 1.09 3.242 5z" />
            </svg>
        </span>
    );
}

LiniLibrary2.propTypes = {
    size: PropTypes.number.isRequired,
};
