import React from 'react';
import PropTypes from 'prop-types';

export default function LiniWifiAlert({ size, ...props }) {
    let className = 'Component Lini LiniWifiAlert';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M10.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM13.947 12.968a.5.5 0 01-.431-.246A3.519 3.519 0 0010.5 11a.5.5 0 010-1 4.497 4.497 0 013.876 2.213.5.5 0 01-.43.755zM16.107 10.808a.501.501 0 01-.401-.2A6.451 6.451 0 0010.5 8a.5.5 0 010-1c1.202 0 2.35.276 3.412.82a7.556 7.556 0 012.594 2.189.5.5 0 01-.399.8zM18.243 8.671a.5.5 0 01-.387-.183A9.47 9.47 0 0010.5 5c-.64 0-1.279.064-1.901.19a.499.499 0 11-.198-.98C9.088 4.071 9.794 4 10.5 4c3.162 0 6.125 1.405 8.13 3.855a.501.501 0 01-.386.817zM4.5 14C2.019 14 0 11.981 0 9.5S2.019 5 4.5 5 9 7.019 9 9.5 6.981 14 4.5 14zm0-8C2.57 6 1 7.57 1 9.5S2.57 13 4.5 13 8 11.43 8 9.5 6.43 6 4.5 6z" />
                <path d="M4.5 10a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM4.5 12a.498.498 0 01-.5-.5.498.498 0 01.5-.5.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniWifiAlert.propTypes = {
    size: PropTypes.number.isRequired,
};
