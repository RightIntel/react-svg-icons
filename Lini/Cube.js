function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCube({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCube';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.998 4.455l-.002-.014-.005-.032-.003-.014a.467.467 0 00-.01-.04l-.005-.014-.01-.026a.21.21 0 00-.02-.042l-.006-.012-.021-.035-.008-.011a.235.235 0 00-.027-.035l-.026-.029-.003-.003a.44.44 0 00-.032-.029l-.009-.007-.025-.019a.083.083 0 00-.012-.008l-.028-.017-.01-.006a.498.498 0 00-.033-.016l-.007-.003-.002-.001L9.703.046a.503.503 0 00-.406 0L.306 4.042l-.002.001-.007.003-.033.016-.01.006-.028.017-.012.008-.026.019-.009.007a.44.44 0 00-.032.029l-.003.003a.358.358 0 00-.034.039l-.019.025-.008.011a.25.25 0 00-.021.035l-.006.012-.013.027-.007.016a.295.295 0 00-.01.027l-.005.014-.01.04-.003.014-.005.032-.002.014-.002.045v11c0 .198.116.377.297.457l9 4 .003.001a.274.274 0 00.04.015l.008.003.047.013.002.001a.5.5 0 00.206 0l.002-.001a.362.362 0 00.047-.013l.008-.003.04-.015.003-.001 9-4a.499.499 0 00.297-.457v-11l-.002-.045zM9.5 1.047L17.269 4.5 9.5 7.953 1.731 4.5 9.5 1.047zM1 5.269l8 3.556v9.906l-8-3.556V5.269zm9 13.462V8.825l8-3.556v9.906l-8 3.556z"
  })));
}
LiniCube.propTypes = {
  size: PropTypes.number.isRequired
};