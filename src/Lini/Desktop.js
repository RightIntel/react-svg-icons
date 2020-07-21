import React from 'react';
import PropTypes from 'prop-types';

export default function LiniDesktop({ size, ...props }) {
    let className = 'Component Lini LiniDesktop';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 1h-17C.673 1 0 1.673 0 2.5v13c0 .827.673 1.5 1.5 1.5h5.191L6 18.382a2.983 2.983 0 01-.409.635.501.501 0 00.128.983h8.561a.5.5 0 00.128-.983 2.996 2.996 0 01-.409-.635L13.308 17h5.191c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zm-17 1h17a.5.5 0 01.5.5V12H1V2.5a.5.5 0 01.5-.5zm11.606 16.829c.029.058.059.115.09.171h-6.39c.031-.056.061-.113.09-.171L7.811 17h4.382l.915 1.829zM18.5 16h-17a.5.5 0 01-.5-.5V13h18v2.5a.5.5 0 01-.5.5z" />
                <path d="M10.5 15h-1a.5.5 0 010-1h1a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniDesktop.propTypes = {
    size: PropTypes.number.isRequired,
};