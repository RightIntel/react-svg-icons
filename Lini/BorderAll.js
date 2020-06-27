import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBorderAll({ size, ...props }) {
    let className = 'Component Lini LiniBorderAll';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.5 2h-14C1.673 2 1 2.673 1 3.5v14c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5zm0 1a.5.5 0 01.5.5V10h-7V3h6.5zM2 3.5a.5.5 0 01.5-.5H9v7H2V3.5zM2.5 18a.5.5 0 01-.5-.5V11h7v7H2.5zm14.5-.5a.5.5 0 01-.5.5H10v-7h7v6.5z" />
            </svg>
        </span>
    );
}

LiniBorderAll.propTypes = {
    size: PropTypes.number.isRequired,
};