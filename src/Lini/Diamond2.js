import React from 'react';
import PropTypes from 'prop-types';

export default function LiniDiamond2({ size, ...props }) {
    let className = 'Component Lini LiniDiamond2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.9 7.2l-3-4a.5.5 0 00-.4-.2h-12a.5.5 0 00-.4.2l-3 4a.5.5 0 00.028.634l9 10a.502.502 0 00.744 0l9-10A.498.498 0 0018.9 7.2zm-7.072.8L9.5 15.76 7.172 8h4.656zM7.5 7l2-2.667L11.5 7h-4zm3-3h4l-2 2.667L10.5 4zm-4 2.667L4.5 4h4l-2 2.667zM5.5 7h-4l2-2.667L5.5 7zm.628 1l2.253 7.509L1.623 8h4.505zm6.744 0h4.505l-6.758 7.509L12.872 8zm.628-1l2-2.667L17.5 7h-4z" />
            </svg>
        </span>
    );
}

LiniDiamond2.propTypes = {
    size: PropTypes.number.isRequired,
};
