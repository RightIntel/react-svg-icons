import React from 'react';
import PropTypes from 'prop-types';

export default function LiniRepeatOne({ size, ...props }) {
    let className = 'Component Lini LiniRepeatOne';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.354 3.146l-3-3a.5.5 0 00-.707.707l2.146 2.146H2.5c-.827 0-1.5.673-1.5 1.5v9a.5.5 0 001 0v-9a.5.5 0 01.5-.5h13.293l-2.146 2.146a.5.5 0 00.708.707l3-3a.5.5 0 000-.707zM17.5 6a.5.5 0 00-.5.5v9a.5.5 0 01-.5.5H3.207l2.146-2.146a.5.5 0 00-.707-.707l-3 3a.5.5 0 000 .707l3 3a.498.498 0 00.708 0 .5.5 0 000-.707l-2.146-2.146h13.293c.827 0 1.5-.673 1.5-1.5v-9a.5.5 0 00-.5-.5z" />
                <path d="M9.5 13a.5.5 0 01-.5-.5V8h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5v5a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniRepeatOne.propTypes = {
    size: PropTypes.number.isRequired,
};
