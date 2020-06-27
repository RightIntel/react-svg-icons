import React from 'react';
import PropTypes from 'prop-types';

export default function LiniList4({ size, ...props }) {
    let className = 'Component Lini LiniList4';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 7h-12C5.673 7 5 6.327 5 5.5S5.673 4 6.5 4h12c.827 0 1.5.673 1.5 1.5S19.327 7 18.5 7zm-12-2a.5.5 0 000 1h12a.5.5 0 000-1h-12zM18.5 12h-12c-.827 0-1.5-.673-1.5-1.5S5.673 9 6.5 9h12c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zm-12-2a.5.5 0 000 1h12a.5.5 0 000-1h-12zM18.5 17h-12c-.827 0-1.5-.673-1.5-1.5S5.673 14 6.5 14h12c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zm-12-2a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1.5 7C.673 7 0 6.327 0 5.5S.673 4 1.5 4 3 4.673 3 5.5 2.327 7 1.5 7zm0-2a.5.5 0 100 1 .5.5 0 000-1zM1.5 12C.673 12 0 11.327 0 10.5S.673 9 1.5 9 3 9.673 3 10.5 2.327 12 1.5 12zm0-2a.5.5 0 100 1 .5.5 0 000-1zM1.5 17C.673 17 0 16.327 0 15.5S.673 14 1.5 14s1.5.673 1.5 1.5S2.327 17 1.5 17zm0-2a.5.5 0 100 1 .5.5 0 000-1z" />
            </svg>
        </span>
    );
}

LiniList4.propTypes = {
    size: PropTypes.number.isRequired,
};
