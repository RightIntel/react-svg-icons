import React from 'react';
import PropTypes from 'prop-types';

export default function LiniMenu2({ size, ...props }) {
    let className = 'Component Lini LiniMenu2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 7h-17C.673 7 0 6.327 0 5.5S.673 4 1.5 4h17c.827 0 1.5.673 1.5 1.5S19.327 7 18.5 7zm-17-2a.5.5 0 000 1h17a.5.5 0 000-1h-17zM18.5 12h-17C.673 12 0 11.327 0 10.5S.673 9 1.5 9h17c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zm-17-2a.5.5 0 000 1h17a.5.5 0 000-1h-17zM18.5 17h-17C.673 17 0 16.327 0 15.5S.673 14 1.5 14h17c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zm-17-2a.5.5 0 000 1h17a.5.5 0 000-1h-17z" />
            </svg>
        </span>
    );
}

LiniMenu2.propTypes = {
    size: PropTypes.number.isRequired,
};
