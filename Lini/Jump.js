import React from 'react';
import PropTypes from 'prop-types';

export default function LiniJump({ size, ...props }) {
    let className = 'Component Lini LiniJump';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M13 4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM9.5 20a.501.501 0 01-.465-.686l1.878-4.694-2.767-2.767a.5.5 0 01-.094-.577L10.69 6H7.65L4.776 7.916a.5.5 0 11-.554-.832l3-2A.498.498 0 017.499 5h4a.5.5 0 01.447.723l-2.839 5.678 2.745 2.745a.501.501 0 01.111.539l-2 5a.5.5 0 01-.464.314z" />
                <path d="M5.5 10a.5.5 0 01-.31-.892l2-1.578a.477.477 0 01.115-.068l1-.422a.5.5 0 01.389.921l-.938.396-1.947 1.536A.5.5 0 015.5 10z" />
            </svg>
        </span>
    );
}

LiniJump.propTypes = {
    size: PropTypes.number.isRequired,
};
