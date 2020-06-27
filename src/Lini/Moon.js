import React from 'react';
import PropTypes from 'prop-types';

export default function LiniMoon({ size, ...props }) {
    let className = 'Component Lini LiniMoon';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M10.339 20c-2.762 0-5.358-1.076-7.311-3.028S0 12.423 0 9.661 1.075 4.303 3.028 2.35A10.272 10.272 0 016.562.034a.5.5 0 01.617.714 8.899 8.899 0 00-1.093 5.509 8.766 8.766 0 002.52 5.138 8.787 8.787 0 006.254 2.591c1.542 0 3.06-.402 4.391-1.164a.5.5 0 01.715.616 10.272 10.272 0 01-2.316 3.534A10.27 10.27 0 0110.339 20zM5.687 1.56a9.311 9.311 0 00-1.951 1.497C1.972 4.821 1.001 7.166 1.001 9.661s.971 4.84 2.735 6.604C5.5 18.029 7.845 19 10.339 19s4.839-.971 6.603-2.735a9.334 9.334 0 001.496-1.95 9.888 9.888 0 01-3.578.671 9.779 9.779 0 01-6.962-2.884 9.75 9.75 0 01-2.805-5.719 9.945 9.945 0 01.594-4.822z" />
            </svg>
        </span>
    );
}

LiniMoon.propTypes = {
    size: PropTypes.number.isRequired,
};
