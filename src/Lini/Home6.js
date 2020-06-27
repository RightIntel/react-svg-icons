import React from 'react';
import PropTypes from 'prop-types';

export default function LiniHome6({ size, ...props }) {
    let className = 'Component Lini LiniHome6';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14.5 20h-3a.5.5 0 01-.5-.5V16H9v3.5a.5.5 0 01-.5.5h-3c-.827 0-1.5-.673-1.5-1.5v-6.123l-1.129 1.248a.5.5 0 01-.704.037l-2-1.789a.5.5 0 01-.037-.708l8.829-9.758c.274-.303.644-.47 1.042-.47s.767.167 1.042.47l8.829 9.758a.502.502 0 01-.037.708l-2 1.789a.5.5 0 01-.704-.037l-1.129-1.248V18.5c0 .827-.673 1.5-1.5 1.5zM12 19h2.5a.5.5 0 00.5-.5v-7.421a.5.5 0 01.871-.336l1.666 1.842 1.255-1.123L10.3 2.076c-.082-.091-.189-.141-.3-.141s-.218.05-.3.141l-8.492 9.386 1.255 1.123 1.666-1.842a.502.502 0 01.871.336V18.5a.5.5 0 00.5.5H8v-3.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V19z" />
            </svg>
        </span>
    );
}

LiniHome6.propTypes = {
    size: PropTypes.number.isRequired,
};
