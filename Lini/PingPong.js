import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPingPong({ size, ...props }) {
    let className = 'Component Lini LiniPingPong';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.104 16.396c-.582-.583-1.268-1.112-1.931-1.625-1.943-1.502-3.621-2.798-2.641-5.063.498-1.151.589-2.24.28-3.328-.329-1.157-1.123-2.35-2.426-3.645A10.033 10.033 0 009.563.734C8.518.247 7.46 0 6.418 0c-1.69 0-3.246.664-4.501 1.92C1.174 2.664.638 3.513.324 4.442a6.297 6.297 0 00-.276 2.777c.214 1.824 1.168 3.664 2.684 5.182 1.765 1.767 3.32 2.589 4.896 2.589.677 0 1.358-.152 2.082-.464.451-.195.882-.293 1.281-.293 1.512 0 2.615 1.427 3.782 2.938.513.663 1.043 1.349 1.626 1.932a.498.498 0 00.708 0l2-2a.5.5 0 000-.707zM2.623 2.627C3.686 1.563 4.998 1 6.417 1c1.783 0 3.701.891 5.263 2.444 1.033 1.027 1.65 1.908 1.985 2.684l-7.54 7.54c-.837-.353-1.717-1.003-2.687-1.974-2.377-2.38-3.646-6.233-.815-9.068zM16.76 18.033c-.413-.458-.81-.972-1.197-1.473-1.264-1.635-2.57-3.326-4.574-3.326-.536 0-1.1.126-1.677.375-.596.257-1.148.382-1.686.382-.129 0-.258-.008-.388-.022l6.736-6.736c.097.785-.092 1.457-.361 2.079-.582 1.344-.494 2.558.268 3.71.637.964 1.676 1.766 2.68 2.542.501.387 1.015.784 1.472 1.197l-1.274 1.273zM2.5 20C1.122 20 0 18.878 0 17.5S1.122 15 2.5 15 5 16.122 5 17.5 3.878 20 2.5 20zm0-4c-.827 0-1.5.673-1.5 1.5S1.673 19 2.5 19 4 18.327 4 17.5 3.327 16 2.5 16z" />
            </svg>
        </span>
    );
}

LiniPingPong.propTypes = {
    size: PropTypes.number.isRequired,
};