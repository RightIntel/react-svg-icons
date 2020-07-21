import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPenAdd({ size, ...props }) {
    let className = 'Component Lini LiniPenAdd';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M12.9 12.2c-2.61-3.48-4.136-8.475-4.376-9.604A1.502 1.502 0 007.5 0c-.298 0-.689.029-1 .231C6.189.029 5.798 0 5.5 0a1.502 1.502 0 00-1.024 2.596C4.236 3.725 2.71 8.72.1 12.2a.502.502 0 00.046.654c.728.728 2.519 2.79 2.812 4.261-.408.171-.821.534-1.234 1.085a7.918 7.918 0 00-.672 1.076.5.5 0 00.447.723h10a.5.5 0 00.447-.723 7.918 7.918 0 00-.672-1.076c-.413-.551-.826-.914-1.234-1.085.294-1.47 2.085-3.533 2.812-4.261a.5.5 0 00.047-.654zM6.5 12a.5.5 0 110 1 .5.5 0 010-1zm4.12 7H2.381c.367-.529.812-1 1.12-1h6c.308 0 .753.471 1.12 1zm-.02-5.05c-.882 1.176-1.402 2.199-1.554 3.05H3.953c-.151-.851-.672-1.874-1.554-3.05a19.335 19.335 0 00-1.249-1.493c1.464-2.054 2.539-4.472 3.196-6.181.341-.888.653-1.806.878-2.587.328-1.137.293-1.308.272-1.41a.521.521 0 00-.247-.347.5.5 0 01.25-.933c.38 0 .463.076.464.077.036.053.036.276.036.423v9.586c-.582.206-1 .762-1 1.414 0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.652-.418-1.208-1-1.414V1.499c0-.147 0-.37.036-.423.001-.001.084-.077.464-.077a.5.5 0 01.25.933.519.519 0 00-.247.347c-.021.102-.056.273.272 1.41.225.78.537 1.699.878 2.587.657 1.708 1.732 4.126 3.196 6.181-.295.318-.77.853-1.25 1.493zM18.5 4H16V1.5a.5.5 0 00-1 0V4h-2.5a.5.5 0 000 1H15v2.5a.5.5 0 001 0V5h2.5a.5.5 0 000-1z" />
            </svg>
        </span>
    );
}

LiniPenAdd.propTypes = {
    size: PropTypes.number.isRequired,
};