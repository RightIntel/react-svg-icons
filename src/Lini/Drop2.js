import React from 'react';
import PropTypes from 'prop-types';

export default function LiniDrop2({ size, ...props }) {
    let className = 'Component Lini LiniDrop2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M10 20a5.762 5.762 0 01-4.236-1.845c-1.133-1.206-1.757-2.859-1.757-4.655 0-2.943 1.308-5.049 2.693-7.278C7.77 4.499 8.877 2.718 9.517.369a.499.499 0 01.964 0c.641 2.35 1.749 4.132 2.821 5.855 1.387 2.229 2.697 4.335 2.697 7.277 0 1.799-.62 3.452-1.746 4.654a5.774 5.774 0 01-4.254 1.846zm0-17.887c-.674 1.776-1.574 3.225-2.45 4.636-1.364 2.196-2.543 4.093-2.543 6.751 0 3.136 2.147 5.5 4.993 5.5 2.85 0 5-2.364 5-5.5 0-2.657-1.18-4.553-2.546-6.749C11.576 5.34 10.674 3.89 10 2.113z" />
                <path d="M10 17a2.788 2.788 0 01-2.049-.899c-.608-.648-.943-1.571-.943-2.601a.5.5 0 011 0c0 .774.239 1.455.672 1.916a1.8 1.8 0 001.734.539.5.5 0 01.221.975c-.205.046-.418.07-.634.07z" />
            </svg>
        </span>
    );
}

LiniDrop2.propTypes = {
    size: PropTypes.number.isRequired,
};
