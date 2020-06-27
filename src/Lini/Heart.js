import React from 'react';
import PropTypes from 'prop-types';

export default function LiniHeart({ size, ...props }) {
    let className = 'Component Lini LiniHeart';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 19a.5.5 0 01-.243-.063c-.094-.052-2.326-1.301-4.592-3.347-1.341-1.21-2.411-2.448-3.183-3.68C.498 10.339 0 8.771 0 7.25A5.256 5.256 0 015.25 2c.98 0 2.021.367 2.931 1.034.532.39.985.86 1.319 1.359a5.522 5.522 0 011.319-1.359C11.729 2.367 12.77 2 13.75 2A5.256 5.256 0 0119 7.25c0 1.521-.499 3.089-1.482 4.66-.771 1.232-1.842 2.47-3.182 3.68-2.266 2.046-4.498 3.295-4.592 3.347a.5.5 0 01-.243.063zM5.25 3A4.255 4.255 0 001 7.25c0 3.04 2.35 5.802 4.321 7.585A27.738 27.738 0 009.5 17.922a27.738 27.738 0 004.179-3.087C15.65 13.053 18 10.29 18 7.25A4.255 4.255 0 0013.75 3c-1.703 0-3.357 1.401-3.776 2.658a.5.5 0 01-.948 0C8.607 4.401 6.953 3 5.25 3z" />
            </svg>
        </span>
    );
}

LiniHeart.propTypes = {
    size: PropTypes.number.isRequired,
};
