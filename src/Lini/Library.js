import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLibrary({ size, ...props }) {
    let className = 'Component Lini LiniLibrary';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M10.5 0h-2C7.673 0 7 .673 7 1.5v.586A1.484 1.484 0 006.5 2h-5C.673 2 0 2.673 0 3.5v15c0 .827.673 1.5 1.5 1.5h5c.384 0 .734-.145 1-.383.266.238.616.383 1 .383h2c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5zm-4 19h-5a.5.5 0 01-.5-.5v-15a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v15a.5.5 0 01-.5.5zm4.5-.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v17z" />
                <path d="M5.5 6H2.641a.5.5 0 010-1H5.5a.5.5 0 010 1zM18.61 19.623l-2.978.366a1.502 1.502 0 01-1.672-1.306L12.01 2.802a1.502 1.502 0 011.306-1.672l2.978-.366a1.502 1.502 0 011.672 1.306l1.95 15.881a1.502 1.502 0 01-1.306 1.672zm-5.171-17.5a.5.5 0 00-.435.557l1.95 15.881a.5.5 0 00.557.435l2.978-.366a.5.5 0 00.435-.557l-1.95-15.881a.5.5 0 00-.557-.435l-2.978.366z" />
                <path d="M15.79 4.857l-.993.122a.499.499 0 11-.122-.992l.993-.122a.499.499 0 11.122.992z" />
            </svg>
        </span>
    );
}

LiniLibrary.propTypes = {
    size: PropTypes.number.isRequired,
};
