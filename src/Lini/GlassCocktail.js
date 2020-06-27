import React from 'react';
import PropTypes from 'prop-types';

export default function LiniGlassCocktail({ size, ...props }) {
    let className = 'Component Lini LiniGlassCocktail';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.957 3.517C16.881 3.324 16.655 3 16 3H3c-.655 0-.881.324-.957.517s-.132.584.347 1.031L9 10.717V17.5c0 .813-.458 1.5-1 1.5H6.5a.5.5 0 000 1h6a.5.5 0 000-1H11c-.542 0-1-.687-1-1.5v-6.783l6.61-6.169c.479-.447.423-.838.347-1.031zM9.5 9.816L3.268 4h12.463L9.5 9.816z" />
            </svg>
        </span>
    );
}

LiniGlassCocktail.propTypes = {
    size: PropTypes.number.isRequired,
};
