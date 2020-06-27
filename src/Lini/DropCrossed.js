import React from 'react';
import PropTypes from 'prop-types';

export default function LiniDropCrossed({ size, ...props }) {
    let className = 'Component Lini LiniDropCrossed';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.829 3.124a.5.5 0 00-.706.047l-2.758 3.152-.062-.1C12.231 4.5 11.123 2.718 10.482.368a.499.499 0 00-.964 0c-.641 2.349-1.747 4.131-2.817 5.853-1.385 2.23-2.693 4.335-2.693 7.278 0 1.016.2 1.987.579 2.857L2.125 19.17a.5.5 0 00.752.659l2.215-2.532c.199.305.423.592.672.857A5.762 5.762 0 0010 19.999a5.774 5.774 0 004.254-1.846C15.38 16.951 16 15.298 16 13.499c0-2.504-.949-4.402-2.086-6.286l2.962-3.385a.5.5 0 00-.047-.706zM5.007 13.5c0-2.658 1.178-4.554 2.543-6.751C8.426 5.338 9.326 3.89 10 2.113c.675 1.777 1.576 3.227 2.454 4.638l.223.359-7.35 8.401a6.31 6.31 0 01-.32-2.01zm9.993 0c0 3.136-2.15 5.5-5 5.5-1.82 0-3.355-.967-4.224-2.485l7.446-8.51C14.234 9.712 15 11.359 15 13.5z" />
            </svg>
        </span>
    );
}

LiniDropCrossed.propTypes = {
    size: PropTypes.number.isRequired,
};
