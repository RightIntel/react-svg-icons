import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFire({ size, ...props }) {
    let className = 'Component Lini LiniFire';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14.127.606a2.762 2.762 0 00-.222-.399.5.5 0 00-.844.532l.174.32c.442.939 1.201 3.171 1.243 5.551-.461-1-1.17-1.869-1.815-2.662-.982-1.205-1.829-2.245-1.668-3.378A.497.497 0 0010.5 0C9.482 0 8.401.797 7.673 1.466c-.928.852-1.815 1.974-2.499 3.159-.099.172-.193.343-.281.514.232-1.615.685-3.294 1.073-4.459a.502.502 0 00-.908-.417C2.05 5.777.998 8.058.998 12c0 2.149.807 4.139 2.271 5.604a7.867 7.867 0 002.685 1.752c1.078.428 2.27.645 3.544.645s2.466-.217 3.544-.645a7.877 7.877 0 002.685-1.752c1.465-1.465 2.271-3.455 2.271-5.604 0-3.902-1.062-6.226-3.873-11.394zM6.041 5.125c.625-1.084 1.467-2.149 2.309-2.923.593-.545 1.162-.924 1.634-1.097.101 1.264.981 2.343 1.904 3.475 1.636 2.008 3.182 3.905 1.073 7.111a6.537 6.537 0 01-1.649 1.442 5.54 5.54 0 00.561-3.83 5.527 5.527 0 00-1.392-2.657c-.747-.787-1.735-1.352-2.858-1.633a.5.5 0 00-.399.901c.648.432.965 1.911.64 2.986-.223.736-.664 1.11-1.312 1.11-.115 0-.238-.012-.367-.035a1.41 1.41 0 01-1.004-.71 2.574 2.574 0 01-.088-.165h.005c-.36-.848-.016-2.314.944-3.977zM9.5 19C4.576 19 2 15.479 2 12c0-2.746.523-4.597 1.99-7.566-.424 2.458-.313 4.255.33 5.342.386.652.952 1.051 1.684 1.184.187.034.371.052.546.052 1.092 0 1.919-.664 2.269-1.82.209-.691.229-1.526.053-2.291a4.266 4.266 0 00-.093-.342 4.488 4.488 0 012.114 2.953c.366 1.729-.285 3.489-1.701 4.594a.499.499 0 00.46.871c2.478-.792 4.193-2.249 5.098-4.332.667-1.537.879-3.366.63-5.443C16.548 7.703 17 9.488 17 12.001c0 3.479-2.576 7-7.5 7z" />
            </svg>
        </span>
    );
}

LiniFire.propTypes = {
    size: PropTypes.number.isRequired,
};