import React from 'react';
import PropTypes from 'prop-types';

export default function LiniOutlet({ size, ...props }) {
    let className = 'Component Lini LiniOutlet';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M6.5 10a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM13.5 9a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5z" />
                <path d="M4.843 18a.497.497 0 01-.314-.111c-2.242-1.814-3.528-4.507-3.528-7.389s1.286-5.574 3.528-7.389A.5.5 0 014.843 3h10.314c.114 0 .226.039.314.111 2.242 1.814 3.528 4.507 3.528 7.389s-1.286 5.574-3.528 7.389a.5.5 0 01-.314.111H4.843zm.18-14C3.1 5.621 2 7.98 2 10.5s1.099 4.879 3.023 6.5h9.955c1.923-1.621 3.023-3.98 3.023-6.5S16.902 5.621 14.978 4H5.023z" />
                <path d="M11.5 15h-3a.5.5 0 01-.5-.5V13c0-1.103.897-2 2-2s2 .897 2 2v1.5a.5.5 0 01-.5.5zM9 14h2v-1c0-.551-.449-1-1-1s-1 .449-1 1v1z" />
            </svg>
        </span>
    );
}

LiniOutlet.propTypes = {
    size: PropTypes.number.isRequired,
};
