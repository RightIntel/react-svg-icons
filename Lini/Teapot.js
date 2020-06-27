import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTeapot({ size, ...props }) {
    let className = 'Component Lini LiniTeapot';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M20 6.5c0-.841-.878-1.5-2-1.5l-.106.002c-1.603.042-2.188 1.036-2.754 1.999-.257.437-.519.882-.885 1.305a6.75 6.75 0 01-.254-1.806.494.494 0 00-.164-.369c.123-.226.164-.442.164-.631 0-.455-.248-1.115-1.427-1.672-.665-.314-1.523-.548-2.503-.687.009-.094.015-.187.015-.277 0-.538-.172-.993-.498-1.317C9.223 1.184 8.689 1 8.002 1s-1.221.184-1.586.547c-.326.324-.498.78-.498 1.317 0 .09.005.183.015.277-.866.123-1.636.32-2.262.581a2.28 2.28 0 00-.363-.343c-.582-.436-1.283-.481-1.972-.126C.6 3.632-.209 4.527.116 6.638c.19 1.235.687 2.436.926 3.013l.033.081-.043.108c-.506 1.269-1.03 2.582-1.03 3.659 0 2.106.831 3.82 2.404 4.958 1.394 1.009 3.329 1.542 5.596 1.542s4.203-.533 5.596-1.542c1.572-1.138 2.404-2.853 2.404-4.958a3.77 3.77 0 00-.045-.571c.045-.055.089-.113.133-.172.489-.663.884-1.52 1.265-2.348.498-1.082 1.012-2.198 1.629-2.596.612-.254 1.019-.741 1.019-1.313zm-1 0c0 .092-.079.202-.221.296a2.03 2.03 0 00-.244.118A1.625 1.625 0 0118 7c-.61 0-1-.296-1-.5 0-.197.365-.481.941-.499L18 6c.61 0 1 .296 1 .5zM6.923 2.715C6.959 2.382 7.114 2 8 2s1.041.382 1.077.715c.022.205-.004.448-.072.704l-.006.021a3.44 3.44 0 01-.315.761c-.276.496-.57.753-.685.795-.115-.042-.409-.299-.685-.795a3.506 3.506 0 01-.32-.781 1.998 1.998 0 01-.072-.706zm-.367 2.166C6.816 5.299 7.35 6 8 6s1.184-.701 1.444-1.119c.153-.246.282-.504.383-.764.917.123 1.73.337 2.319.615.629.297.854.591.854.767 0 .238-.396.622-1.282.944-.985.358-2.306.556-3.718.556s-2.733-.197-3.718-.556C3.397 6.121 3 5.737 3 5.499c0-.176.224-.47.854-.767.589-.278 1.402-.493 2.319-.615.101.259.229.517.383.764zM1.102 6.487c-.188-1.223.044-2.012.689-2.344.342-.176.626-.169.895.022.025.018.049.037.072.056-.61.454-.758.927-.758 1.278 0 .188.041.404.164.631A.5.5 0 002 6.499c0 .527-.167 1.166-.4 1.843-.195-.542-.397-1.2-.498-1.856zM8 19c-4.383 0-7-2.056-7-5.5 0-.885.487-2.107.959-3.288.447-1.121.907-2.276 1.017-3.283.255.159.571.312.965.455C5.033 7.781 6.475 8 8.001 8s2.968-.219 4.06-.616c.387-.141.701-.292.953-.449.041.685.178 1.373.422 2.117a4.157 4.157 0 01-.207.141C12.46 9.69 12 10.552 12 11.499c0 .642.192 1.251.539 1.714.375.499.907.786 1.461.786.351 0 .682-.081.995-.245-.127 3.29-2.721 5.245-6.995 5.245zm8.445-9.01C15.764 11.47 15.059 13 14 13c-.542 0-1-.687-1-1.5 0-.606.288-1.154.771-1.466a5.79 5.79 0 00.556-.407l.01-.008c.828-.688 1.285-1.465 1.665-2.111.07-.119.136-.232.201-.339.253.39.723.679 1.3.786-.388.579-.719 1.297-1.059 2.035z" />
            </svg>
        </span>
    );
}

LiniTeapot.propTypes = {
    size: PropTypes.number.isRequired,
};
