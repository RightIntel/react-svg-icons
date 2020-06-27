import React from 'react';
import PropTypes from 'prop-types';

export default function LiniToggle({ size, ...props }) {
    let className = 'Component Lini LiniToggle';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14.5 20a.495.495 0 01-.224-.053L10.382 18H.5a.5.5 0 01-.5-.5v-14A.5.5 0 01.5 3h9.882l3.894-1.947a.5.5 0 01.723.447v18a.5.5 0 01-.5.5zM1 17h9.5c.078 0 .154.018.224.053L14 18.691V2.309l-3.276 1.638A.496.496 0 0110.5 4H1v13zM19.5 18h-3a.5.5 0 010-1H19V4h-2.5a.5.5 0 010-1h3a.5.5 0 01.5.5v14a.5.5 0 01-.5.5z" />
                <path d="M8.354 10.146l-2-2a.5.5 0 00-.707.707l1.146 1.146H2.5a.5.5 0 000 1h4.293l-1.146 1.146a.5.5 0 00.708.707l2-2a.5.5 0 000-.707zM10.5 7a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM10.5 10a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM10.5 13a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM10.5 16a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniToggle.propTypes = {
    size: PropTypes.number.isRequired,
};
