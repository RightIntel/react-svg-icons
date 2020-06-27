import React from 'react';
import PropTypes from 'prop-types';

export default function LiniDiamond({ size, ...props }) {
    let className = 'Component Lini LiniDiamond';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 18a.499.499 0 01-.372-.166l-9-10A.498.498 0 01.1 7.2l3-4a.5.5 0 01.4-.2h12a.5.5 0 01.4.2l3 4a.5.5 0 01-.028.634l-9 10A.502.502 0 019.5 18zM1.147 7.471L9.5 16.752l8.353-9.281L15.25 4H3.75L1.147 7.471z" />
            </svg>
        </span>
    );
}

LiniDiamond.propTypes = {
    size: PropTypes.number.isRequired,
};
