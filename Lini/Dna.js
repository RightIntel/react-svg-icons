import React from 'react';
import PropTypes from 'prop-types';

export default function LiniDna({ size, ...props }) {
    let className = 'Component Lini LiniDna';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M7.065 8.372c.697-.567 1.682-.998 2.635-1.414 1.014-.444 2.062-.902 2.865-1.554C13.53 4.62 14 3.67 14 2.5v-1a.5.5 0 00-1 0v1c0 .122-.007.24-.021.354L5.621 1.015A.5.5 0 005 1.5v1c0 1.891 1.25 2.862 2.191 3.428a.5.5 0 10.515-.856C6.51 4.352 6 3.583 6 2.5v-.36l6.663 1.666a3.059 3.059 0 01-.728.821c-.697.567-1.682.998-2.635 1.414-1.014.444-2.062.902-2.865 1.554C5.47 8.379 5 9.329 5 10.499c0 1.891 1.25 2.862 2.191 3.428a.5.5 0 10.515-.856C6.51 12.351 6 11.582 6 10.499c0-.122.007-.24.021-.354l6.642 1.661a3.059 3.059 0 01-.728.821c-.697.567-1.682.998-2.635 1.414-1.014.444-2.062.902-2.865 1.554C5.47 16.379 5 17.329 5 18.499v1a.5.5 0 001 0v-1c0-.122.007-.24.021-.354l7.358 1.839a.5.5 0 00.621-.485v-1c0-1.891-1.25-2.862-2.191-3.428a.5.5 0 10-.515.857C12.49 16.648 13 17.417 13 18.5v.36l-6.663-1.666c.173-.295.414-.566.728-.821.697-.567 1.682-.998 2.635-1.414 1.014-.444 2.062-.902 2.865-1.554.965-.784 1.435-1.734 1.435-2.904 0-1.891-1.25-2.862-2.191-3.428a.5.5 0 10-.515.857C12.49 8.65 13 9.419 13 10.502c0 .122-.007.24-.021.354L6.336 9.195c.173-.295.414-.566.729-.822z" />
            </svg>
        </span>
    );
}

LiniDna.propTypes = {
    size: PropTypes.number.isRequired,
};