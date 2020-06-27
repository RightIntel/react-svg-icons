import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBinoculars({ size, ...props }) {
    let className = 'Component Lini LiniBinoculars';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M4.5 17a2.858 2.858 0 01-1.707-.545C2.289 16.077 2 15.547 2 15a.5.5 0 011 0c0 .472.642 1 1.5 1a.5.5 0 010 1z" />
                <path d="M19.998 14.882c-.044-2.005-1.2-4.788-2.173-6.788-1.05-2.158-2.355-4.331-2.971-4.947-.471-.471-1.278-.521-1.604-.521s-1.133.051-1.603.521c-.234.234-.494.718-.645 2.531-.013.16-.026.327-.037.503-.288-.116-.617-.18-.965-.18s-.677.065-.965.181a20.436 20.436 0 00-.037-.504c-.151-1.813-.411-2.297-.645-2.531-.471-.471-1.278-.521-1.604-.521s-1.133.051-1.604.521c-.616.616-1.921 2.789-2.971 4.947-.973 2.001-2.129 4.783-2.173 6.788A4.644 4.644 0 00-.001 15c0 2.206 2.019 4 4.5 4 2.475 0 4.489-1.785 4.5-3.983l.026-.613C9.12 14.214 9.48 14 10 14s.879.215.975.404l.026.612c.01 2.198 2.025 3.983 4.5 3.983 2.481 0 4.5-1.794 4.5-4l-.002-.118zM11.99 5.858c.13-1.651.337-1.97.366-2.008.306-.299 1.489-.298 1.79.003.411.411 1.605 2.265 2.779 4.678a30.306 30.306 0 011.419 3.372A4.833 4.833 0 0015.5 11c-1.461 0-2.761.622-3.584 1.584-.022-.854-.04-1.858-.041-2.878-.001-1.566.037-2.861.115-3.847zM3.075 8.531c1.174-2.413 2.368-4.267 2.779-4.678.301-.301 1.484-.302 1.79-.003.029.037.236.356.366 2.006.078.986.117 2.28.115 3.845a118.172 118.172 0 01-.041 2.881c-.823-.962-2.123-1.584-3.584-1.584a4.83 4.83 0 00-2.844.903 30.306 30.306 0 011.419-3.372zM4.5 18C2.57 18 1 16.654 1 15l.001-.08C1.051 13.303 2.601 12 4.5 12 6.43 12 8 13.346 8 15s-1.57 3-3.5 3zm5.5-5a2.59 2.59 0 00-.932.168c.029-.984.057-2.253.057-3.543 0-.85-.012-1.622-.035-2.309C9.243 7.151 9.578 7 10 7c.438 0 .761.154.911.315a66.862 66.862 0 00-.036 2.31c0 1.289.028 2.559.057 3.543A2.59 2.59 0 0010 13zm5.5 5c-1.93 0-3.5-1.346-3.5-3s1.57-3 3.5-3c1.899 0 3.449 1.303 3.499 2.92L19 15c0 1.654-1.57 3-3.5 3z" />
                <path d="M15.5 17a2.858 2.858 0 01-1.707-.545C13.289 16.077 13 15.547 13 15a.5.5 0 011 0c0 .472.641 1 1.5 1a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniBinoculars.propTypes = {
    size: PropTypes.number.isRequired,
};
