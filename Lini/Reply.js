import React from 'react';
import PropTypes from 'prop-types';

export default function LiniReply({ size, ...props }) {
    let className = 'Component Lini LiniReply';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.096 14.024c-.579-1.369-1.408-2.599-2.464-3.655a11.46 11.46 0 00-8.131-3.368H3.208l4.146-4.146a.5.5 0 00-.707-.707l-5 5a.5.5 0 000 .707l5 5a.498.498 0 00.708 0 .5.5 0 000-.707L3.209 8.002h3.293c5.79 0 10.5 4.71 10.5 10.5a.5.5 0 001 0c0-1.552-.304-3.058-.904-4.476z" />
            </svg>
        </span>
    );
}

LiniReply.propTypes = {
    size: PropTypes.number.isRequired,
};
