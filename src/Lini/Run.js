import React from 'react';
import PropTypes from 'prop-types';

export default function LiniRun({ size, ...props }) {
    let className = 'Component Lini LiniRun';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M13 4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM9.5 20a.501.501 0 01-.465-.686l1.878-4.694-2.767-2.767a.5.5 0 01-.094-.577L10.69 6H7.65L4.776 7.916a.5.5 0 11-.554-.832l3-2A.498.498 0 017.499 5h4a.5.5 0 01.447.723l-2.839 5.678 2.745 2.745a.501.501 0 01.111.539l-2 5a.5.5 0 01-.464.314z" />
                <path d="M6 16H1.5a.5.5 0 010-1h4.25l1.35-1.8a.5.5 0 11.8.6l-1.5 2a.5.5 0 01-.4.2zM17.5 10h-4a.5.5 0 01-.447-.276l-1-2a.5.5 0 01.895-.447l.862 1.724h3.691a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniRun.propTypes = {
    size: PropTypes.number.isRequired,
};
