import React from 'react';
import PropTypes from 'prop-types';

export default function LiniStar({ size, ...props }) {
    let className = 'Component Lini LiniStar';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M15.5 19a.497.497 0 01-.239-.061L10 16.07l-5.261 2.869a.499.499 0 01-.732-.522l.958-5.746-3.818-3.818a.501.501 0 01.271-.847l5.749-.958 2.386-4.772a.5.5 0 01.894 0l2.386 4.772 5.749.958a.5.5 0 01.271.847l-3.818 3.818.958 5.746A.503.503 0 0115.5 19zM10 15c.082 0 .165.02.239.061l4.599 2.508-.831-4.987a.497.497 0 01.14-.436l3.313-3.313-5.042-.84a.5.5 0 01-.365-.27L10 3.617 7.947 7.723a.503.503 0 01-.365.27l-5.042.84 3.313 3.313a.502.502 0 01.14.436l-.831 4.987 4.599-2.508A.497.497 0 0110 15z" />
            </svg>
        </span>
    );
}

LiniStar.propTypes = {
    size: PropTypes.number.isRequired,
};
