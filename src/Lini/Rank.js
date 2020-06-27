import React from 'react';
import PropTypes from 'prop-types';

export default function LiniRank({ size, ...props }) {
    let className = 'Component Lini LiniRank';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 16a.494.494 0 01-.242-.063l-8.757-4.865-8.757 4.865a.5.5 0 01-.486-.874l9-5a.5.5 0 01.486 0l9 5A.5.5 0 0118.5 16z" />
            </svg>
        </span>
    );
}

LiniRank.propTypes = {
    size: PropTypes.number.isRequired,
};
