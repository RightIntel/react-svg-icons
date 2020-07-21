import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBookmark2({ size, ...props }) {
    let className = 'Component Lini LiniBookmark2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M15.5 20a.501.501 0 01-.38-.175L9.5 13.268l-5.62 6.557A.5.5 0 013 19.5v-18a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v18a.5.5 0 01-.5.5zm-6-8a.5.5 0 01.38.175L15 18.149V2.001H4v16.148l5.12-5.974A.5.5 0 019.5 12z" />
            </svg>
        </span>
    );
}

LiniBookmark2.propTypes = {
    size: PropTypes.number.isRequired,
};