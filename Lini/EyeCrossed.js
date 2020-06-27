import React from 'react';
import PropTypes from 'prop-types';

export default function LiniEyeCrossed({ size, ...props }) {
    let className = 'Component Lini LiniEyeCrossed';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.872 10.166c-.047-.053-1.182-1.305-2.956-2.572a17.61 17.61 0 00-1.801-1.134l1.725-1.592a.5.5 0 10-.679-.735l-2.003 1.849c-.124-.056-.248-.11-.372-.162C12.481 5.276 11.207 5 10 5s-2.481.276-3.786.82c-1.03.429-2.083 1.026-3.13 1.773C1.31 8.86.175 10.113.128 10.165a.5.5 0 000 .669c.047.053 1.182 1.305 2.956 2.572.6.429 1.202.807 1.801 1.134L3.16 16.132a.5.5 0 10.679.735l2.003-1.849c.124.056.248.11.372.162 1.305.544 2.579.82 3.786.82s2.481-.276 3.786-.82c1.03-.429 2.083-1.026 3.13-1.773 1.774-1.267 2.909-2.52 2.956-2.572a.5.5 0 000-.669zM14 9.5c0 2.206-1.794 4-4 4a3.976 3.976 0 01-1.957-.513l5.592-5.162c.238.517.366 1.086.366 1.674zm-1.426-3.062c.191.161.364.337.52.525l-5.867 5.416A3.988 3.988 0 016 9.499c0-1.188.519-2.298 1.426-3.062.822-.268 1.691-.438 2.574-.438s1.752.17 2.574.438zm-8.891 6.168A20.014 20.014 0 011.194 10.5a20.102 20.102 0 012.489-2.106 16.19 16.19 0 011.85-1.145A4.988 4.988 0 005 9.5c0 1.391.571 2.651 1.491 3.558l-.825.762a16.233 16.233 0 01-1.983-1.214zm12.634 0C14.784 13.698 12.444 15 10 15c-1.166 0-2.309-.297-3.352-.726l.63-.582c.784.51 1.718.808 2.721.808a5.006 5.006 0 004.467-7.251c.694.365 1.32.768 1.85 1.145a20.014 20.014 0 012.489 2.106 20.102 20.102 0 01-2.489 2.106z" />
            </svg>
        </span>
    );
}

LiniEyeCrossed.propTypes = {
    size: PropTypes.number.isRequired,
};
